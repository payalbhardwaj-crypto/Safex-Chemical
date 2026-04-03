# Safex Chemicals — Website Design Spec
**Date:** 2026-04-01  
**Status:** Approved

---

## Overview

A fully responsive single-page React + Tailwind website for **Safex Chemicals**, an Indian crop protection company. The site targets Indian farmers and agri-dealers on mobile-first devices. It must feel trustworthy, nature-friendly, premium, and highly usable on small screens.

---

## Company Info

| Field | Value |
|---|---|
| Name | Safex |
| Tagline | "We are in the business of feeding the nation." |
| Toll-Free | 1800 102 3959 (Mon–Fri, 9:00 AM – 6:00 PM) |
| Address | 4th & 5th Floor, Block A, NDM-1, Netaji Subhash Place, New Delhi-110034 |
| CIN | U72411DL1991PLC042652 |

---

## Design Decisions (Confirmed)

| Decision | Choice |
|---|---|
| Hero style | Full bleed crop field image, centered headline, transparent blur navbar |
| Product cards | Magazine tiles — full image background with dark green gradient overlay |
| Page theme | Both light + dark, toggled by user (persisted in localStorage) |
| Responsive breakpoints | Mobile-first: 1 col → 2 col (sm) → 3 col (md) → 4 col (lg) |

### Color Palette

| Token | Value | Usage |
|---|---|---|
| primary-dark | `#006400` | Buttons, borders, headings |
| primary | `#4CAF50` | Accents, icons, badges |
| accent | `#FF9800` | All CTAs, "Get Quote", "Add to Inquiry" |
| sky | `#2196F3` | Info chips, links |
| beige | `#F5F0E8` | Light mode background |
| dark-bg | `#0d1a0d` | Dark mode background |
| dark-card | `#1a2e1a` | Dark mode card background |

### Typography
- Font: System stack (`Inter`, `Segoe UI`, `sans-serif`)
- Hero headline: `text-4xl md:text-6xl font-black`
- Section headings: `text-2xl md:text-3xl font-bold`
- Body: `text-sm md:text-base`

---

## Tech Stack

| Tool | Version / Note |
|---|---|
| React | 18+ |
| Vite | Latest |
| Tailwind CSS | v3 with custom colors in `tailwind.config.js` |
| React Router DOM | v6 (hash links for smooth scroll) |
| lucide-react | Icons (Leaf, Phone, ShoppingCart, Menu, X, Sun, Moon, etc.) |
| No backend | All data is static JS arrays |

---

## Project Structure

```
safex-chemical/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                    # theme state, section assembly
    ├── index.css                  # Tailwind directives + custom globals
    ├── data/
    │   ├── products.js            # 12 products array
    │   └── crops.js               # 7 crops with linked product IDs
    ├── context/
    │   └── InquiryContext.jsx     # useReducer: add/remove/clear cart
    ├── components/
    │   ├── Navbar.jsx
    │   ├── ProductCard.jsx
    │   ├── CropCard.jsx
    │   ├── Footer.jsx
    │   └── WhatsAppButton.jsx
    └── sections/
        ├── Hero.jsx
        ├── Products.jsx
        ├── CropSolutions.jsx
        ├── WhySafex.jsx
        ├── Resources.jsx
        ├── Testimonials.jsx
        └── InquiryModal.jsx
```

---

## Sections

### 1. Navbar (`components/Navbar.jsx`)
- Sticky top, `backdrop-blur-md bg-white/90 dark:bg-dark-bg/90`
- **Left:** Safex logo with `<Leaf>` icon (green)
- **Center (desktop):** Home · Products (dropdown) · Crop Solutions · Farmer Resources · About · Contact
- **Products dropdown:** Insecticides · Fungicides · Herbicides · Organic Products · All Products
- **Right (desktop):** Search icon · Toll-free number · "Get Quote" orange button · Dark/Light toggle
- **Mobile:** Hamburger → full-screen slide-down menu with same links
- Scroll behavior: adds shadow + reduces height after 80px scroll

### 2. Hero (`sections/Hero.jsx`)
- `min-h-screen` full viewport height
- Background: Unsplash field image with `bg-gradient-to-b from-black/40 to-green-950/80` overlay
- Content centered (`flex items-center justify-content`)
- Headline: **"Protecting Crops. Feeding the Nation."** — white, `font-black`
- Sub-headline: "Premium & Effective Crop Protection Solutions Trusted by Indian Farmers"
- Two CTA buttons: "Browse Products" (green, scrolls to `#products`) + "Talk to Expert" (orange, links to `tel:18001023959`)
- Trust bar pinned to bottom of hero: toll-free · "30+ Years" · "Pan India Delivery"

