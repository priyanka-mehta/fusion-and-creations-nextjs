import Head from "next/head";
import Header from "../components/Header";
import Hero, { HERO_IMAGE } from "../components/Hero";
import About from "../components/About";
import Founder from "../components/Founder";
import Services from "../components/Services";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ContactBar from "../components/ContactBar";
import { brand, contact, enquiryMessage, siteUrl, srcSetFor } from "../content/site";

const title = `${brand.name} | ${brand.descriptor} in Gandhidham, Kutch`;
const description = `${brand.name}: ${brand.tagline} ${brand.heroSub}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "InteriorDesigner",
  name: brand.name,
  slogan: brand.tagline,
  description,
  foundingDate: String(brand.established),
  telephone: contact.phone,
  email: contact.email,
  image: `${siteUrl}/og.jpg`,
  url: siteUrl || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: "D-105/106, 1st Floor, B.B.Z. S-51, Zanda Chowk",
    addressLocality: "Gandhidham",
    addressRegion: "Gujarat",
    postalCode: "370201",
    addressCountry: "IN",
  },
  sameAs: [contact.instagram, contact.facebook],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={brand.name} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/og.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          rel="preload"
          as="image"
          href={HERO_IMAGE}
          imageSrcSet={srcSetFor(HERO_IMAGE)}
          imageSizes="100vw"
          fetchpriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Founder />
        <Services />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ContactBar message={enquiryMessage()} />
    </>
  );
}
