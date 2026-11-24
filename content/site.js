// All site content, extracted from the old components. The new design reads from here only.
// Items marked TODO need your input before launch.

import imageWidths from "./image-widths.json";

// Set NEXT_PUBLIC_SITE_URL (for example https://www.viraas.in) so share previews
// on WhatsApp, Facebook and Google use full image links (see next.config.js; on Vercel it
// falls back to the production domain).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

// Full URL for a path ("/work/x" -> "https://www.viraas.in/work/x"); the bare path if unset.
export const absoluteUrl = (path = "/") => `${siteUrl}${path}`;

// Share image (public/og.jpg), sized to what WhatsApp, Facebook and LinkedIn expect.
export const shareImage = {
  src: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Viraas, interior design studio in Gandhidham, Kutch: Timeless Roots. Modern Spaces.",
};

// Places the studio serves, given to search engines as its service area. Add towns you
// work in (for example "Adipur", "Anjar", "Bhuj") to help people there find you.
export const serviceAreas = ["Gandhidham", "Kutch"];

export const brand = {
  name: "Viraas",
  tagline: "Timeless Roots. Modern Spaces.",
  descriptor: "Interior Design Studio",
  // New copy (not from the old site). Edit freely.
  heroSub:
    "Contemporary interior design for homes, offices, salons and restaurants in Gandhidham, Kutch.",
  city: "Gandhidham, Kutch, Gujarat",
  established: 2019,
};

// Set to false to hide client names on project cards and in the gallery.
export const showClientNames = true;

export const about = {
  heading: "About us",
  // New copy (not from the old site), derived from the closing paragraph. Edit freely.
  headline: "Where tradition meets contemporary design.",
  body:
    "Leading contemporary interior design firm in Gandhidham since 2019. We believe that any place you spend time in directly affects your being. The place along with its interior affects what you think, how you think, what you do, how you interact with people, how motivated you are and a million other aspects of your daily life.",
  facts: [
    { label: "Established", value: "2019" },
    { label: "Studio", value: "Gandhidham, Kutch" },
    { label: "We design", value: "Homes, offices, salons & restaurants" },
  ],
  // Landscape photo shown in a square frame, centred on the Viraas sign (see About.js).
  image: "/images/about/reception.webp",
  imageAlt:
    "Viraas reception with the Viraas sign on a lit plaster arch, a live-edge wooden desk, brass pendant lights and a flowering olive tree",
  closing:
    "Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. Client is the soul of the project.",
};

// Founder section on the home page. Bio and quote are taken from the Insights Success
// feature (March 2022); edit freely.
export const founder = {
  name: "Virali Mehta",
  role: "Founder & CEO",
  // Add a square portrait (at least 300 x 300px), e.g. "/images/founder/virali.webp",
  // and it appears beside her title.
  photo: null,
  bio: "Virali founded the studio in Gandhidham in 2019, after gaining experience at two design firms. Since then the team has completed residential, commercial and restaurant projects, each one shaped around the client's own taste.",
  quote:
    "My interior designs aim to translate the client's ideas and a holistic professional vision into a space that fuses aesthetics, comfort and practicality, and reflects the client's personality.",
};

// Press features, newest first. Add more entries to show them side by side.
export const press = [
  {
    outlet: "Insights Success",
    edition: "The Women Owning the Business Arena",
    title: "Virali Mehta: The Best Way to Add Personality to Your Spaces",
    date: "March 2022",
    url: "https://www.insightssuccess.in/virali-mehta-the-best-way-to-add-personality-to-your-spaces/",
    image: "/images/press/insights-success-2022.webp",
  },
];

export const services = [
  {
    title: "Consultation",
    text: "Design-only option: we deliver concepts and working drawings, and you manage the build.",
  },
  {
    title: "Space Planning",
    text: "Layouts for homes and commercial spaces that make every square foot work, balancing flow, storage and light.",
  },
  {
    title: "Lighting",
    text: "Accent lighting is used to set a mood, accentuate an aesthetically pleasing feature or draw attention away from less attractive areas.",
  },
  {
    title: "Accessories",
    text: "This is the best way to add personality to your home. Pieces of art and different accessories are a reflection of your true taste.",
  },
  {
    // Made by outside workshops, not in-house, so don't claim "built in-house".
    title: "Fabrication",
    text: "Custom furniture, panelling and fixtures, made to our designs.",
  },
  {
    title: "Turnkey Solutions",
    text: "We handle everything from design to handover, so you get one team and one point of contact.",
  },
];

