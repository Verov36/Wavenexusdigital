"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import waveLarge from "@/assets/hero/wave-1920.webp";
import waveSmall from "@/assets/hero/wave-960.webp";
import partsLarge from "@/assets/hero/parts-1920.webp";
import partsSmall from "@/assets/hero/parts-960.webp";

// The homepage hero art: a wave built from HVAC parts and tech. On load the loose
// parts assemble into the wave; the cursor breaks it apart again and it reforms
// behind it. It is two still images dissolved through each other by a fragment
// shader. Visitors who prefer reduced motion, or whose device can't run it, get
// the still wave instead.

const TRAIL = 12;

const VERTEX = `
attribute vec2 aPos;
varying vec2 vUv;
void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}`;

const FRAGMENT = `
precision highp float;
uniform sampler2D uWave;
uniform sampler2D uParts;
uniform float uTime;
uniform float uAspect;
uniform float uScatter;
uniform vec3 uTrail[${TRAIL}];
varying vec2 vUv;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  return 0.55 * noise(p) + 0.3 * noise(p * 2.1 + 3.7) + 0.15 * noise(p * 4.3 + 9.2);
}
// Curl of the noise: a swirling flow that never bunches up
vec2 flow(vec2 p) {
  const float e = 0.02;
  float dx = fbm(p + vec2(e, 0.0)) - fbm(p - vec2(e, 0.0));
  float dy = fbm(p + vec2(0.0, e)) - fbm(p - vec2(0.0, e));
  return vec2(dy, -dx) / (2.0 * e);
}

void main() {
  vec2 p = vec2(vUv.x * uAspect, vUv.y);

  // How strongly the cursor's trail is pulling this pixel apart, and which way
  float pull = 0.0;
  vec2 away = vec2(0.0);
  for (int i = 0; i < ${TRAIL}; i++) {
    vec2 d = p - uTrail[i].xy;
    float w = uTrail[i].z * exp(-dot(d, d) / 0.045);
    pull += w;
    away += d * w;
  }
  pull = clamp(pull, 0.0, 1.0);
  float m = clamp(uScatter + pull, 0.0, 1.0);

  // Grainy threshold, so it comes apart in pieces rather than cross-fading
  float n = 0.75 * fbm(p * 5.0 + uTime * 0.04) + 0.25 * noise(p * 70.0);
  float k = smoothstep(n - 0.14, n + 0.14, m * 1.4 - 0.2);

  vec2 f = flow(p * 2.4 + uTime * 0.035);
  vec2 idle = f * 0.0016;
  vec2 uvWave = vUv + idle + f * k * 0.05 + away * 0.28;
  vec2 uvParts = vUv + idle - f * (1.0 - k) * 0.035;

  vec3 wave = texture2D(uWave, uvWave).rgb;
  vec3 parts = texture2D(uParts, uvParts).rgb;
  vec3 col = mix(wave, parts, k);

  // Amber heat along the edge where it's breaking apart, plus flying sparks
  float edge = 4.0 * k * (1.0 - k);
  float lum = max(col.r, max(col.g, col.b));
  col += vec3(0.96, 0.62, 0.14) * edge * (0.12 + lum * 0.6);
  vec2 cell = floor((p + f * 0.02) * 150.0);
  float spark = step(0.982, hash(cell)) * (0.5 + 0.5 * sin(uTime * 5.0 + hash(cell + 7.0) * 40.0));
  col += vec3(1.0, 0.72, 0.3) * spark * edge * 1.1;

  // The art sits on black: key that out so the page shows through, and feather
  // the outer edge so displaced pixels never show the image's rectangle
  lum = max(col.r, max(col.g, col.b));
  float alpha = smoothstep(0.018, 0.09, lum);
  vec2 border = smoothstep(vec2(0.0), vec2(0.05), vUv) * smoothstep(vec2(0.0), vec2(0.05), 1.0 - vUv);
  alpha *= border.x * border.y;
  gl_FragColor = vec4(col * alpha, alpha);
}`;

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Shader failed to compile");
  }
  return shader;
}

