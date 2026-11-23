import { useEffect, useState } from "react";
import { themes, defaultTheme, extraFontsHref } from "../content/themes";

// Client preview bar: shown only when the URL has ?theme=<id> or ?preview.
// The choice is kept in the URL and in sessionStorage, so it carries across pages.
const STORAGE_KEY = "previewTheme";

function remember(id) {
  try {
    sessionStorage.setItem(STORAGE_KEY, id);
  } catch {
    // Storage blocked (private mode): the URL still carries the theme.
  }
}

function recalled() {
  try {
    return sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export default function ThemeBar() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(defaultTheme);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const saved = recalled();
    if (!params.has("theme") && !params.has("preview") && !saved) return;
    const id = params.get("theme") || saved;
    const valid = themes.some((t) => t.id === id) ? id : defaultTheme;
    setCurrent(valid);
    remember(valid);
    setVisible(true);
    document.documentElement.classList.add("has-themebar");

    if (!document.querySelector(`link[href="${extraFontsHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = extraFontsHref;
      document.head.appendChild(link);
    }
  }, []);

  const select = (id) => {
    setCurrent(id);
    setCopied(false);
    remember(id);
    const root = document.documentElement;
    if (id === defaultTheme) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", id);

    const url = new URL(window.location.href);
    url.searchParams.delete("preview");
    url.searchParams.set("theme", id);
    // Keep Next.js's own history state so the back button still works.
    window.history.replaceState(window.history.state, "", url);
  };

  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("theme", current);
    url.hash = "";
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(true);
    } catch {
      window.prompt("Copy this link:", url.toString());
    }
  };

  if (!visible) return null;

  return (
    <div className="themebar" role="region" aria-label="Design theme preview">
      <span className="themebar__label">Theme</span>
      <div className="themebar__list">
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            className="themebar__opt"
            aria-pressed={current === t.id}
            onClick={() => select(t.id)}
          >
            <span className="themebar__swatch" aria-hidden="true">
              {t.swatch.map((c) => (
                <i key={c} style={{ background: c }} />
              ))}
            </span>
            {t.label}
          </button>
        ))}
      </div>
      <button type="button" className="themebar__copy" onClick={copyLink}>
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
