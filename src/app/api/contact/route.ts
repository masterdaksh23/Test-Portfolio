import { NextResponse } from "next/server";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Basic Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // Structured logging for production observability
    const contactPayload = {
      receiptId: `MSG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject?.trim() || "General Inquiry / Hackathon Opportunity",
      message: message.trim(),
    };

    console.log("[CONTACT_FORM_SUBMISSION]", JSON.stringify(contactPayload, null, 2));

    // Optional environment-based real email provider hooks (e.g. Resend or Webhook) can be attached here
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["dakshofficial0823@gmail.com"],
            subject: `[Portfolio Inquiry] ${contactPayload.subject} from ${contactPayload.name}`,
            text: `From: ${contactPayload.name} (${contactPayload.email})\nReceipt: ${contactPayload.receiptId}\n\nMessage:\n${contactPayload.message}`,
          }),
        });
      } catch (err) {
        console.warn("[RESEND_OPTIONAL_DISPATCH_FAILED]", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully! Daksh will get back to you shortly.",
        receiptId: contactPayload.receiptId,
        timestamp: contactPayload.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again later or email directly." },
      { status: 500 }
    );
  }
}

