import { NextResponse } from "next/server";

const RECIPIENT_EMAIL = "pastor@woodriverbc.org";

function clean(value: unknown, maxLength = 2000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const website = clean(body.website, 200);
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 200);
    const email = clean(body.email, 320);
    const phone = clean(body.phone, 100);

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { ok: false, message: "Please enter your name and either an email address or phone number." },
        { status: 400 }
      );
    }

    const formData = new FormData();
    formData.set("_subject", `Visitor Information — ${name}`);
    formData.set("_template", "table");
    formData.set("_captcha", "false");
    formData.set("Name", name);
    formData.set("Address", clean(body.address, 500) || "Not provided");
    formData.set("Email", email || "Not provided");
    formData.set("Phone", phone || "Not provided");
    formData.set("Home Church", clean(body.homeChurch, 300) || "Not provided");
    formData.set("First Visit", clean(body.firstVisit, 50) || "Not provided");
    formData.set("Others Visiting", clean(body.household, 500) || "Not provided");
    formData.set("How They Heard About WRBC", clean(body.howHeard, 500) || "Not provided");
    formData.set("Areas of Interest", clean(body.interests, 500) || "Not provided");
    formData.set("Preferred Follow-up", clean(body.followUp, 100) || "Not provided");
    formData.set("Prayer Request / Notes", clean(body.prayerRequest, 4000) || "None provided");

    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, message: "The form could not be sent. Please try again or contact the church directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "The form could not be sent. Please try again or contact the church directly." },
      { status: 500 }
    );
  }
}
