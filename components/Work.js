import { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { categories, projects, projectLabel, srcSetFor, wideCardsFor } from "../content/site";

export default function Work() {
  const [filter, setFilter] = useState("All");

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const isAll = filter === "All";
  // Double-width cards that keep every row full (see wideCardsFor). In "All" they are the
  // featured projects and also go full-width on tablets; in a filtered view they are desktop-only.
  const wideCards = wideCardsFor(shown, isAll);
  const gridClass = [
    "grid",
    wideCards.size && "grid--wide",
    isAll && wideCards.size && "grid--featured",
  ]
    .filter(Boolean)
    .join(" ");

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

        <div className={gridClass}>
          {shown.map((project, i) => {
            const cover = project.images[0];
            const wideImage = wideCards.get(project.slug);
            const wide = Boolean(wideImage);
            // A filtered-view wide card may use a different (landscape) photo than the cover.
            const altWide = wide && wideImage !== cover ? wideImage : null;
            return (
              <Link
                href={`/work/${project.slug}`}
                key={project.slug}
                className={`card${wide ? (isAll ? " card--wide" : " card--wide-desktop") : ""}`}
                style={{ animationDelay: `${i * 0.06}s` }}
                aria-label={`${project.category} project: ${projectLabel(project)}, ${project.images.length} photos`}
              >
                {altWide && (
                  <img
                    className="card__img--wide"
                    src={altWide.src}
                    srcSet={srcSetFor(altWide.src)}
                    sizes="66vw"
                    alt=""
                    loading="lazy"
                  />
                )}
                <img
                  className="card__img--cover"
                  src={cover.src}
                  srcSet={srcSetFor(cover.src)}
                  sizes={
                    wide && isAll
                      ? "(max-width: 600px) 100vw, (max-width: 960px) 100vw, 66vw"
                      : wide && !altWide
                      ? "(max-width: 600px) 100vw, (max-width: 960px) 56vw, 66vw"
                      : "(max-width: 600px) 100vw, (max-width: 960px) 56vw, 38vw"
                  }
                  alt={project.coverAlt || ""}
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
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
