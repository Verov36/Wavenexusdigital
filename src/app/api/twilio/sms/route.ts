import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Twilio inbound-SMS webhook.
 *
 * Point a Twilio number's "A MESSAGE COMES IN" at POST https://<site>/api/twilio/sms.
 * Twilio posts a form body and signs it; we verify that signature before acting,
 * because the URL is public and anyone could otherwise forge an inbound text.
 *
 * Behaviour is set by environment variables, so changing the reply or the
 * forwarding number is a Vercel setting, not a deploy:
 *   TWILIO_AUTH_TOKEN      required. From the Twilio console. Without it we 503.
 *   TWILIO_SMS_FORWARD_TO  optional, E.164. Inbound texts are relayed here.
 *   TWILIO_SMS_AUTO_REPLY  optional. Sent back to whoever texted in.
 * With neither optional var set we return empty TwiML: Twilio is satisfied, the
 * sender gets nothing, and nothing errors.
 */

// A signed POST per request; nothing here may be cached or prerendered.
export const dynamic = "force-dynamic";

const xml = (body: string) =>
  new Response(`<?xml version="1.0" encoding="UTF-8"?><Response>${body}</Response>`, {
    status: 200,
    headers: { "content-type": "text/xml; charset=utf-8" },
  });

const escapeXml = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c]!);

/**
 * Twilio signs the full request URL with every POST parameter appended in
 * alphabetical order as key+value, HMAC-SHA1 under the auth token, base64.
 * See https://www.twilio.com/docs/usage/security#validating-requests
 */
function isFromTwilio(url: string, params: Record<string, string>, signature: string, token: string) {
  const payload = Object.keys(params)
    .sort()
    .reduce((acc, key) => acc + key + params[key], url);
  const expected = createHmac("sha1", token).update(Buffer.from(payload, "utf8")).digest("base64");
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * The URL Twilio signed, not the one Next.js sees. Vercel terminates TLS and
 * proxies, so request.url is http://<internal-host> and would never match.
 */
function publicUrl(request: Request) {
  const h = request.headers;
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? new URL(request.url).host;
  return `${proto}://${host}${new URL(request.url).pathname}`;
}

export async function POST(request: Request) {
  const token = process.env.TWILIO_AUTH_TOKEN;
  if (!token) {
    return new Response("TWILIO_AUTH_TOKEN is not set on this deployment.", { status: 503 });
  }

  const signature = request.headers.get("x-twilio-signature");
  if (!signature) return new Response("Missing X-Twilio-Signature.", { status: 403 });

  const form = await request.formData();
  const params: Record<string, string> = {};
  for (const [k, v] of form.entries()) if (typeof v === "string") params[k] = v;

  if (!isFromTwilio(publicUrl(request), params, signature, token)) {
    return new Response("Bad signature.", { status: 403 });
  }

  const from = params.From ?? "unknown";
  const body = params.Body ?? "";

  let twiml = "";
  const forwardTo = process.env.TWILIO_SMS_FORWARD_TO;
  if (forwardTo) {
    twiml += `<Message to="${escapeXml(forwardTo)}">${escapeXml(`From ${from}: ${body}`).slice(0, 1500)}</Message>`;
  }
  const autoReply = process.env.TWILIO_SMS_AUTO_REPLY;
  if (autoReply) twiml += `<Message>${escapeXml(autoReply)}</Message>`;

  return xml(twiml);
}

// A plain browser visit, so the endpoint can be confirmed live without Twilio.
export function GET() {
  const configured = Boolean(process.env.TWILIO_AUTH_TOKEN);
  return new Response(
    `Twilio inbound SMS webhook. POST only.\nTWILIO_AUTH_TOKEN: ${configured ? "set" : "NOT SET"}\n`,
    { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } },
  );
}
