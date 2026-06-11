"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";

const ENDPOINT = "https://slackwebsitechat.vercel.app/api/chat/contact-form";
const API_KEY = "wbc_422afd7825c1a05f6d82ebf47816500fca0421f5874b4b6c";
const RECIPIENT_EMAIL = "pastor@woodriverbc.org";

export function ContactForm({ mode }: { mode: string }) {
  const isPrayer = mode === "prayer";
  const subject = isPrayer ? "🙏 Prayer Request from Website" : "❓ Question from Website";
  const messageLabel = isPrayer ? "Prayer request" : "Question";

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "sending" || status === "sent") return;
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in your name, contact, and message.");
      return;
    }
    setStatus("sending");
    setErrorMsg(null);
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey: API_KEY,
          subject,
          name,
          contact,
          message,
          website, // honeypot — server silently 200s if non-empty
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Send failed (${res.status})`);
      }
      setStatus("sent");
      setName("");
      setContact("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success">
        <h2>{isPrayer ? "Prayer request received." : "Question received."}</h2>
        <p>
          Thank you. Someone from Wood River Baptist Church will reach out to you at the
          contact you provided.
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
        {status === "sending" ? "Sending…" : (<>Send to church <Send size={16} /></>)}
      </button>

      {status === "error" && errorMsg ? (
        <p className="contact-form-error">{errorMsg}</p>
      ) : null}
    </form>
  );
}
