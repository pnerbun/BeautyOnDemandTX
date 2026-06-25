import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "elizabethnerbun@gmail.com";

const {
  TWILIO_ACCOUNT_SID,
  TWILIO_API_KEY_SID,
  TWILIO_API_KEY_SECRET,
  TWILIO_FROM_NUMBER,
  SMS_NOTIFY_TO,
} = process.env;
const twilioClient =
  TWILIO_API_KEY_SID && TWILIO_API_KEY_SECRET && TWILIO_ACCOUNT_SID
    ? twilio(TWILIO_API_KEY_SID, TWILIO_API_KEY_SECRET, {
        accountSid: TWILIO_ACCOUNT_SID,
      })
    : null;

interface ContactFormData {
  name: string;
  email: string;
  weddingDate: string;
  venue: string;
  guestCount: string;
  services: string[];
  message: string;
}

export async function sendContactEmail(data: ContactFormData) {
  const servicesText = data.services.length > 0 ? data.services.join(", ") : "Not specified";

  const { error } = await resend.emails.send({
    from: "Beauty on Demand <hello@beautyondemandtx.com>",
    to: TO_EMAIL,
    replyTo: data.email,
    subject: `New Wedding Inquiry from ${data.name}`,
    text: `
New inquiry from beautyondemand.com

Name: ${data.name}
Email: ${data.email}
Wedding Date: ${data.weddingDate || "Not provided"}
Venue / Location: ${data.venue || "Not provided"}
Number of People: ${data.guestCount || "Not provided"}
Services: ${servicesText}

Message:
${data.message || "No message provided"}
    `.trim(),
    html: `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2C2C;">
  <div style="background: #F9F5F0; padding: 32px; border-top: 3px solid #C4714A;">
    <h1 style="font-size: 24px; font-weight: 400; margin: 0 0 8px;">New Wedding Inquiry</h1>
    <p style="font-size: 13px; color: #888; margin: 0; font-family: Arial, sans-serif;">from beautyondemand.com</p>
  </div>
  <div style="padding: 32px; background: #fff;">
    <table style="width: 100%; font-family: Arial, sans-serif; font-size: 14px; border-collapse: collapse;">
      <tr><td style="padding: 8px 0; color: #888; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 500;">${data.name}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #C4714A;">${data.email}</a></td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Wedding Date</td><td style="padding: 8px 0;">${data.weddingDate || "Not provided"}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Venue / Location</td><td style="padding: 8px 0;">${data.venue || "Not provided"}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Number of People</td><td style="padding: 8px 0;">${data.guestCount || "Not provided"}</td></tr>
      <tr><td style="padding: 8px 0; color: #888;">Services</td><td style="padding: 8px 0;">${servicesText}</td></tr>
    </table>
    ${data.message ? `
    <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #eee;">
      <p style="font-size: 12px; color: #888; font-family: Arial, sans-serif; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
      <p style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; margin: 0;">${data.message}</p>
    </div>` : ""}
  </div>
  <div style="padding: 16px 32px; background: #F9F5F0; font-family: Arial, sans-serif; font-size: 12px; color: #aaa;">
    Beauty on Demand · Rockwall, TX
  </div>
</div>
    `.trim(),
  });

  if (error) throw new Error(error.message);

  // SMS notification via Twilio — fire-and-forget so a delivery failure never
  // surfaces as a form error to the user.
  if (twilioClient && TWILIO_FROM_NUMBER && SMS_NOTIFY_TO) {
    twilioClient.messages
      .create({
        from: TWILIO_FROM_NUMBER,
        to: SMS_NOTIFY_TO,
        body: `New wedding inquiry: ${data.name} (${data.email}) — ${data.weddingDate || "date TBD"}, ${data.guestCount || "?"} ppl. Check email for details.`,
      })
      .catch((err) => console.error("Twilio SMS notification failed:", err));
  }

  // Confirmation email to the submitter — swallow errors so a delivery failure
  // doesn't surface as a form error to the user
  resend.emails.send({
    from: "Elizabeth at Beauty on Demand <hello@beautyondemandtx.com>",
    to: data.email,
    replyTo: TO_EMAIL,
    subject: "We received your inquiry — Beauty on Demand",
    text: `
Hi ${data.name},

Thank you for reaching out! I've received your inquiry and will get back to you within 1–2 business days to discuss your wedding day plans.

In the meantime, feel free to browse the gallery or follow along on Instagram @elizabethnerbun.

Warmly,
Elizabeth Nerbun
Beauty on Demand · Rockwall, TX
elizabethnerbun@gmail.com
    `.trim(),
    html: `
<div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2C2C;">
  <div style="background: #F9F5F0; padding: 32px; border-top: 3px solid #C4714A;">
    <h1 style="font-size: 22px; font-weight: 400; margin: 0 0 4px;">Thank you, ${data.name}!</h1>
    <p style="font-size: 13px; color: #888; margin: 0; font-family: Arial, sans-serif;">Beauty on Demand · Rockwall, TX</p>
  </div>
  <div style="padding: 32px; background: #fff; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.7; color: #444;">
    <p>I've received your inquiry and will be in touch within <strong>1–2 business days</strong> to discuss your wedding day plans.</p>
    <p>In the meantime, feel free to browse the gallery or follow along on Instagram for the latest looks and behind-the-scenes moments.</p>
    <p style="margin-top: 32px;">
      <a href="https://www.instagram.com/elizabethnerbun" style="color: #C4714A; text-decoration: none;">@elizabethnerbun on Instagram</a>
    </p>
  </div>
  <div style="padding: 16px 32px; background: #F9F5F0; font-family: Arial, sans-serif; font-size: 12px; color: #aaa;">
    Warmly, Elizabeth Nerbun &nbsp;·&nbsp; <a href="mailto:elizabethnerbun@gmail.com" style="color: #aaa;">elizabethnerbun@gmail.com</a>
  </div>
</div>
    `.trim(),
  });
}
