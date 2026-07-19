"use client";

import { Send } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";

const RECIPIENT_EMAIL = "pastor@woodriverbc.org";

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

export function VisitorForm() {
  const [form, setForm] = useState<VisitorData>(emptyForm);
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "1") {
      setStatus("sent");
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  function update<K extends keyof VisitorData>(field: K, value: VisitorData[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status === "error") setStatus("idle");
  }

  function addHiddenField(target: HTMLFormElement, name: string, value: string) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    target.appendChild(input);
  }

  function onSubmit(event: FormEvent) {
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

    const deliveryForm = document.createElement("form");
    deliveryForm.method = "POST";
    deliveryForm.action = `https://formsubmit.co/${RECIPIENT_EMAIL}`;
    deliveryForm.style.display = "none";

    addHiddenField(deliveryForm, "_subject", `Visitor Information — ${form.name.trim()}`);
    addHiddenField(deliveryForm, "_template", "table");
    addHiddenField(deliveryForm, "_captcha", "false");
    addHiddenField(deliveryForm, "_next", `${window.location.origin}/visitor-form?submitted=1`);
    addHiddenField(deliveryForm, "Name", form.name.trim());
    addHiddenField(deliveryForm, "Address", form.address.trim() || "Not provided");
    addHiddenField(deliveryForm, "Email", form.email.trim() || "Not provided");
    addHiddenField(deliveryForm, "Phone", form.phone.trim() || "Not provided");
    addHiddenField(deliveryForm, "Home Church", form.homeChurch.trim() || "Not provided");
    addHiddenField(deliveryForm, "First Visit", form.firstVisit || "Not provided");
    addHiddenField(deliveryForm, "Others Visiting", form.household.trim() || "Not provided");
    addHiddenField(deliveryForm, "How They Heard About WRBC", form.howHeard.trim() || "Not provided");
    addHiddenField(deliveryForm, "Areas of Interest", form.interests.trim() || "Not provided");
    addHiddenField(deliveryForm, "Preferred Follow-up", form.followUp || "Not provided");
    addHiddenField(deliveryForm, "Prayer Request / Notes", form.prayerRequest.trim() || "None provided");

    document.body.appendChild(deliveryForm);
    deliveryForm.submit();
  }

  if (status === "sent") {
    return (
      <div className="contact-form-success">
        <h2>Thank you for visiting Wood River Baptist Church.</h2>
        <p>
          Your information has been sent privately to Pastor Jon. Someone from the church will follow up according to your preference.
        </p>
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
