import { useState } from "react";
import Reveal from "./Reveal";
import { ChatIcon, FacebookIcon, InstagramIcon } from "./Icons";
import { brand, categories, contact } from "../content/site";

const whatsappLink = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
  `Hello ${brand.name}, I would like to discuss a project.`
)}`;

export default function Contact() {
  const [sent, setSent] = useState(false);

  // There is no server behind this form yet, so it opens the visitor's email app
  // with the message filled in. See README for how to connect a real form service.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key) => String(data.get(key) || "").trim();
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
            <a className="btn btn--gold" href={whatsappLink} target="_blank" rel="noopener noreferrer">
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

        <Reveal delay={0.15}>
          <form className="form" onSubmit={onSubmit}>
            <h3>Tell us about your project</h3>
            <div className="form__grid">
              <label className="field">
                <span>Name</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label className="field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label className="field">
                <span>Project type</span>
                <select name="type" defaultValue={categories[0]}>
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
            <button type="submit" className="btn btn--gold">
              Send enquiry
            </button>
            <p className="form__note" aria-live="polite">
              {sent
                ? "Your email app should have opened with the message ready to send. If it did not, please write to us at the address on the left."
                : "This opens your email app with your message ready to send."}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
