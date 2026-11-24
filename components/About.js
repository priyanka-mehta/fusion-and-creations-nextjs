import Reveal from "./Reveal";
import { about, srcSetFor } from "../content/site";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about__media">
          <img
            src={about.image}
            srcSet={srcSetFor(about.image)}
            // The frame is square and the photo 3:2, so the photo is drawn 1.5x the frame's
            // width (sides cropped); request that width so it stays sharp.
            sizes="(max-width: 900px) min(150vw, 780px), min(60vw, 840px)"
            alt={about.imageAlt}
            loading="lazy"
          />
        </Reveal>

        <Reveal className="about__text" delay={0.05}>
          <span className="eyebrow">{about.heading}</span>
          <h2 className="h2">{about.headline}</h2>
          <p className="lead">{about.body}</p>
          <p className="lead">{about.closing}</p>

          <dl className="about__facts">
            {about.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
