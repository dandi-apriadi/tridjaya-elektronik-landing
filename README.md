# Tridjaya Elektronik Manado - Landing Page

A modern, interactive landing page for **Tridjaya Elektronik Manado** — the #1 electronics retailer in North Sulawesi with 16 branches.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — blazing fast dev server & build
- **Tailwind CSS v4** — utility-first styling with glassmorphism aesthetic
- **Framer Motion** — entrance reveals, smooth scroll, hover animations
- **Embla Carousel** — auto-playing premium product slider
- **Lucide React** — modern icon set

## Features

- **Glassmorphism Design** — translucent cards with backdrop-blur effects
- **Dark Mode** — toggle with system preference detection
- **Responsive** — mobile-first design that works on all devices
- **Animated Hero** — split-screen layout with floating 3D-style product cards
- **Interactive Categories** — hover-animated grid with glow effects
- **Featured Carousel** — smooth auto-playing slider for premium products
- **Trust Signals** — 16 branches, warranty, easy installments
- **WhatsApp Integration** — floating chat button + contact CTA
- **Google Maps Embed** — Sam Ratulangi branch location
- **Sticky Navbar** — blur-background with smooth scroll navigation

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with blur + dark mode toggle
│   ├── Hero.tsx            # Split-screen hero with animated text
│   ├── Categories.tsx      # Interactive product category grid
│   ├── FeaturedCarousel.tsx # Auto-playing premium product slider
│   ├── TrustSignals.tsx    # Company trust indicators
│   ├── Contact.tsx         # Contact info + Google Maps
│   ├── WhatsAppButton.tsx  # Floating WhatsApp CTA
│   └── Footer.tsx          # Site footer with links
├── context/
│   └── ThemeContext.tsx     # Dark mode state management
├── App.tsx
├── main.tsx
└── index.css               # Tailwind + custom animations
```
