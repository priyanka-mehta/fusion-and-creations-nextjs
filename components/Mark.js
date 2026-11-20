// The Viraas arch mark. Drawn in the current text colour (set via the .mark class).
export default function Mark({ className = "" }) {
  return (
    <svg
      className={`mark ${className}`}
      viewBox="0 0 100 76"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M37 70V50C37 40 45 36 50 22C55 36 63 40 63 50V70" />
      <path d="M50 22V12" />
      <path d="M50 44L54 52L50 60L46 52Z" />
      <path d="M9 70V56C9 47 17 43 23 32C29 43 37 47 37 56" />
      <path d="M63 56C63 47 71 43 77 32C83 43 91 47 91 56V70" />
      <circle cx="50" cy="8.6" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
