"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/pastor@woodriverbc.org";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function MensSteakFryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || status === "sent") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const website = String(data.get("website") ?? "").trim();

    // Honeypot: bots often fill every field, while real visitors never see this.
    if (website) {
      setStatus("sent");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const cellPhone = String(data.get("cellPhone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const permissionToText = data.get("permissionToText") === "yes" ? "Yes" : "No";
    const guestNames = String(data.get("guestNames") ?? "").trim() || "None listed";
    const dietaryNeeds = String(data.get("dietaryNeeds") ?? "").trim() || "None listed";

    if (!name || !cellPhone) {
      setStatus("error");
      setErrorMessage("Please enter your name and cell phone number.");
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Men's Steak Fry Registration",
          _template: "table",
          _captcha: "false",
          _replyto: email || undefined,
          Event: "Men's Steak Fry — Friday, July 24, 2026 at 6:00 PM",
          Name: name,
          "Cell phone": cellPhone,
          "Permission to text": permissionToText,
          Email: email || "Not provided",
          "Guest names": guestNames,
          "Dietary needs": dietaryNeeds,
        }),
      });

      if (!response.ok) {
        throw new Error("The registration service did not accept the submission.");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not send your registration. Please try again or text the church at (401) 206-9378.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success" aria-live="polite">
        <h2>Your registration has been submitted.</h2>
        <p>Thank you. We look forward to seeing you at the Men&apos;s Steak Fry.</p>
      </div>
    );
  }

  return (
    <form className="contact-form steak-fry-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>

      <div className="steak-fry-form-row">
        <label>
          Cell phone
          <input
            name="cellPhone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
          />
        </label>
        <label>
          Email <span className="form-optional">(optional)</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>

      <label className="steak-fry-checkbox">
        <input name="permissionToText" type="checkbox" value="yes" />
        <span>I give Wood River Baptist Church permission to text me about this event.</span>
      </label>

      <label>
        Names of guests <span className="form-optional">(optional)</span>
        <textarea
          name="guestNames"
          rows={4}
          placeholder="Please list each guest's name."
        />
      </label>

      <label>
        Dietary needs <span className="form-optional">(optional)</span>
        <textarea
          name="dietaryNeeds"
          rows={4}
          placeholder="Please tell us about any allergies or other dietary needs."
        />
      </label>

      <div className="hp-field" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="form-privacy-note">
        Your information will be emailed to Pastor Jon and used only to plan this event.
      </p>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? (
          "Sending registration…"
        ) : (
          <>
            Register for the Steak Fry <Send size={16} />
          </>
        )}
      </button>

      {status === "error" && errorMessage ? (
        <p className="contact-form-error" aria-live="polite">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
