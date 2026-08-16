# Dashen Bank Super App Website Clone

A premium, high-performance web recreation of the **Dashen Bank Super App** website. This project contains a completely rebuilt **Home Page** and **Features Page** focusing on rich interactive aesthetics, micro-animations, optimized performance, and a responsive mobile-first user experience.

---

## 🚀 Getting Started & Installation

Follow these steps to set up the repository locally and run the development environment.

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.com/) (v18.x or higher) installed on your system.

### 🔧 Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd dashensuperapp-clone
   ```

2. **Install Dependencies**
   Install the required npm packages using your preferred package manager:
   
   *Using npm:*
   ```bash
   npm install
   ```
   
   *Using yarn:*
   ```bash
   yarn install
   ```
   
   *Using pnpm:*
   ```bash
   pnpm install
   ```

3. **Start the Development Server**
   Launch the Next.js local server:
   
   *Using npm:*
   ```bash
   npm run dev
   ```
   
   *Using yarn:*
   ```bash
   yarn dev
   ```
   
   *Using pnpm:*
   ```bash
   pnpm dev
   ```

4. **Verify the Application**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application in action.

---

## 🛠️ Work Accomplished & Enhancements

This project includes a series of UI/UX improvements, design overrides, performance optimizations, and responsive layouts to match modern front-end standards.

### 1. Home Page Rebuild
* **Fayda ID Account Link Animation**: Re-engineered the Fayda ID link section with an animation sequence showing the Fayda ID badge, a pulsing connection chain, and the Dashen Bank logo floating in synchrony.
* **Overlapping Hero Section Resolution**: Redesigned absolute layout coordinates in the Hero header into relative flex structures, resolving viewport collision issues on shorter laptop screens and preventing content from slipping behind the fixed top navigation bar.
* **Unified Goal Section Images**: Standardized the heights of all mockup graphics in the "What's Our Goal" section, replacing the varying heights from the original design with consistent, clean aspect-ratio boxes.
* **Fluid Hero Mockup scaling**: Added viewport-height percentage scales to the central mockups, keeping sizes balanced across varying browser widths.
* **Interactive Offers Redesign**: Built a split-screen interactive slider column. The cards highlight automatically every 5 seconds (pausing on hover) and scroll the active element into view.

### 2. Features Page Rebuild
* **Digital Onboarding**: Added scroll-reveal fade-ins, staggered entry sequences, and smooth image scales (`scale-105`) when hovering over account features.
* **200+ Mini Apps Counter**: Added a frame-rate-independent count-up counter. When scrolling into the section, the counter scrolls from `0` to `200+` over `1.5s` using a cubic ease-out deceleration curve, followed by staggered fade-ins for mockup graphics.
* **Budgeting**: Restructured the card list grid to adapt responsively, incorporating micro-lifts (`-translate-y-1.5`) and diffuse shadow depths on mouse hover.
* **E-Commerce**: Introduced soft ambient background glow blur layers and animated float vectors.
* **In-App Chatting**: Styled text cards to resemble speech bubbles using asymmetric borders (`rounded-tl-none` and `rounded-tr-none`). Integrated viewport triggers to load cards sequentially like a live chat conversation popping on screen.
* **Offline Banking (USSD)**: Refactored mobile text bounds, preventing the dial code (`*675#`) from splitting onto secondary lines, and resolved inline CSS text-gradient render conflicts.

### 3. Dynamic Contrast Navbar
* **Frosted Glass Mode**: Programmed the navigation bar to adapt to the active page layout. On the dark home page, the header is fully transparent. On light inner pages (like the Features page), it shifts to a frosted glass background (`bg-white/85 shadow-xs backdrop-blur-md`) with dark text controls.
* **Adaptive Indicator Pill**: On light layouts, the sliding nav active indicator changes from white to brand blue (`bg-[#0D39A5]`) with white text highlights, preserving contrast.

### 4. Technical Optimizations & SEO
* **Image Sizing Refinement**: Rescaled Next.js `Image` dimensions from high memory placeholders (`1000x1000`) down to appropriate resolution containers (`700x700`) across all component nodes.
* **SEO metadata Headers**: Configured Open Graph (`og:image`, `og:title`) tags, Twitter Cards, absolute base URLs, and layout title templates (`%s | Dashen Bank Super App`) for rich link sharing.

---

## 💻 Tech Stack
* **Framework**: Next.js 15 (React 19, Server Components)
* **Styling**: Tailwind CSS v4
* **Icons**: Lucide React
* **Scroll Tracking**: Native browser Intersection Observer API