// Promises rather than services, shown as a short strip under the services list.
export const promises = [
  {
    title: "On-time handover",
    text: "From first concept to installation, we plan the project around your deadline.",
  },
  {
    title: "Always reachable",
    text: "Questions mid-project? Call or WhatsApp us any time.",
  },
  {
    title: "Your taste first",
    text: "Every design starts from how you live and what you love.",
  },
];

export const testimonials = [
  {
    quote:
      "Great mixture of art and creativity. Wish you touch the sky soon. Best interior designer ever met. All the best for your future projects.",
    name: "The Magical Touch",
    place: "Gandhidham",
    photo: "/images/feedback/the_magical_touch.webp",
  },
  {
    quote:
      "Very dedicated and creative team to work with. Adorable designs and presence of mind to pick up new ideas.",
    name: "Nilesh Sheth",
    place: "Gandhidham",
    photo: "/images/feedback/nilesh_sheth.webp",
  },
  {
    quote:
      "Amazing and talented designer in the town. Love her color sense, use of any material and her perspective is just beyond words.",
    name: "Priya Agarwal",
    place: "Gandhidham",
    photo: "/images/feedback/user.webp",
  },
];

export const contact = {
  intro:
    "Tell us about your space. The first conversation (and the coffee) is on us.",
  address: [
    "D-105/106, 1st Floor",
    "B.B.Z. S-51, Zanda Chowk,",
    "Gandhidham - Kutch (370201)",
  ],
  phone: "+91 8141310606",
  whatsapp: "918141310606", // digits only, with country code
  email: "viralimehta61@gmail.com", // TODO: confirm, or switch to a Viraas address
  instagram: "https://www.instagram.com/viraas.studio_",
  facebook: "https://www.facebook.com/share/188Ynre4e3/",
  // Opens Google Maps directions. Swap for the new listing's share link once it is renamed.
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Zanda+Chowk+Gandhidham+Kutch+370201",
};

// Every photo has a full-size ".webp", a "-md.webp" (up to 1200px) and a "-thumb.webp" (up to
// 640px). Run `npm run images` after adding photos: it creates the "-md" files and records each
// file's real width in image-widths.json. srcSetFor gives the browser every distinct size with
// its true width, so it downloads only what it needs and never shows a small photo too small.
export const srcSetFor = (src) => {
  const base = src.replace(/\.webp$/, "");
  const [thumb, md, full] = imageWidths[src] || [640, 1200, 2000];
  // When two files share a width (small photos), keep the larger file: it is the higher-quality one.
  const seen = new Set();
  return [
    [src, full],
    [`${base}-md.webp`, md],
    [`${base}-thumb.webp`, thumb],
  ]
    .filter(([, w]) => w && !seen.has(w) && seen.add(w))
    .reverse()
    .map(([file, w]) => `${file} ${w}w`)
    .join(", ");
};

// Real pixel width of a photo's full-size file (used by the full-screen viewer).
export const fullWidthOf = (src) => (imageWidths[src] || [])[2] || 2000;

// The best photo for a double-width card: the cover if it is landscape, otherwise the project's
// widest landscape photo. Returns null when the project has no landscape photo at least 1000px
// wide (a portrait photo cropped to a wide card shows only a thin slice).
export const wideImageFor = (project) => {
  const landscape = project.images
    .map((image) => {
      const [, , w, h] = imageWidths[image.src] || [];
      return { image, w, ratio: w && h ? w / h : 0 };
    })
    .filter((x) => x.ratio >= 1.25 && x.w >= 1000);
  if (!landscape.length) return null;
  if (landscape[0].image === project.images[0]) return landscape[0];
  return landscape.reduce((best, x) => (x.w > best.w ? x : best));
};

// Which projects get a double-width card so every row of a 3-column grid is full.
// "All" uses the projects marked featured. A filtered view picks the projects with the best
// landscape photos: 4 projects need 2 wide cards, 5 need 1, 2 need 1; 3 or 6 need none.
// A single project (or too few landscape photos) gets no wide card; it is centred instead.
export const wideCardsFor = (shown, isAll) => {
  if (isAll) return new Map(shown.filter((p) => p.featured).map((p) => [p.slug, p.images[0]]));
  const needed = (3 - (shown.length % 3)) % 3;
  if (shown.length < 2 || !needed) return new Map();
  const ranked = shown
    .map((p) => ({ p, wide: wideImageFor(p) }))
    .filter((x) => x.wide)
    .sort((a, b) => b.wide.w - a.wide.w);
  if (ranked.length < needed) return new Map();
  return new Map(ranked.slice(0, needed).map((x) => [x.p.slug, x.wide.image]));
};

