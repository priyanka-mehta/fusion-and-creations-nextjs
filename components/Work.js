import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { categories, projects, projectLabel, srcSetFor } from "../content/site";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="work__top">
          <div className="section__head">
            <span className="eyebrow">Portfolio</span>
            <h2 className="h2">
              Selected <em>work.</em>
            </h2>
          </div>

          <div className="chips" role="group" aria-label="Filter projects by type">
            {["All", ...categories].map((name) => (
              <button
                type="button"
                key={name}
                className={`chip${filter === name ? " is-active" : ""}`}
                aria-pressed={filter === name}
                onClick={() => setFilter(name)}
              >
                {name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid">
          {shown.map((project, i) => {
            const cover = project.images[0];
            return (
              <Link href={`/work/${project.slug}`} key={project.slug}>
                <a
                  className="card"
                  style={{ animationDelay: `${i * 0.06}s` }}
                  aria-label={`${project.category} project: ${projectLabel(project)}, ${project.images.length} photos`}
                >
                  <img
                    src={cover.src}
                    srcSet={srcSetFor(cover.src)}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    alt=""
                    loading="lazy"
                  />
                  <span className="card__body">
                    <span className="card__cat">{project.category}</span>
                    <span className="card__title" style={{ display: "block" }}>
                      {projectLabel(project)}
                    </span>
                    <span className="card__meta" style={{ display: "block" }}>
                      {project.images.length} photos · View project
                    </span>
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
