import { useCallback, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Reveal from "../../components/Reveal";
import Lightbox from "../../components/Lightbox";
import ContactBar from "../../components/ContactBar";
import { brand, enquiryMessage, projects, projectLabel, siteUrl, srcSetFor } from "../../content/site";

export function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

// Facts shown under the title; only the ones set in content/site.js appear.
const FACTS = [
  ["Type", "category"],
  ["Location", "location"],
  ["Year", "year"],
  ["Area", "area"],
  ["Scope", "scope"],
];

export default function ProjectPage({ slug }) {
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const [active, setActive] = useState(null);
  const trigger = useRef(null);
  const close = useCallback(() => {
    setActive(null);
    if (trigger.current && trigger.current.focus) trigger.current.focus();
  }, []);

  const label = projectLabel(project);
  const cover = project.images[0];
  const title = `${label} | ${project.category} interior by ${brand.name}`;
  const description =
    project.summary ||
    `${project.category} interior design by ${brand.name}, ${brand.city}. ${project.images.length} photos.`;
  const facts = FACTS.filter(([, key]) => project[key]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={brand.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${cover.src}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          as="image"
          href={cover.src}
          imageSrcSet={srcSetFor(cover.src)}
          imageSizes="100vw"
          fetchpriority="high"
        />
      </Head>

      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="phero">
          <img
            className="phero__img"
            src={cover.src}
            srcSet={srcSetFor(cover.src)}
            sizes="100vw"
            alt={project.coverAlt || ""}
            fetchpriority="high"
          />
          <div className="container phero__inner">
            <nav className="crumbs fade-up" aria-label="Breadcrumb" style={{ "--d": "0s" }}>
              <Link href="/#work">
                <a>Work</a>
              </Link>
              <span aria-hidden="true">/</span>
              <span>{project.category}</span>
            </nav>
            <h1 className="phero__title fade-up" style={{ "--d": "0.08s" }}>
              {label}
            </h1>
            {facts.length > 0 && (
              <dl className="facts fade-up" style={{ "--d": "0.16s" }}>
                {facts.map(([name, key]) => (
                  <div key={key}>
                    <dt>{name}</dt>
                    <dd>{project[key]}</dd>
                  </div>
                ))}
                <div>
                  <dt>Photos</dt>
                  <dd>{project.images.length}</dd>
                </div>
              </dl>
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            {project.summary && (
              <Reveal as="p" className="lead project__summary">
                {project.summary}
              </Reveal>
            )}

            <div className="masonry">
              {project.images.map((image, i) => (
                <button
                  type="button"
                  className="masonry__item"
                  key={image.src}
                  style={{ animationDelay: `${Math.min(i, 8) * 0.05}s` }}
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setActive(i);
                  }}
                  aria-label={`Open photo ${i + 1} of ${project.images.length}`}
                >
                  <img
                    src={image.thumb}
                    srcSet={srcSetFor(image.src)}
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    alt={i === 0 && project.coverAlt ? project.coverAlt : `${label}, photo ${i + 1}`}
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                </button>
              ))}
            </div>
          </div>
        </section>

        {projects.length > 1 && (
          <section className="section section--alt pnav" aria-label="More projects">
            <div className="container">
              <div className="pnav__grid">
                {[
                  ["Previous project", prev],
                  ["Next project", next],
                ].map(([dir, p]) => (
                  <Link href={`/work/${p.slug}`} key={dir}>
                    <a className="card pnav__card">
                      <img
                        src={p.images[0].thumb}
                        srcSet={srcSetFor(p.images[0].src)}
                        sizes="(max-width: 700px) 100vw, 50vw"
                        alt=""
                        loading="lazy"
                      />
                      <span className="card__body">
                        <span className="card__cat">{dir}</span>
                        <span className="card__title" style={{ display: "block" }}>
                          {projectLabel(p)}
                        </span>
                        <span className="card__meta" style={{ display: "block" }}>
                          {p.category} · {p.images.length} photos
                        </span>
                      </span>
                    </a>
                  </Link>
                ))}
              </div>
              <div className="pnav__cta">
                <Link href="/#contact">
                  <a className="btn btn--gold">Book a consultation</a>
                </Link>
                <Link href="/#work">
                  <a className="btn btn--ghost">All projects</a>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ContactBar message={`${enquiryMessage(project.category)} I saw the ${label} project on your website.`} />

      {active !== null && (
        <Lightbox
          key={active}
          title={label}
          category={project.category}
          images={project.images}
          start={active}
          onClose={close}
        />
      )}
    </>
  );
}
