import Mark from "./Mark";
import { brand, srcSetFor } from "../content/site";

export const HERO_IMAGE = "/images/office/hitesh_mehta/2.webp";
const HERO_ALT = "Open-plan office with timber beams, glass-walled cabins and blue lounge seating";

export default function Hero() {
  // "Timeless Roots. Modern Spaces." is shown as two lines, the second in gold italics.
  const [first, second] = brand.tagline.split(". ");

  return (
    <section className="hero" id="top">
      <img
        className="hero__img"
        src={HERO_IMAGE}
        srcSet={srcSetFor(HERO_IMAGE)}
        sizes="100vw"
        alt={HERO_ALT}
        fetchpriority="high"
      />

      <div className="hero__content">
        <div className="fade-up" style={{ "--d": "0s" }}>
          <Mark />
        </div>
        <span className="hero__eyebrow fade-up" style={{ "--d": "0.08s" }}>
          {brand.descriptor} · {brand.city.split(",")[0]}
        </span>
        <h1 className="hero__title fade-up" style={{ "--d": "0.16s" }}>
          <span>{first}.</span>
          <em>{second}</em>
        </h1>
        <p className="hero__sub fade-up" style={{ "--d": "0.24s" }}>
          {brand.heroSub}
        </p>
        <div className="hero__actions fade-up" style={{ "--d": "0.32s" }}>
          <a href="#contact" className="btn btn--gold">
            Book a consultation
          </a>
          <a href="#work" className="btn btn--ghost">
            View our work
          </a>
        </div>
      </div>

      <div className="hero__meta" aria-hidden="true">
        <span>Since {brand.established}</span>
        <span>{brand.city.split(",").slice(0, 2).join(",")}</span>
      </div>
      <span className="hero__scroll" aria-hidden="true" />
    </section>
  );
}
