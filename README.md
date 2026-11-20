# Viraas

Website for **Viraas**, an interior design studio in Gandhidham, Kutch.
*Timeless Roots. Modern Spaces.*

Built with Next.js (Pages Router) and React. No CSS framework: all styling lives in `styles/globals.css`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things are

| What | Where |
| --- | --- |
| All text, contact details, social links, projects and their photos | `content/site.js` |
| Page sections | `components/` (Hero, About, Services, Work, Testimonials, Contact) |
| Colours, fonts, spacing | top of `styles/globals.css` (`:root` variables) |
| Page title, description, share preview, search-engine data | `pages/index.js` |
| Fonts (Cormorant Garamond and Jost, from Google Fonts) | `pages/_document.js` |
| Logo mark, favicon, share image | `components/Mark.js`, `public/favicon.svg`, `public/og.jpg` |

## Common edits

**Change text or contact details:** edit `content/site.js`.

**Hide client names:** set `showClientNames` to `false` in `content/site.js`. Projects then show as "Residence 01", "Office 02" and so on.

**Add a project:** put photos in `public/images/<type>/<project>/`, then add an entry to `projects` in `content/site.js`. Each photo needs a full-size `.webp` (up to 2000px wide) and a small `-thumb.webp` (640px wide).

**Change the look:** edit the colour variables at the top of `styles/globals.css`. The gold is `--gold`, the background is `--bg`.

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` (for example `https://www.viraas.in`) in your hosting settings so share previews on WhatsApp and Facebook use full image links.
- Replace `public/og.jpg` with a 1200 x 630 px share image.
- The contact form opens the visitor's email app with the message filled in. To receive enquiries directly, connect a form service such as Formspree or Resend.
- Eight photos in the Madhukant Shah project show the old "FC - The Designing Studio" logo on the walls, so they are hidden (see `oldLogoPhotos` in `content/site.js`). Swap in clean versions when you have them.
- Confirm the phone number and email in `content/site.js` are the ones Viraas wants to publish.