// Build image paths from folder + file stem.
const photos = (folder, stems) =>
  stems.map((s) => ({
    src: `/images/${folder}/${s}.webp`,
    thumb: `/images/${folder}/${s}-thumb.webp`,
    xs: `/images/${folder}/${s}-xs.webp`, // tiny, for the full-screen viewer's thumbnail strip
  }));

// Projects marked "hasOldLogo" have the old "FC - Fusion & Creations - The Designing Studio"
// logo printed on the photos themselves (nearly every Madhukant Shah photo does), so they are
// hidden for now. Once you have clean copies of those photos, replace the files in
// public/images/residence/madhukant_shah and set this to true (or delete the flag).
export const showProjectsWithOldLogo = false;

// "client" is shown on the old site as the project caption. Check that each client is
// happy to be named publicly, otherwise use "title" only.
// "coverAlt" describes the first photo for screen readers and image search.
// "featured: true" gives the project a double-width card in the "All" view of the homepage grid.
// Rows stay full when (number of projects + number of featured) divides by 3: today 12 + 3 = 15.
// After adding or removing a project, feature or un-feature projects to keep that true.
// Optional per project, shown on its page (/work/<slug>) when set:
//   summary: "A short paragraph about the brief and the design.",
//   location: "Gandhidham", year: 2022, area: "2,400 sq ft", scope: "Full interiors"
const allProjects = [
  {
    slug: "kailash-nivas",
    featured: true,
    coverAlt: "Double-height living room with a carved teak staircase screen, cane-and-wood daybed, sage sofa and slatted wooden ceiling",
    category: "Residence",
    title: "Kailash Nivas",
    client: "Kailash Nivas",
    images: photos(
      "residence/kailash_nivas",
      [5, 33, 41, 34, 38, 40, 39, 42, 1, 15, 25, 19, 6, 18, 7, 17, 27, 28, 35, 37, 8, 20, 23, 16, 9, 24, 26, 14, 3, 12, 11, 13, 10, 29, 30, 31, 32, 2, 36, 4, 22, 21]
    ),
  },
  {
    slug: "ashok-vora-residence",
    coverAlt: "Living and dining area with a white open-shelf partition, navy sofa with lime cushions and a light-wood dining table",
    category: "Residence",
    title: "Residence",
    client: "Mr. Ashok Vora",
    images: photos("residence/ashok_vora", [1, 2, 8, 4, 5, 6, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 7]),
  },
  {
    slug: "suresh-sorathiya-residence",
    coverAlt: "Bedroom with a grey-and-gold patterned feature wall, wall-mounted TV and low wooden console",
    category: "Residence",
    title: "Residence",
    client: "Mr. Suresh Sorathiya",
    images: photos("residence/suresh_sorathiya", [1, 2, 5, 6, 7, 8, 11, 12, 13, 18, 15, 16, 3, 4, 9, 17, 10, 14]),
  },
  {
    slug: "madhukant-shah-residence",
    category: "Residence",
    title: "Residence",
    client: "Mr. Madhukant Shah",
    hasOldLogo: true,
    images: photos(
      "residence/madhukant_shah",
      [12, 14, 8, 23, 22, 24, 25, 26, 16, 27, 13, 18, 28, 29, 30, 1, 4, 7, 20, 10, 17, 19, 2, 3, 11, 21, 9, 5, 15, 6]
    ),
  },
  {
    slug: "viraas-studio",
    coverAlt: "Display shelving with pendant lights and handcrafted decor in the Viraas studio",
    category: "Office",
    title: "Office",
    // The studio's own office.
    client: "The Viraas Studio",
    // Photo 1 is left out: it shows the old "FUSION & CREATIONS" sign on the glass.
    images: photos("office/virali_mehta", [5, 3, 2, 4]),
  },
  {
    slug: "hitesh-mehta-office",
    coverAlt: "Corner office cabin with a glass-topped desk, timber ceiling and full-height windows",
    category: "Office",
    title: "Office",
    client: "Mr. Hitesh Mehta",
    images: photos("office/hitesh_mehta", [1, 2, 4, 5, 6, 7, 8, 9, 3, 10]),
  },
  {
    slug: "khodiyar-office",
    coverAlt: "Wall of wave-shaped walnut display shelves holding small plants and a miniature bicycle",
    category: "Office",
    title: "Office",
    client: "Khodiyar",
    // The source photos had an old "F&C Design Studio" watermark along the bottom; it was
    // cropped off when these files were made, so re-crop if you ever replace them from Drive.
    images: photos("office/khodiyar", [3, 5, 9, 10, 11, 7, 6, 8, 4, 2, 1]),
  },
  {
    slug: "gokul-furnishing",
    featured: true,
    coverAlt: "Furnishing showroom lounge with blue and olive sofas, a carved wall panel and floor-to-ceiling curtain samples under a glowing ceiling frame",
    category: "Office",
    title: "Showroom",
    client: "Gokul Furnishing",
    images: photos("office/gokul_furnishing", [
      29, 16, 2, 39, 11, 21, 9, 33, 27, 44, 18, 14, 31, 25, 20, 42, 1, 3, 4, 5, 6, 7, 8, 10, 12, 13, 15, 17, 19, 22, 23, 24, 26, 28, 30, 32, 34, 35, 36, 37, 38, 40, 41, 43, 45, 46
    ]),
  },
  {
    slug: "gadhvi-office",
    coverAlt: "Office with a curved pink-laminate desk on an arched white leg, sage cabinets, a mustard pin board and a wall of terracotta outlined arches",
    category: "Office",
    title: "Office",
    client: "Mr. Gadhvi",
    // The source photos had an old "© F & C DESIGN STUDIO" watermark along the bottom; it was
    // cropped off when these files were made, so re-crop if you ever replace them from Drive.
    images: photos("office/gadhvi", [1, 3, 2]),
  },
  {
    slug: "ciel-photographer",
    coverAlt: "Bright photography studio office with a walnut desk, black track lights, roller blinds and a jute rug on glossy white tiles",
    category: "Office",
    title: "Studio",
    client: "Ciel Photographer",
    // Only phone-sized copies (1179px wide) were supplied, so the full-size files are kept
    // lossless. Replace them with the camera originals if you get them.
    images: photos("office/ciel_photographer", [1, 4, 3, 2]),
  },
  {
    slug: "saloni-nails-makeover",
    featured: true,
    coverAlt: "Salon with a backlit fluted sage arch, navy velvet bench, arched mirrors with warm halo lighting and hanging greenery",
    category: "Salon",
    title: "Saloni Nails & Makeover",
    client: "Saloni Nails & Makeover",
    images: photos("saloon/saloni", [4, 5, 1, 3, 2]),
  },
  {
    slug: "rakhi-shah-salon",
    coverAlt: "Salon station with a full-length mirror column, brick-effect wall and black styling chair",
    category: "Salon",
    title: "Salon",
    client: "Rakhi Shah",
    images: photos("saloon/rakhi_shah", [1, 3, 2, 5, 4, 6]),
  },
  {
    slug: "tulsi-restaurant",
    coverAlt: "Warmly lit restaurant dining room with tan upholstered chairs and exposed-bulb ceiling lights",
    category: "Restaurant",
    title: "Tulsi Restaurant",
    client: "Tulsi Restaurant",
    images: photos("restaurant/tulsi_restaurant", [1, 2, 3, 8, 9, 10, 11, 12, 13, 5, 6, 17, 14, 16, 4, 7, 15]),
  },
];

