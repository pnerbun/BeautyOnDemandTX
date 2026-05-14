import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/send-email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, weddingDate, venue, guestCount, services, message } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      weddingDate: weddingDate?.trim() ?? "",
      venue: venue?.trim() ?? "",
      guestCount: guestCount ?? "",
      services: Array.isArray(services) ? services : [],
      message: message?.trim() ?? "",
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try emailing us directly." },
      { status: 500 }
    );
  }
}
