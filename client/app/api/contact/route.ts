import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = "labsnezt@gmail.com";
const FROM_EMAIL = "NEZT Contact <onboarding@resend.dev>";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  message?: unknown;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const { name, email, company, projectType, budget, message } = payload;

  if (
    !isNonEmptyString(name) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(projectType) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Invalid email address." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const html = `
    <h2>New project inquiry</h2>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(email)}</li>
      <li><strong>Company:</strong> ${isNonEmptyString(company) ? escapeHtml(company) : "—"}</li>
      <li><strong>Project type:</strong> ${escapeHtml(projectType)}</li>
      <li><strong>Budget:</strong> ${isNonEmptyString(budget) ? escapeHtml(budget) : "—"}</li>
    </ul>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: sanitizeHeader(`NEZT contact — ${name} (${projectType})`),
    html,
  });

  if (error) {
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
