import Reveal from "./Reveal";
import { testimonials } from "../content/site";

// "Nilesh Sheth" -> "NS", "The Magical Touch" -> "TM"
function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export default function Testimonials() {
  return (
    <section className="section section--alt" id="testimonials">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Testimonials</span>
          <h2 className="h2">
            What people <em>say about us.</em>
          </h2>
        </Reveal>

        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal as="figure" className="quote" key={t.name} delay={i * 0.12} style={{ margin: 0 }}>
              <span className="quote__glyph" aria-hidden="true">
                “
              </span>
              <p>{t.quote}</p>
              <footer>
                <span className="quote__avatar" aria-hidden="true">
                  {initials(t.name)}
                </span>
                <div>
                  <span className="quote__name">{t.name}</span>
                  <span className="quote__place">{t.place}</span>
                </div>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
