"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import partsLarge from "@/assets/hero/parts-1920.webp";
import partsSmall from "@/assets/hero/parts-960.webp";
import waveLarge from "@/assets/hero/wave-1920.webp";
import waveSmall from "@/assets/hero/wave-960.webp";
import whirlLarge from "@/assets/hero/whirl-1920.webp";
import whirlSmall from "@/assets/hero/whirl-960.webp";
import pieceLarge from "@/assets/hero/piece-1920.webp";
import pieceSmall from "@/assets/hero/piece-960.webp";

// The homepage hero art: liquid metal built from HVAC parts and tech. It pours
// from loose parts into a wave, a whirlpool, and finally the missing puzzle piece,
// and the cursor stirs it like water.
//
// A real (small) fluid simulation runs on the GPU. Its velocity field drags a map
// of texture coordinates around, so the artwork itself is carried by the flow; a
// gentle pull back to the undistorted image lets the form settle again. Shape
// changes are a burst of swirl: the current form is washed away and the next one
// resolves out of the same current. Visitors who prefer reduced motion, or whose
// device can't run it, get the still puzzle piece instead.

/** How long each shape rests before the water takes it to the next one (seconds). */
const HOLD = [1.2, 7, 7, 11];
/** How long the flow between two shapes lasts (seconds). */
const POUR = 3.4;

const SIM_SIZE = 192;
const PRESSURE_STEPS = 16;

