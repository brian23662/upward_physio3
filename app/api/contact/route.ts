import { NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/contact
 *
 * Accepts JSON: { name, email, phone, service, message }
 * Sends an email via Resend to TO_EMAIL.
 *
 * Required env vars:
 *   - RESEND_API_KEY
 *   - FROM_EMAIL (e.g. onboarding@resend.dev for testing)
 *   - TO_EMAIL (where submissions land)
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

// Basic email regex — good enough for client-side validation, server still
// trusts Resend's validation at send time.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Trim and length-cap a string to keep payloads reasonable
function clean(value: unknown, maxLen = 2000): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLen);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  // Verify env config first — fail loudly during development if it's missing
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const toEmail = process.env.TO_EMAIL;

  if (!apiKey || !fromEmail || !toEmail) {
    console.error("Missing env vars: RESEND_API_KEY, FROM_EMAIL, or TO_EMAIL");
    return NextResponse.json(
      { error: "Server email is not configured." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const service = clean(body.service, 100);
  const message = clean(body.message, 5000);

  // Validation
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #143646;">
      <h2 style="color: #e6661a; margin-bottom: 8px;">New consultation request</h2>
      <p style="color: #57939e; margin-top: 0;">From the Upward Physio website</p>

      <div style="margin-top: 24px; padding: 20px; background: #f8f9fa; border-radius: 12px;">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
        ${service ? `<p><strong>Interested in:</strong> ${escapeHtml(service)}</p>` : ""}
      </div>

      <div style="margin-top: 24px;">
        <strong>Message:</strong>
        <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(message)}</p>
      </div>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from: `Upward Physio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New consultation request from ${name}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send. Please try again or call us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
