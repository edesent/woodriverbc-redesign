"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="wbc-email-chat-button"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ask Pastor Jon a question"
      >
        <img src="/woodriver/juneau-family.jpg" alt="" />
        <span>Ask Pastor Jon</span>
      </button>

      {isOpen ? (
        <div className="wbc-chat-form-overlay" role="dialog" aria-modal="true" aria-labelledby="wbc-chat-form-title">
          <div className="wbc-chat-form-card">
            <button
              className="wbc-chat-form-close"
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close question form"
            >
              ×
            </button>

            <h2 id="wbc-chat-form-title">Ask Pastor Jon</h2>
            <p>
              Send a question or message to Pastor Jon. He will receive it by email and can reply to you directly.
            </p>

            <form action="https://formsubmit.co/pastor@woodriverbc.org" method="POST" className="wbc-chat-form">
              <input type="hidden" name="_subject" value="Question from the Wood River Baptist Church website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <label>
                Name
                <input name="name" type="text" autoComplete="name" required />
              </label>

              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>

              <label>
                Phone <span>optional</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>

              <label className="wbc-chat-checkbox">
                <input name="permission_to_text" type="checkbox" value="Yes" />
                <span>It is okay to text me.</span>
              </label>

              <label>
                Question or message
                <textarea name="message" rows={5} required />
              </label>

              <button type="submit">Send message</button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
