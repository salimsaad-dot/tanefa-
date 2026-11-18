# Tanefa Beauty Salon · system notes

## 1. The business (from their shop sign, 2026-11-18)
| | |
|---|---|
| **Name** | Tanefa Beauty Salon |
| **Where** | North Legon, Accra, upstairs with a glass front. Roughly opposite De-Vef (behind the new Papa's Pizza), but Salim says neither shop can see the other's door. **No pin yet.** |
| **Phones** | 024 270 5420 (WhatsApp icon on the sign → booking number), 050 955 8952 |
| **Email** | tanefabeautysalon@gmail.com |
| **Socials** | @tanefabeautysalon (TikTok icon on the sign). Salim: no posts yet. |
| **Services (sign)** | hair braiding, pedicure, manicure, kids' hairstyles, dreadlocks, bridals, barbering. **Sells** wigs and perming cream. |
| **Banner** | women, men and boys: braids, cornrows, makeup, men's and kids' cuts |
| **Inside** | "Fancy" (Salim). No photos taken. |
| **Hours / prices** | Unknown. The site never states them: "Message us to check today's times" and "Ask for a price". |
| **Online** | Nothing found (no website, Google listing or Fresha), 2026-11-18. |

## 2. Status
- [x] Site built and tested locally (2026-11-18)
- [ ] Repo + GitHub Pages (planned: salimsaad-dot/tanefa- → https://salimsaad-dot.github.io/tanefa-/)
- [ ] Pitch drafted and sent
- **Don't show De-Vef's site in this pitch**, and keep the two clients separate (De-Vef is a paying client close by).

## 3. Design
- **Plum + gold** from the sign: `--plum #2a1133`, `--violet #6b3a8e`, `--gold #e9c357`, `--gold-deep #8a6a12` (gold text on cream), cream `#fbf7ef`, mist `#f3edf5`. Deliberately unlike De-Vef (black/white/marigold poster), Dolly (ivory/gold Bodoni), Nails Geek (forest/brass) and Beauty Series (black & gold).
- **Fonts:** DM Serif Display (headings, italic accents) + Outfit (text).
- **Angle:** "Beautiful hair for the whole family" — their banner shows women, men and kids, which no other client offers. Family trio (Her / Him / Kids) with "Book for…" links that preselect the service and who it's for.
- **Signature:** the hero photo sits in an arch, with a gold arch outline that rises into place once, plus a "Her · Him · Kids" badge.
- Master rules: solid header (no backdrop-filter), skip link, `::selection`, 44px+ tap targets, iPhone date fix, photo fade-in, reveal only below the first screen, reduced motion, link-preview image.

## 4. Booking
- WhatsApp form → `233242705420`: Who's it for (Myself / My child / Someone else), service, day (min today, UTC), Morning/Afternoon/Evening, name, note.
- Shop: "Ask what's in stock" links for wigs and perming cream, with prefilled WhatsApp messages.

## 5. Photos (Pexels stock, pitch only; replace with their own work before launch)
hero 12433560 · braids 36587243 · locs 12530818 · bridal 6512263 · kids 14930868 · barber 7697639 · nails 5909812 · wigs 6923351 · locs-men 7148435. `og-image.jpg` is a 1200×630 card rendered from HTML (scratchpad tf/og.html). IDs checked against every other client's notes, so there are no repeats.

## 6. Tests (2026-11-18)
scratchpad `tf/check.js` + `tf/rev.js`, Chrome 390 + 1440: no overflow, "Book for a child" preselects, empty-form error, WhatsApp message content (window.open stubbed, nothing sent), phone menu covers the screen when scrolled, every reveal section appears when scrolling, no console errors. **WebKit not run** (installed WebKit doesn't match this Playwright).

## 7. TODOs
1. Location pin (Maps button currently searches "North Legon, Accra").
2. Confirm which number is the WhatsApp one (assumed 024 270 5420).
3. Check the TikTok handle exists before the pitch (link is live on the page).
4. Hours, prices, owner's name.
5. Their own photos.