### 3. Products (`sections/Products.jsx`)
- Section ID: `#products`
- Tabs/filter chips: All · Insecticides · Fungicides · Herbicides · Organic
- Responsive grid: `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- **ProductCard (magazine tile):**
  - Full bleed Unsplash image background
  - Dark green gradient overlay (`from-green-950/95 via-green-900/70 to-transparent`)
  - Top-left: category badge (colored chip)
  - Bottom: product name (bold white), active ingredient (small muted), 1-line benefit
  - Two buttons: "Add to Inquiry" (orange) + "Learn More" (ghost white border)
  - Hover: scale + brighten image

**Products data (`src/data/products.js`):**

| Name | Active Ingredient | Category |
|---|---|---|
| Acarifas | Broflanilide 300 G/L SC | Insecticide |
| Tiger GR | Sulphur 90% Granule | Fungicide |
| Goodbye | Ametryne 80% WDG | Herbicide |
| Amidol | Tembotrione 34.4% SC | Herbicide |
| Girdle | Chlorantraniliprole 18.5% SC | Insecticide |
| Bahaar | Organic Manure | Organic |
| Fipro ultra | Fipronil 0.6% GR | Insecticide |
| Cymate | Cymoxanil 8% + Mancozeb 64% WP | Fungicide |
| Hallabol | Azoxystrobin 11% + Tebuconazole 18.3% SC | Fungicide |
| Nato | Emamectin benzoate 3% + Thiamethoxam 12% WG | Insecticide |
| Dabang | Lambda Cyhalothrin 4.9% CS | Insecticide |
| Bahubali | Mycorrhiza | Organic |

### 4. Crop Solutions (`sections/CropSolutions.jsx`)
- Section ID: `#crops`
- Row of crop chips (horizontal scroll on mobile): Rice · Wheat · Cotton · Sugarcane · Vegetables · Fruits · Pulses
- Active crop highlighted in green
- Selecting a crop → `useState` updates to show 2–3 matched `ProductCard`s below
- Crop-to-product mapping lives in `src/data/crops.js`

### 5. Why Choose Safex (`sections/WhySafex.jsx`)
- Section ID: `#why-safex`
- 5-item icon grid (2 cols mobile, 5 cols desktop):
  1. Quality Certifications 🏆
  2. Expert Agronomist Support 👨‍🌾
  3. Pan-India Delivery 🚚
  4. Safe & Sustainable Solutions 🌿
  5. Trusted by 1000+ Farmers ⭐
- Alternating light/dark background sections to break monotony

### 6. Farmer Resources (`sections/Resources.jsx`)
- Section ID: `#resources`
- 4 info cards (2×2 grid on mobile, 4 cols on desktop):
  1. Monsoon Pest Tips
  2. Safe Pesticide Usage
  3. Common Pest Identification
  4. Seasonal Advice
- Each card: icon, title, short description, "Read More" ghost button

### 7. Testimonials (`sections/Testimonials.jsx`)
- 3 farmer testimonials
- Each: circular placeholder photo (Unsplash), name, state, rating (5 stars), quote
- Horizontal scroll on mobile, 3-col grid on desktop

### 8. Footer (`components/Footer.jsx`)
- 4-col desktop, stacked mobile
- Columns: About Safex · Products · Quick Links · Contact
- Contact: toll-free, address, CIN
- Social icons (placeholder links): Facebook, Instagram, YouTube, Twitter
- Copyright bar at bottom

---

## Inquiry Cart

**`context/InquiryContext.jsx`** — `useReducer` with actions:
- `ADD_PRODUCT` — adds product object to cart array (no duplicates)
- `REMOVE_PRODUCT` — removes by product id
- `CLEAR_CART` — resets to empty

**Floating cart icon** (bottom-left, above WhatsApp button):
- `<ShoppingCart>` icon with badge showing count
- Click → opens `InquiryModal`

**`sections/InquiryModal.jsx`:**
- Modal overlay
- Lists all added products (name, category, remove button)
- Form: Name (required), Phone (required, 10-digit), Message (optional)
- "Request Quote" button → clears form + cart, shows success toast: *"Thank you! Our team will contact you within 24 hours."*

---

## WhatsApp Button (`components/WhatsAppButton.jsx`)
- Fixed bottom-right, `z-50`
- Green circle button with WhatsApp icon (or 💬 emoji fallback)
- Click → toggles small chat bubble above button:
  > *"Hi! I'm interested in Safex products. How can you help?"*
  > [Reply button opens `https://wa.me/911800102395` — mock, no real number]

---

## Dark Mode
- `useState<'light'|'dark'>` in `App.jsx`, initialized from `localStorage.getItem('safex-theme')`
- Passed via `ThemeContext` so all components can read it
- Toggle button in Navbar: `<Sun>` / `<Moon>` icon
- Tailwind `darkMode: 'class'` strategy — `dark` class added to `<html>` element
- On toggle: update state + `localStorage` + toggle `document.documentElement.classList`

---

## Responsiveness Requirements
- All sections must render correctly at: 375px, 414px, 768px, 1024px, 1280px, 1440px
- Touch targets ≥ 44px on mobile
- Horizontal scroll only where intentional (crop chips, testimonials on mobile)
- No horizontal overflow on any section at any breakpoint
- Images use `object-cover` and fixed aspect ratios to prevent layout shift

---

## Verification Checklist
1. `npm run dev` — no console errors, all sections visible
2. Navbar: smooth scroll to each section via hash links
3. Products dropdown: all 4 categories listed
4. Filter chips: clicking "Fungicide" shows only fungicide products
5. Add 2+ products → cart badge increments → modal shows all items
6. Submit inquiry form → success toast, cart cleared
7. Click crop chip → matching products appear
8. Dark/Light toggle → full site switches instantly, persists on reload
9. WhatsApp button → chat bubble appears/disappears
10. Mobile (375px): hamburger works, all grids stack to 1 column, no overflow
11. Tablet (768px): 2-column grids, functional dropdown
