"use server";

import { Resend } from "resend";
import ContactEmail from "@/emails/ContactEmail";
import { site } from "@/lib/site";

export type ContactState =
  | { status: "idle" }
  | { status: "sent" }
  | { status: "error"; message: string; fields?: { email: string; message: string } };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const fields = { email, message };

  // Honeypot: real people never see this field, so anything in it is a bot. Pretend it worked.
  if (formData.get("company")) return { status: "sent" };

  if (!EMAIL_RE.test(email) || email.length > 320) {
    return { status: "error", message: "That email address doesn't look right.", fields };
  }
  if (message.length < 2 || message.length > 5000) {
    return { status: "error", message: "Write a message between 2 and 5,000 characters.", fields };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { status: "error", message: `The form isn't configured yet. Email ${site.email} directly.`, fields };
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: site.email,
    replyTo: email,
    subject: `Portfolio message from ${email}`,
    react: ContactEmail({ email, message }),
  });

  if (error) {
    console.error("contact: resend failed", error);
    return { status: "error", message: `Something went wrong sending that. Email ${site.email} directly.`, fields };
  }
  return { status: "sent" };
}