export const projects = allProjects.filter((p) => showProjectsWithOldLogo || !p.hasOldLogo);

export const categories = ["Residence", "Office", "Salon", "Restaurant"];

// What to call a project: the client's name, or "Residence 01" when names are hidden.
export function projectLabel(project) {
  if (showClientNames) return project.client;
  const n = projects.filter((p) => p.category === project.category).indexOf(project) + 1;
  return `${project.category} ${String(n).padStart(2, "0")}`;
}

// A wa.me link that opens WhatsApp with the message already typed.
export const whatsappLink = (message) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

// "Hi Viraas, I'd like to discuss a residence project."
export const enquiryMessage = (type) =>
  type && type !== "Other"
    ? `Hi ${brand.name}, I'd like to discuss a ${type.toLowerCase()} project.`
    : `Hi ${brand.name}, I'd like to discuss a project.`;

// Pixel size of a photo's full-size file, [width, height] (for share-preview tags).
export const sizeOf = (src) => {
  const [, , w, h] = imageWidths[src] || [];
  return [w || 2000, h || 1333];
};

// Where a project is, for its page title and search results.
export const projectPlace = (project) => project.location || "Gandhidham, Kutch";

// Search-result description for a project page: its own summary if one is written,
// otherwise built from the cover photo's description, so every page reads differently.
export function projectDescription(project) {
  if (project.summary) return project.summary;
  const intro = `${projectLabel(project)}: ${project.category.toLowerCase()} interior design by ${brand.name} in ${projectPlace(project)}.`;
  const detail = project.coverAlt ? ` ${project.coverAlt}.` : "";
  return `${intro}${detail} ${project.images.length} photos.`;
}
