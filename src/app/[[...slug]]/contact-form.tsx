"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const RECIPIENT_EMAIL = "pastor@woodriverbc.org";

export function ContactForm({ mode }: { mode: string }) {
  const isPrayer = mode === "prayer";
  const subject = isPrayer ? "Prayer Request from Website" : "Question from Website";
  const messageLabel = isPrayer ? "Prayer request" : "Question";

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    if (website.trim()) {
      setStatus("sent");
      return;
    }
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, contact, and message.");
      return;
    }

    setStatus("sending");
    setErrorMsg(null);

    const emailBody = [
      `Name: ${name.trim()}`,
      `Email or phone: ${contact.trim()}`,
      "",
      `${messageLabel}:`,
      message.trim(),
    ].join("\n");

    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    setStatus("sent");
    setName("");
    setContact("");
    setMessage("");
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success">
        <h2>{isPrayer ? "Prayer request ready to send." : "Question ready to send."}</h2>
        <p>
          Your email app should open a message addressed to Pastor Jon at {RECIPIENT_EMAIL}.
          Please send that email to complete your submission.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
      </label>
      <label>
        Email or phone
        <input
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          autoComplete="email"
        />
      </label>
      <label>
        {messageLabel}
        <textarea
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>

      {/* Honeypot — visually hidden, off-screen, no autocomplete. Bots that
          autofill every field will trip this; real users never see it. */}
      <div className="hp-field" aria-hidden="true">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Opening email…" : (<>Send to church <Send size={16} /></>)}
      </button>

      {status === "error" && errorMsg ? (
        <p className="contact-form-error">{errorMsg}</p>
      ) : null}
    </form>
  );
}