export default function WaveSculpture({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // "still": show the image. "live": the shader has taken over.
  const [mode, setMode] = useState<"pending" | "still" | "live">("pending");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    const gl = !reducedMotion && !saveData
      ? canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false, powerPreference: "low-power" })
      : null;
    if (!gl) {
      setMode("still");
      return;
    }

    let raf = 0;
    let disposed = false;
    let visible = true;
    let scale = Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1 : 1.5);
    // Slow connection: show the still wave rather than an empty space
    const stillTimer = window.setTimeout(() => setMode((m) => (m === "pending" ? "still" : m)), 2500);

    const small = window.innerWidth < 900;
    Promise.all([loadImage((small ? waveSmall : waveLarge).src), loadImage((small ? partsSmall : partsLarge).src)])
      .then(([waveImg, partsImg]) => {
        if (disposed) return;
        window.clearTimeout(stillTimer);

        const program = gl.createProgram()!;
        gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERTEX));
        gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, FRAGMENT));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Shader failed to link");
        gl.useProgram(program);

        gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(program, "aPos");
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        [waveImg, partsImg].forEach((img, i) => {
          gl.activeTexture(gl.TEXTURE0 + i);
          gl.bindTexture(gl.TEXTURE_2D, gl.createTexture());
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        });
        gl.uniform1i(gl.getUniformLocation(program, "uWave"), 0);
        gl.uniform1i(gl.getUniformLocation(program, "uParts"), 1);
        const uTime = gl.getUniformLocation(program, "uTime");
        const uAspect = gl.getUniformLocation(program, "uAspect");
        const uScatter = gl.getUniformLocation(program, "uScatter");
        const uTrail = gl.getUniformLocation(program, "uTrail");

        let aspect = 16 / 9;
        const resize = () => {
          const r = canvas.getBoundingClientRect();
          if (!r.width || !r.height) return;
          canvas.width = Math.round(r.width * scale);
          canvas.height = Math.round(r.height * scale);
          aspect = r.width / r.height;
          gl.viewport(0, 0, canvas.width, canvas.height);
        };
        resize();
        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);

        // Newest cursor positions, each fading out, so it leaves a wake behind it
        const trail = new Float32Array(TRAIL * 3);
        let head = 0;
        let lastX = -9;
        let lastY = -9;
        let lastPointer = -1e9;
        const push = (x: number, y: number, strength: number) => {
          if (Math.hypot(x - lastX, y - lastY) < 0.035) {
            const prev = ((head + TRAIL - 1) % TRAIL) * 3;
            trail[prev + 2] = Math.max(trail[prev + 2], strength);
            return;
          }
          trail[head * 3] = x;
          trail[head * 3 + 1] = y;
          trail[head * 3 + 2] = strength;
          head = (head + 1) % TRAIL;
          lastX = x;
          lastY = y;
        };
        const onPointer = (e: PointerEvent) => {
          if (e.pointerType === "touch") return; // on touch, the idle motion plays instead
          const r = canvas.getBoundingClientRect();
          const u = (e.clientX - r.left) / r.width;
          const v = 1 - (e.clientY - r.top) / r.height;
          if (u < 0 || u > 1 || v < 0 || v > 1) return;
          lastPointer = performance.now();
          push(u * aspect, v, 0.85);
        };
        window.addEventListener("pointermove", onPointer, { passive: true });

        const intersection = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          if (visible && !raf) raf = requestAnimationFrame(frame);
        });
        intersection.observe(canvas);
        const onVisibility = () => {
          if (!document.hidden && visible && !raf) raf = requestAnimationFrame(frame);
        };
        document.addEventListener("visibilitychange", onVisibility);

        const start = performance.now();
        let previous = start;
        let slowFrames = 0;
        let frames = 0;

        function frame(now: number) {
          raf = 0;
          if (disposed || !visible || document.hidden) return;
          const dt = Math.min((now - previous) / 1000, 0.1);
          previous = now;
          const t = (now - start) / 1000;

          // Too slow on this device: drop the resolution rather than stutter
          frames++;
          if (dt > 0.034) slowFrames++;
          if (frames === 60) {
            if (slowFrames > 30 && scale > 0.6) {
              scale *= 0.75;
              resize();
            }
            frames = 0;
            slowFrames = 0;
          }

          // Opening: the parts hold for a beat, then assemble into the wave
          const intro = Math.min(Math.max((t - 0.35) / 2.4, 0), 1);
          const scatter = 1 - intro * intro * (3 - 2 * intro);

          // Nobody's touching it: drift a soft disturbance slowly through the wave
          if (intro === 1 && now - lastPointer > 3500) {
            const a = t * 0.22;
            push((0.5 + 0.34 * Math.sin(a)) * aspect, 0.5 + 0.2 * Math.sin(a * 2.3 + 1.0), 0.26);
          }
          for (let i = 2; i < trail.length; i += 3) trail[i] *= Math.exp(-dt * 1.5);

          gl!.uniform1f(uTime, t);
          gl!.uniform1f(uAspect, aspect);
          gl!.uniform1f(uScatter, scatter);
          gl!.uniform3fv(uTrail, trail);
          gl!.drawArrays(gl!.TRIANGLES, 0, 3);
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

    let cleanup = () => {};
    return () => {
      disposed = true;
      window.clearTimeout(stillTimer);
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, []);

  return (
    <div className={className} role="img"
      aria-label="A breaking wave built from copper coils, condenser fans, gauges, circuit boards, server panels and wiring">
      {mode === "still" && (
        <Image src={waveLarge} alt="" fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-contain mix-blend-lighten" />
      )}
      <canvas ref={canvasRef} aria-hidden="true"
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${mode === "live" ? "opacity-100" : "opacity-0"}`} />
    </div>
  );
}
