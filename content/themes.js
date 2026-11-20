// Design themes the client can switch between in preview mode.
// Colours live in styles/globals.css under :root[data-theme="<id>"]; the swatches
// here are only for the preview bar. The first theme is the site default.

export const themes = [
  { id: "noir", label: "Noir & Gold", swatch: ["#0c0a08", "#c9a26b", "#efe7da"] },
  { id: "ivory", label: "Ivory", swatch: ["#f6f1e9", "#a47b45", "#2a221a"] },
  { id: "forest", label: "Forest", swatch: ["#0e1411", "#c2a878", "#e9ede4"] },
  { id: "terracotta", label: "Terracotta", swatch: ["#f3ebe2", "#b4532a", "#2b1d16"] },
];

export const defaultTheme = themes[0].id;

// Fonts used only by alternative themes; loaded on demand in preview mode.
export const extraFontsHref =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500&display=swap";
