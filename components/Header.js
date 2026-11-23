import { useEffect, useState } from "react";
import Link from "next/link";
import Mark from "./Mark";
import { navLinks } from "./nav";
import { brand } from "../content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll and let Escape close it.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" onClick={close} aria-label={`${brand.name}, home`}>
          <Mark />
          <span className="brand__name">{brand.name}</span>
        </Link>

        <nav id="site-nav" className={`nav${open ? " is-open" : ""}`} aria-label="Main">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={close}>{link.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#contact" className="btn btn--ghost btn--sm" onClick={close}>
                Book a consultation
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
