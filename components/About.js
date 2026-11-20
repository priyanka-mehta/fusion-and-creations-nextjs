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
            sizes="(max-width: 900px) 100vw, min(40vw, 560px)"
            alt="A warmly lit interior designed by the studio"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="about__text" delay={0.15}>
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
