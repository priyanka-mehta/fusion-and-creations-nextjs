import Reveal from "./Reveal";
import { services } from "../content/site";

export default function Services() {
  return (
    <section className="section section--alt" id="services">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Services</span>
          <h2 className="h2">
            Everything a space needs, <em>from idea to completion.</em>
          </h2>
        </Reveal>

        <div className="services__list">
          {services.map((service, i) => (
            <Reveal className="service" key={service.title} delay={(i % 2) * 0.12}>
              <span className="service__n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
