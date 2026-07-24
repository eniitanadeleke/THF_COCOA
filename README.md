# THF Cocoa — React (full 7-page site)

This is the full `thfcocoa-site` (index/about/brands/products/infrastructure/trade/legal)
rebuilt as a proper React project using Vite + React Router — including the WhatsApp
deep-linking, contact form, product filters and reveal animations from the original.

## Structure

```
src/
  config/whatsapp.js   -> WA_NUMBER + pre-filled messages (EDIT THE NUMBER HERE)
  components/           -> Navbar, Footer, PageHero, Reveal, WaButton, WaLink, WaFloat, WaIcon
  hooks/useReveal.js     -> scroll-reveal animation
  pages/
    Home.jsx
    About.jsx           -> story + timeline + contact form -> WhatsApp
    Brands.jsx           -> Natkokoa + KokoaSkin
    Products.jsx          -> product grid with working category filters
    Infrastructure.jsx    -> Farm / Factory / Packaging
    Trade.jsx              -> B2B, bulk ingredients, distributor CTA
    Legal.jsx                -> Terms & Privacy
  index.css                   -> the original shared stylesheet, unchanged
```

Routes: `/`, `/about`, `/brands`, `/products`, `/infrastructure`, `/trade`, `/legal`
(matches the original `.html` page names, just without the extension).

## 1. Set your real WhatsApp number

Open `src/config/whatsapp.js` and replace:
```js
export const WA_NUMBER = '234XXXXXXXXXX';
```
with your real number (country code + number, digits only, no `+`).

## 2. Run it

```bash
npm install
npm run dev
```

Then open the printed `localhost` URL.

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Things to still fill in (marked in the code with REPLACE / CONFIRM / PLACEHOLDER)

- Real farm/factory/product photos (currently Unsplash placeholders)
- Instagram handle, Amazon store link
- Business address, Google Maps embed on the About page
- Final product list on the Products page
- Legal page: company RC number, real dates, lawyer review before launch
