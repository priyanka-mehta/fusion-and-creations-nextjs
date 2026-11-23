import Reveal from "./Reveal";
import { promises, services } from "../content/site";

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
            <Reveal className="service" key={service.title} delay={(i % 2) * 0.05}>
              <span className="service__n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="promises">
          <span className="eyebrow">Why Viraas</span>
          <ul>
            {promises.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
