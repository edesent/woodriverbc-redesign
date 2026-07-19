"use client";

import { Download, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

type VisitorData = {
  name: string;
  address: string;
  email: string;
  phone: string;
  homeChurch: string;
  firstVisit: string;
  household: string;
  howHeard: string;
  interests: string;
  prayerRequest: string;
  followUp: string;
};

const emptyForm: VisitorData = {
  name: "",
  address: "",
  email: "",
  phone: "",
  homeChurch: "",
  firstVisit: "",
  household: "",
  howHeard: "",
  interests: "",
  prayerRequest: "",
  followUp: "Email",
};

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

export function VisitorForm() {
  const [form, setForm] = useState<VisitorData>(emptyForm);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submitted, setSubmitted] = useState<VisitorData | null>(null);

  function update<K extends keyof VisitorData>(field: K, value: VisitorData[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (status === "sending") return;

    if (website.trim()) {
      setStatus("sent");
      return;
    }
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setErrorMessage("Please enter your name and either an email address or phone number.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/visitor-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "The form could not be sent.");
      }

      setSubmitted(form);
      setForm(emptyForm);
      setStatus("sent");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "The form could not be sent. Please try again.");
      setStatus("error");
    }
  }

  function downloadCsv() {
    if (!submitted) return;
    const headers = [
      "Date Submitted",
      "Name",
      "Address",
      "Email",
      "Phone",
      "Home Church",
      "First Visit",
      "Others Visiting",
      "How Heard",
      "Areas of Interest",
      "Preferred Follow-up",
      "Prayer Request / Notes",
    ];
    const row = [
      new Date().toLocaleString(),
      submitted.name,
      submitted.address,
      submitted.email,
      submitted.phone,
      submitted.homeChurch,
      submitted.firstVisit,
      submitted.household,
      submitted.howHeard,
      submitted.interests,
      submitted.followUp,
      submitted.prayerRequest,
    ];
    const csv = `${headers.map(csvEscape).join(",")}\r\n${row.map(csvEscape).join(",")}\r\n`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `wrbc-visitor-${submitted.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "entry"}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success">
        <h2>Thank you for visiting Wood River Baptist Church.</h2>
        <p>
          Your information has been sent privately to Pastor Jon. Someone from the church will follow up according to your preference.
        </p>
        {submitted ? (
          <button type="button" onClick={downloadCsv}>
            Download spreadsheet copy <Download size={16} />
          </button>
        ) : null}
      </div>
    );
  }

  return (
    <form className="contact-form visitor-form" onSubmit={onSubmit}>
      <p className="visitor-form-note">
        Fields marked with an asterisk are required. Please provide either an email address or phone number.
      </p>

      <div className="visitor-form-grid">
        <label className="visitor-form-wide">
          Name *
          <input name="name" value={form.name} onChange={(e) => update("name", e.target.value)} required autoComplete="name" />
        </label>
        <label className="visitor-form-wide">
          Address
          <input name="address" value={form.address} onChange={(e) => update("address", e.target.value)} autoComplete="street-address" />
        </label>
        <label>
          Email
          <input type="email" name="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" />
        </label>
        <label className="visitor-form-wide">
          What church are you a member of or currently attending?
          <input name="homeChurch" value={form.homeChurch} onChange={(e) => update("homeChurch", e.target.value)} />
        </label>
        <label>
          Is this your first visit?
          <select name="firstVisit" value={form.firstVisit} onChange={(e) => update("firstVisit", e.target.value)}>
            <option value="">Choose one</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
        <label>
          Preferred follow-up
          <select name="followUp" value={form.followUp} onChange={(e) => update("followUp", e.target.value)}>
            <option>Email</option>
            <option>Phone call</option>
            <option>Text message</option>
            <option>No follow-up needed</option>
          </select>
        </label>
        <label className="visitor-form-wide">
          Who else is visiting with you?
          <input name="household" value={form.household} onChange={(e) => update("household", e.target.value)} placeholder="Spouse, children, or other guests" />
        </label>
        <label className="visitor-form-wide">
          How did you hear about Wood River Baptist Church?
          <input name="howHeard" value={form.howHeard} onChange={(e) => update("howHeard", e.target.value)} placeholder="Friend, family, website, social media, sign, etc." />
        </label>
        <label className="visitor-form-wide">
          Are there any ministries or areas you would like to know more about?
          <input name="interests" value={form.interests} onChange={(e) => update("interests", e.target.value)} placeholder="Children, teens, Bible study, membership, baptism, serving, etc." />
        </label>
        <label className="visitor-form-wide">
          Prayer request, question, or other information
          <textarea name="prayerRequest" rows={5} value={form.prayerRequest} onChange={(e) => update("prayerRequest", e.target.value)} />
        </label>
      </div>

      <div className="hp-field" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
        </label>
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : (<>Send visitor information <Send size={16} /></>)}
      </button>

      {status === "error" ? (
        <p className="contact-form-error">{errorMessage}</p>
      ) : null}

      <p className="visitor-privacy-note">
        This information is sent privately to the pastor and is used only to welcome you and respond to your request.
      </p>
    </form>
  );
}
