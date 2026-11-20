// All site content, extracted from the old components. The new design reads from here only.
// Items marked TODO need your input before launch.

// Set NEXT_PUBLIC_SITE_URL (for example https://www.viraas.in) so share previews
// on WhatsApp, Facebook and Google use full image links.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

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
  // The old stock photo of a laptop was replaced with one of your own projects.
  image: "/images/office/virali_mehta/5.webp",
  closing:
    "Our team takes over everything, from an idea and concept development to realization. We believe in traditions and incorporate them within our innovations. Client is the soul of the project.",
};

// Founder section on the home page. Bio and quote are taken from the Insights Success
// feature (March 2022); edit freely.
export const founder = {
  name: "Virali Mehta",
  role: "Founder & CEO",
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
    text: "We provide designs and the working drawings only to the client and rest is client's responsibility.",
  },
  {
    title: "Space Planning",
    text: "We do planning for home and other commercial interior drawing, so that we can bring creativity along with innovation in your space.",
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
    title: "Fabrication",
    text: "Standard and custom design-fabrication providing a complete package of your needs with a focus on digital fabrication methods; fabricates architectural products and furniture.",
  },
  {
    title: "Turnkey Solutions",
    text: "We also provide turnkey solutions which are easily developed and deployed into current design.",
  },
  {
    title: "Timely Delivery",
    text: "From initial concept through to design, installation and completion. Timely completion of the project is our main goal.",
  },
  {
    title: "Always Available",
    text: "If you need any urgency then contact us anytime. We are always happy to help you.",
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
    "How we can help you. We like to talk and on the strength of that you are invited for a coffee at our office.",
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

// Every photo has a full-size ".webp" (max 2000px wide), a "-md.webp" (1200px) and a
// "-thumb.webp" (640px). Run `npm run images` after adding photos to create the "-md" files.
// srcSetFor gives the browser all three so it downloads only the size it needs.
export const srcSetFor = (src) => {
  const base = src.replace(/\.webp$/, "");
  return `${base}-thumb.webp 640w, ${base}-md.webp 1200w, ${src} 2000w`;
};

// Build image paths from folder + file stem.
const photos = (folder, stems) =>
  stems.map((s) => ({
    src: `/images/${folder}/${s}.webp`,
    thumb: `/images/${folder}/${s}-thumb.webp`,
  }));

// Projects marked "hasOldLogo" have the old "FC - Fusion & Creations - The Designing Studio"
// logo printed on the photos themselves (nearly every Madhukant Shah photo does), so they are
// hidden for now. Once you have clean copies of those photos, replace the files in
// public/images/residence/madhukant_shah and set this to true (or delete the flag).
export const showProjectsWithOldLogo = false;

// "client" is shown on the old site as the project caption. Check that each client is
// happy to be named publicly, otherwise use "title" only.
// Optional per project, shown on its page (/work/<slug>) when set:
//   summary: "A short paragraph about the brief and the design.",
//   location: "Gandhidham", year: 2022, area: "2,400 sq ft", scope: "Full interiors"
const allProjects = [
  {
    slug: "ashok-vora-residence",
    category: "Residence",
    title: "Residence",
    client: "Mr. Ashok Vora",
    images: photos("residence/ashok_vora", [1, 2, 8, 4, 5, 6, 3, 9, 10, 11, 12, 13, 14, 15, 16, 17, 7]),
  },
  {
    slug: "suresh-sorathiya-residence",
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
    slug: "virali-mehta-office",
    category: "Office",
    title: "Office",
    client: "Virali Mehta",
    // Photo 1 is left out: it shows the old "FUSION & CREATIONS" sign on the glass.
    images: photos("office/virali_mehta", [5, 3, 2, 4]),
  },
  {
    slug: "hitesh-mehta-office",
    category: "Office",
    title: "Office",
    client: "Mr. Hitesh Mehta",
    images: photos("office/hitesh_mehta", [1, 2, 4, 5, 6, 7, 8, 9, 3, 10]),
  },
  {
    slug: "rakhi-shah-salon",
    category: "Salon",
    title: "Salon",
    client: "Rakhi Shah",
    images: photos("saloon/rakhi_shah", [1, 3, 2, 5, 4, 6]),
  },
  {
    slug: "tulsi-restaurant",
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
