import Reveal from "./Reveal";
import { founder, press, srcSetFor } from "../content/site";

export default function Founder() {
  const [first, ...rest] = founder.name.split(" ");

  return (
    <section className="section founder" id="founder">
      <div className="container founder__grid">
        <Reveal className="founder__text">
          <span className="eyebrow">Meet the founder</span>
          <h2 className="h2">
            {first} <em>{rest.join(" ")}.</em>
          </h2>
          <p className="founder__role">{founder.role}</p>
          <p className="lead">{founder.bio}</p>
          <blockquote className="founder__quote">
            <p>“{founder.quote}”</p>
          </blockquote>
        </Reveal>

        <Reveal className="founder__press" delay={0.15}>
          <span className="founder__label">Featured in</span>
          {press.map((item) => (
            <a
              key={item.url}
              className="press"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read “${item.title}” in ${item.outlet} (opens in a new tab)`}
            >
              <span className="press__media">
                <img
                  src={item.image}
                  srcSet={srcSetFor(item.image)}
                  sizes="(max-width: 900px) 100vw, min(50vw, 640px)"
                  alt={`${item.outlet} magazine spread featuring ${founder.name}`}
                  loading="lazy"
                />
              </span>
              <span className="press__body">
                <span className="press__outlet">{item.outlet}</span>
                <span className="press__edition">
                  {item.edition} · {item.date}
                </span>
                <span className="press__cta">Read the feature ↗</span>
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
