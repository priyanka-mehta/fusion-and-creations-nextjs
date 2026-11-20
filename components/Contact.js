import { useState } from "react";
import Reveal from "./Reveal";
import { ChatIcon, FacebookIcon, InstagramIcon } from "./Icons";
import { brand, categories, contact, enquiryMessage, whatsappLink } from "../content/site";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [type, setType] = useState(categories[0]);

  const fields = (form) => {
    const data = new FormData(form);
    return (key) => String(data.get(key) || "").trim();
  };

  // Works on every phone, unlike the email option: opens WhatsApp with the enquiry typed out.
  const sendOnWhatsApp = (e) => {
    const form = e.currentTarget.form;
    if (!form.reportValidity()) return;
    const field = fields(form);
    const text = [
      enquiryMessage(field("type")),
      "",
      `Name: ${field("name")}`,
      `Phone: ${field("phone")}`,
      field("email") ? `Email: ${field("email")}` : null,
      "",
      field("message"),
    ]
      .filter((line) => line !== null)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener");
  };

  // There is no server behind this form yet, so it opens the visitor's email app
  // with the message filled in. See README for how to connect a real form service.
  const onSubmit = (e) => {
    e.preventDefault();
    const field = fields(e.currentTarget);
    const subject = `Project enquiry from ${field("name")} (${field("type")})`;
    const body = [
      `Name: ${field("name")}`,
      `Phone: ${field("phone")}`,
      `Email: ${field("email")}`,
      `Project type: ${field("type")}`,
      "",
      field("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="h2">
            Let us design <em>your space.</em>
          </h2>
          <p className="lead" style={{ marginTop: 24 }}>
            {contact.intro}
          </p>

          <dl className="contact__details">
            <div>
              <dt>Studio</dt>
              <dd>
                {contact.address.map((line) => (
                  <span key={line} style={{ display: "block" }}>
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt>Call</dt>
              <dd>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
              </dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </dd>
            </div>
          </dl>

          <div className="contact__actions">
            <a className="btn btn--gold" href={whatsappLink(enquiryMessage(type))} target="_blank" rel="noopener noreferrer">
              <ChatIcon /> WhatsApp us
            </a>
            <a className="btn btn--ghost" href={contact.mapsLink} target="_blank" rel="noopener noreferrer">
              Get directions
            </a>
          </div>

          <div className="socials">
            <a className="social" href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} on Instagram`}>
              <InstagramIcon />
            </a>
            <a className="social" href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} on Facebook`}>
              <FacebookIcon />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form className="form" onSubmit={onSubmit}>
            <h3>Tell us about your project</h3>
            <div className="form__grid">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label className="field">
                <span>Phone</span>
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label className="field">
                <span>Project type</span>
                <select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="field field--full">
                <span>Message</span>
                <textarea name="message" required rows={4} />
              </label>
            </div>
            <div className="form__actions">
              <button type="button" className="btn btn--gold" onClick={sendOnWhatsApp}>
                <ChatIcon /> Send on WhatsApp
              </button>
              <button type="submit" className="btn btn--ghost">
                Send by email
              </button>
            </div>
            <p className="form__note" aria-live="polite">
              {sent
                ? "Your email app should have opened with the message ready to send. If it did not, please WhatsApp or call us instead."
                : "Both options open with your message ready to send."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