const VERTEX = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const HEAD = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;
`;

// Semi-Lagrangian advection: look backwards along the velocity
const ADVECT = `${HEAD}
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 uTexel;
uniform float uDt;
uniform float uDissipation;
void main() {
  vec2 back = vUv - uDt * texture(uVelocity, vUv).xy * uTexel;
  outColor = uDissipation * texture(uSource, back);
}`;

// Stir: a soft push in a direction, around a point
const SPLAT = `${HEAD}
uniform sampler2D uTarget;
uniform vec2 uPoint;
uniform vec2 uForce;
uniform float uRadius;
uniform float uAspect;
void main() {
  vec2 d = vUv - uPoint;
  d.x *= uAspect;
  vec2 v = texture(uTarget, vUv).xy + uForce * exp(-dot(d, d) / uRadius);
  outColor = vec4(v, 0.0, 1.0);
}`;

// Slow, large eddies so the surface is never perfectly still
const SWIRL = `${HEAD}
uniform sampler2D uTarget;
uniform float uTime;
uniform float uEddy;
uniform float uSpin;
uniform float uDt;
void main() {
  vec2 p = vUv * 3.0;
  vec2 eddy = vec2(sin(p.y * 2.1 + uTime * 0.31) + 0.6 * sin(p.y * 4.3 - uTime * 0.23 + p.x),
                   sin(p.x * 1.9 - uTime * 0.27) + 0.6 * sin(p.x * 3.7 + uTime * 0.19 + p.y));
  // Plus one big rotation around the centre during a pour
  vec2 c = vUv - 0.5;
  vec2 spin = vec2(-c.y, c.x) * 2.0;
  vec2 v = texture(uTarget, vUv).xy + (eddy * uEddy + spin * uSpin) * uDt * 60.0;
  outColor = vec4(v, 0.0, 1.0);
}`;

const DIVERGENCE = `${HEAD}
uniform sampler2D uVelocity;
uniform vec2 uTexel;
void main() {
  float l = texture(uVelocity, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture(uVelocity, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture(uVelocity, vUv - vec2(0.0, uTexel.y)).y;
  float t = texture(uVelocity, vUv + vec2(0.0, uTexel.y)).y;
  outColor = vec4(0.5 * (r - l + t - b), 0.0, 0.0, 1.0);
}`;

const PRESSURE = `${HEAD}
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform vec2 uTexel;
void main() {
  float l = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  outColor = vec4((l + r + b + t - texture(uDivergence, vUv).x) * 0.25, 0.0, 0.0, 1.0);
}`;

// Remove what would compress the water, leaving only the swirling part
const GRADIENT = `${HEAD}
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform vec2 uTexel;
void main() {
  float l = texture(uPressure, vUv - vec2(uTexel.x, 0.0)).x;
  float r = texture(uPressure, vUv + vec2(uTexel.x, 0.0)).x;
  float b = texture(uPressure, vUv - vec2(0.0, uTexel.y)).x;
  float t = texture(uPressure, vUv + vec2(0.0, uTexel.y)).x;
  outColor = vec4(texture(uVelocity, vUv).xy - 0.5 * vec2(r - l, t - b), 0.0, 1.0);
}`;

// Carry the map of "where this pixel's artwork came from" along the flow, while
// easing it back towards the undistorted picture
const FLOW_MAP = `${HEAD}
uniform sampler2D uVelocity;
uniform sampler2D uMap;
uniform vec2 uTexel;
uniform float uDt;
uniform float uSettle;
void main() {
  vec2 back = vUv - uDt * texture(uVelocity, vUv).xy * uTexel;
  vec2 offset = texture(uMap, back).xy + (back - vUv);
  outColor = vec4(offset * (1.0 - uSettle * uDt), 0.0, 1.0);
}`;

const DISPLAY = `${HEAD}
uniform sampler2D uMap;
uniform sampler2D uVelocity;
uniform sampler2D uFrom;
uniform sampler2D uTo;
uniform float uMix;
uniform vec2 uTexel;
uniform float uFade;
uniform float uGlow;

float luma(vec3 c) { return max(c.r, max(c.g, c.b)); }

void main() {
  vec2 offset = texture(uMap, vUv).xy;
  vec2 uv = vUv + offset;

  // The two shapes blend smoothly, with the incoming one arriving where the
  // flow has moved furthest, so it appears to be carried in by the current
  float moved = clamp(length(offset) * 5.0, 0.0, 1.0);
  float m = smoothstep(0.0, 1.0, clamp(uMix * 1.5 - 0.25 + (moved - 0.5) * 0.5 * sin(uMix * 3.14159), 0.0, 1.0));
  vec3 col = mix(texture(uFrom, uv).rgb, texture(uTo, uv).rgb, m);

  // Light rolling across a moving liquid surface: slope comes from the flow map
  vec2 dx = texture(uMap, vUv + vec2(uTexel.x, 0.0)).xy - texture(uMap, vUv - vec2(uTexel.x, 0.0)).xy;
  vec2 dy = texture(uMap, vUv + vec2(0.0, uTexel.y)).xy - texture(uMap, vUv - vec2(0.0, uTexel.y)).xy;
  float slope = dx.x + dy.y;
  float strain = length(dx) + length(dy);
  float l = luma(col);
  col += vec3(1.0, 0.78, 0.48) * clamp(slope * 7.0, 0.0, 0.5) * l;
  col += vec3(0.96, 0.6, 0.16) * clamp(strain * 2.2, 0.0, 0.35) * smoothstep(0.03, 0.3, l);

  // The puzzle piece locking in: a warm pulse through the metal
  col *= 1.0 + uGlow * vec3(0.9, 0.6, 0.25);

  // The art sits on black: key that out so the page shows through, and feather
  // the outer edge so stretched pixels never show the image's rectangle
  l = luma(col);
  float alpha = smoothstep(0.02, 0.1, l);
  vec2 border = smoothstep(vec2(0.0), vec2(0.06), vUv) * smoothstep(vec2(0.0), vec2(0.06), 1.0 - vUv);
  alpha *= border.x * border.y * uFade;
  outColor = vec4(col * alpha, alpha);
}`;

type Target = { fbo: WebGLFramebuffer; tex: WebGLTexture };

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function makeProgram(gl: WebGL2RenderingContext, fragment: string) {
  const build = (type: number, source: string) => {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw new Error(gl.getShaderInfoLog(shader) || "Shader failed to compile");
    }
    return shader;
  };
  const program = gl.createProgram()!;
  gl.attachShader(program, build(gl.VERTEX_SHADER, VERTEX));
  gl.attachShader(program, build(gl.FRAGMENT_SHADER, fragment));
  gl.bindAttribLocation(program, 0, "aPos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Shader failed to link");
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
  for (let i = 0; i < count; i++) {
    const name = gl.getActiveUniform(program, i)!.name;
    uniforms[name] = gl.getUniformLocation(program, name);
  }
  return { program, uniforms };
}

export default function WaveSculpture({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<"pending" | "still" | "live">("pending");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const context = !reducedMotion && !saveData
      ? canvas.getContext("webgl2", { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "low-power" })
      : null;
    // Simulating water needs floating-point textures the GPU can draw into
    if (!context || !context.getExtension("EXT_color_buffer_float")) {
      setMode("still");
      return;
    }
    const gl: WebGL2RenderingContext = context;

    let raf = 0;
    let disposed = false;
    let visible = true;
    let cleanup = () => {};
    let scale = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1 : 1.5);
    const stillTimer = window.setTimeout(() => setMode((m) => (m === "pending" ? "still" : m)), 3500);

    const small = window.innerWidth < 900;
    const sources = small
      ? [partsSmall, waveSmall, whirlSmall, pieceSmall]
      : [partsLarge, waveLarge, whirlLarge, pieceLarge];

    Promise.all(sources.map((s) => loadImage(s.src)))
      .then((images) => {
        if (disposed) return;
        window.clearTimeout(stillTimer);

        const advect = makeProgram(gl, ADVECT);
        const splat = makeProgram(gl, SPLAT);
        const swirl = makeProgram(gl, SWIRL);
        const divergence = makeProgram(gl, DIVERGENCE);
        const pressure = makeProgram(gl, PRESSURE);
        const gradient = makeProgram(gl, GRADIENT);
        const flowMap = makeProgram(gl, FLOW_MAP);
        const display = makeProgram(gl, DISPLAY);

        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

        // Simulation grid
        let aspect = 16 / 9;
        const simH = SIM_SIZE;
        const simW = Math.round(SIM_SIZE * aspect);
        const makeTarget = (w: number, h: number): Target => {
          const tex = gl.createTexture()!;
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG16F, w, h, 0, gl.RG, gl.HALF_FLOAT, null);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          const fbo = gl.createFramebuffer()!;
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          return { fbo, tex };
        };
        const makePair = (w: number, h: number) => {
          let read = makeTarget(w, h);
          let write = makeTarget(w, h);
          return {
            get read() { return read; },
            get write() { return write; },
            swap() { [read, write] = [write, read]; },
          };
        };
        const velocity = makePair(simW, simH);
        const press = makePair(simW, simH);
        const map = makePair(simW * 2, simH * 2);
        const div = makeTarget(simW, simH);
        if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) {
          throw new Error("Float render targets unavailable");
        }

        // Artwork
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        const art = images.map((img) => {
          const tex = gl.createTexture()!;
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB8, gl.RGB, gl.UNSIGNED_BYTE, img);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          return tex;
        });
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);

        const bind = (unit: number, tex: WebGLTexture) => {
          gl.activeTexture(gl.TEXTURE0 + unit);
          gl.bindTexture(gl.TEXTURE_2D, tex);
          return unit;
        };
        const drawTo = (target: Target | null, w: number, h: number) => {
          gl.bindFramebuffer(gl.FRAMEBUFFER, target ? target.fbo : null);
          gl.viewport(0, 0, w, h);
          gl.drawArrays(gl.TRIANGLES, 0, 3);
        };

        const resize = () => {
          const r = canvas.getBoundingClientRect();
          if (!r.width || !r.height) return;
          canvas.width = Math.round(r.width * scale);
          canvas.height = Math.round(r.height * scale);
          aspect = r.width / r.height;
        };
        resize();
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);

        const addForce = (x: number, y: number, fx: number, fy: number, radius: number) => {
          gl.useProgram(splat.program);
          gl.uniform1i(splat.uniforms.uTarget, bind(0, velocity.read.tex));
          gl.uniform2f(splat.uniforms.uPoint, x, y);
          gl.uniform2f(splat.uniforms.uForce, fx, fy);
          gl.uniform1f(splat.uniforms.uRadius, radius);
          gl.uniform1f(splat.uniforms.uAspect, aspect);
          drawTo(velocity.write, simW, simH);
          velocity.swap();
        };

        // Cursor: each movement pushes the water in that direction
        let px = -1;
        let py = -1;
        let lastPointer = -1e9;
        const onPointer = (e: PointerEvent) => {
          if (e.pointerType === "touch") return; // on touch, the current moves on its own
          const r = canvas.getBoundingClientRect();
          const u = (e.clientX - r.left) / r.width;
          const v = 1 - (e.clientY - r.top) / r.height;
          if (u < 0 || u > 1 || v < 0 || v > 1) {
            px = -1;
            return;
          }
          if (px >= 0) {
            const dx = (u - px) * simW;
            const dy = (v - py) * simH;
            addForce(u, v, dx * 22, dy * 22, 0.012);
          }
          px = u;
          py = v;
          lastPointer = performance.now();
        };
        window.addEventListener("pointermove", onPointer, { passive: true });

        const intersection = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !raf) {
            previous = performance.now();
            raf = requestAnimationFrame(frame);
          }
        });
        intersection.observe(canvas);
        const onVisibility = () => {
          if (!document.hidden && visible && !raf) {
            previous = performance.now();
            raf = requestAnimationFrame(frame);
          }
        };
        document.addEventListener("visibilitychange", onVisibility);

        const texel = [1 / simW, 1 / simH] as const;
        const start = performance.now();
        let previous = start;
        let frames = 0;
        let slowFrames = 0;

        // Timeline: rest on a shape, pour to the next one
        let from = 0;
        let to = 1;
        let phaseStart = 0;
        let pouring = false;
        // After the first pass the loose parts are left behind: wave → whirlpool → piece → wave
        const next = (i: number) => (i === 3 ? 1 : i + 1);

        function frame(now: number) {
          raf = 0;
          if (disposed || !visible || document.hidden) return;
          const rawDt = (now - previous) / 1000;
          const dt = Math.min(rawDt, 1 / 30);
          previous = now;
          const t = (now - start) / 1000;

          frames++;
          if (rawDt > 0.034) slowFrames++;
          if (frames === 90) {
            if (slowFrames > 45 && scale > 0.6) {
              scale *= 0.75;
              resize();
            }
            frames = 0;
            slowFrames = 0;
          }

          // ---- timeline ----
          const elapsed = t - phaseStart;
          if (!pouring && elapsed > HOLD[from]) {
            pouring = true;
            phaseStart = t;
          } else if (pouring && elapsed > POUR) {
            pouring = false;
            from = to;
            to = next(from);
            phaseStart = t;
          }
          const progress = pouring ? Math.min((t - phaseStart) / POUR, 1) : 0;
          // A swell that rises and falls over the pour
          const swell = pouring ? Math.sin(progress * Math.PI) : 0;

          // ---- velocity ----
          gl.disable(gl.BLEND);
          gl.useProgram(advect.program);
          gl.uniform1i(advect.uniforms.uVelocity, bind(0, velocity.read.tex));
          gl.uniform1i(advect.uniforms.uSource, 0);
          gl.uniform2f(advect.uniforms.uTexel, texel[0], texel[1]);
          gl.uniform1f(advect.uniforms.uDt, dt);
          gl.uniform1f(advect.uniforms.uDissipation, 0.992);
          drawTo(velocity.write, simW, simH);
          velocity.swap();

          gl.useProgram(swirl.program);
          gl.uniform1i(swirl.uniforms.uTarget, bind(0, velocity.read.tex));
          gl.uniform1f(swirl.uniforms.uTime, t);
          gl.uniform1f(swirl.uniforms.uDt, dt);
          gl.uniform1f(swirl.uniforms.uEddy, 0.012 + swell * 0.28);
          gl.uniform1f(swirl.uniforms.uSpin, swell * 0.9);
          drawTo(velocity.write, simW, simH);
          velocity.swap();

          // Nobody at the mouse: a slow current wanders through on its own
          if (now - lastPointer > 2500) {
            const a = t * 0.5;
            addForce(0.5 + 0.32 * Math.sin(a), 0.5 + 0.26 * Math.sin(a * 1.7 + 1.0),
              Math.cos(a) * 0.9, Math.cos(a * 1.7 + 1.0) * 0.9, 0.02);
          }

          // ---- keep it incompressible, which is what makes it swirl like water ----
          gl.useProgram(divergence.program);
          gl.uniform1i(divergence.uniforms.uVelocity, bind(0, velocity.read.tex));
          gl.uniform2f(divergence.uniforms.uTexel, texel[0], texel[1]);
          drawTo(div, simW, simH);

          gl.useProgram(pressure.program);
          gl.uniform2f(pressure.uniforms.uTexel, texel[0], texel[1]);
          gl.uniform1i(pressure.uniforms.uDivergence, bind(1, div.tex));
          for (let i = 0; i < PRESSURE_STEPS; i++) {
            gl.uniform1i(pressure.uniforms.uPressure, bind(0, press.read.tex));
            drawTo(press.write, simW, simH);
            press.swap();
          }

          gl.useProgram(gradient.program);
          gl.uniform2f(gradient.uniforms.uTexel, texel[0], texel[1]);
          gl.uniform1i(gradient.uniforms.uPressure, bind(0, press.read.tex));
          gl.uniform1i(gradient.uniforms.uVelocity, bind(1, velocity.read.tex));
          drawTo(velocity.write, simW, simH);
          velocity.swap();

          // ---- carry the artwork ----
          gl.useProgram(flowMap.program);
          gl.uniform1i(flowMap.uniforms.uVelocity, bind(0, velocity.read.tex));
          gl.uniform1i(flowMap.uniforms.uMap, bind(1, map.read.tex));
          gl.uniform2f(flowMap.uniforms.uTexel, texel[0], texel[1]);
          gl.uniform1f(flowMap.uniforms.uDt, dt);
          // Settle slowly while it's pouring, firmly once a shape has formed
          gl.uniform1f(flowMap.uniforms.uSettle, pouring ? 0.35 + (1 - swell) * 0.9 : 1.6);
          drawTo(map.write, simW * 2, simH * 2);
          map.swap();

          // ---- draw ----
          gl.useProgram(display.program);
          gl.uniform1i(display.uniforms.uMap, bind(0, map.read.tex));
          gl.uniform1i(display.uniforms.uFrom, bind(1, art[from]));
          gl.uniform1i(display.uniforms.uTo, bind(2, art[to]));
          gl.uniform1f(display.uniforms.uMix, progress);
          gl.uniform2f(display.uniforms.uTexel, 1 / (simW * 2), 1 / (simH * 2));
          gl.uniform1f(display.uniforms.uFade, Math.min(t / 0.8, 1));
          // Rises as the pour into the piece finishes, then fades over a couple of seconds
          const arriving = pouring && to === 3 ? Math.max((progress - 0.75) / 0.25, 0) : 0;
          const settled = !pouring && from === 3 ? Math.exp(-(t - phaseStart) * 1.6) : 0;
          gl.uniform1f(display.uniforms.uGlow, Math.max(arriving, settled) * 0.55);
          gl.clearColor(0, 0, 0, 0);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          gl.clear(gl.COLOR_BUFFER_BIT);
          drawTo(null, canvas!.width, canvas!.height);

          raf = requestAnimationFrame(frame);
        }

        setMode("live");
        raf = requestAnimationFrame(frame);

        cleanup = () => {
          resizeObserver.disconnect();
          intersection.disconnect();
          window.removeEventListener("pointermove", onPointer);
          document.removeEventListener("visibilitychange", onVisibility);
        };
      })
      .catch(() => {
        window.clearTimeout(stillTimer);
        if (!disposed) setMode("still");
      });

    return () => {
      disposed = true;
      window.clearTimeout(stillTimer);
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, []);

  return (
    <div className={className} role="img"
      aria-label="Liquid copper and steel, built from HVAC parts and circuit boards, flowing into the shape of a missing puzzle piece">
      {mode === "still" && (
        <Image src={pieceLarge} alt="" fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-contain mix-blend-lighten" />
      )}
      <canvas ref={canvasRef} aria-hidden="true"
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${mode === "live" ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}
