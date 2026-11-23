import Link from "next/link";
import Mark from "./Mark";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { navLinks } from "./nav";
import { brand, contact } from "../content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Mark />
        <p className="footer__name">{brand.name}</p>
        <p className="footer__tagline">{brand.tagline}</p>

        <ul className="footer__nav">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="socials">
          <a className="social" href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} on Instagram`}>
            <InstagramIcon />
          </a>
          <a className="social" href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${brand.name} on Facebook`}>
            <FacebookIcon />
          </a>
        </div>

        <p className="footer__legal">
          © {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
