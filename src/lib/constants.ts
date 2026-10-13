import site from "./site.json";

export const COMPANY_INFO = {
  name: site.name,
  phone: site.phone,
  email: site.email,
  location: "Hampton Roads, Virginia",
};

/** tel: link for the business phone, in the E.164 form every dialer understands. */
export const TEL_HREF = `tel:${site.phoneE164}`;

// Audit, demo and contact forms post here; submissions land in WaveNexus CRM.
export const CRM_INTAKE_URL = "https://wavenexus-crm-production.up.railway.app/api/intake";

/**
 * Why a submission failed. "client" means the CRM rejected the input (show the
 * message so the visitor can fix it); "network" and "server" mean it never got
 * through, so the caller should offer another way to reach us.
 */
export class CrmError extends Error {
  constructor(message: string, readonly kind: "client" | "network" | "server") {
    super(message);
  }
}

/** Sends a form submission to the CRM. Throws a CrmError with a readable message if it fails. */
export async function submitToCrm(data: Record<string, string>) {
  let res: Response;
  try {
    res = await fetch(CRM_INTAKE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // The CRM can take a few seconds to wake up; don't leave the visitor waiting forever.
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw new CrmError("We couldn't reach our server.", "network");
  }
  const json = await res.json().catch(() => ({}));
  if (res.ok && json.ok) return;
  if (res.status >= 400 && res.status < 500 && res.status !== 429 && json.error) {
    throw new CrmError(json.error, "client");
  }
  throw new CrmError("Something went wrong sending your request.", "server");
}

export const portfolio = [
  {
    name: "Red Vine Mechanical HVAC",
    category: "Local Service Business",
    text: "Lead-driven redesign with service pages, quote form, and local SEO structure.",
    url: "https://www.redvinemechanical.com/",
  },
  {
    name: "Dizon Digital Media",
    category: "Social Media Management",
    text: "Strategic social media presence with content planning, audience engagement tools, and brand storytelling.",
    url: "https://dizondigitalmarketing.com/",
  },
  {
    name: "Blue Anchor Consulting",
    category: "Professional Services",
    text: "Authority-focused brand presentation with a premium booking experience.",
    url: null,
  },
];
