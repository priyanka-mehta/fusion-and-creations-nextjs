import { ChatIcon, PhoneIcon } from "./Icons";
import { contact, whatsappLink } from "../content/site";

// Call / WhatsApp bar fixed to the bottom of the screen, phones only (see .contact-bar).
export default function ContactBar({ message }) {
  return (
    <div className="contact-bar">
      <a className="contact-bar__call" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
        <PhoneIcon /> Call
      </a>
      <a className="contact-bar__wa" href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
        <ChatIcon /> WhatsApp
      </a>
    </div>
  );
}
