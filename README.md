<div align="center">
  <h1 align="center">JULIAN_SOTO_SYS // PORTFOLIO</h1>
  <p align="center">
    <strong>Senior Software Engineer | Full-Stack Developer</strong>
  </p>
  <p align="center">Cyber-hacker themed personal portfolio built with React, Vite, TailwindCSS v4, and a custom i18n implementation.</p>
</div>

## 🚀 Features

- **Terminal Aesthetic:** Cyber-hacker / sci-fi terminal design system.
- **Micro-animations:** Glitch effects, scanlines, matrix patterns, and Lottie animations.
- **Custom i18n (ES/EN):** Built-in LanguageContext provider using React Context API and JSON dictionaries to switch between formal Spanish and developer-slang English. Zero external i18n dependencies.
- **Responsive:** Fluid layout from mobile to 4K displays.
- **Real Data:** Showcases actual production deployed projects (Next.js, FastAPI, Node.js, AI Neural Networks).

## 🛠️ Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animations:** Motion (Framer Motion)
- **i18n:** Custom React Context implementation
- **Deployment:** Vercel

## ⚙️ Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/juliandeveloper05/julian-soto-portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

## 📁 i18n Structure

The internationalization is handled purely through React Context to keep the bundle lightweight:

- `src/i18n/LanguageContext.tsx`: The provider and `useTranslation` hook.
- `src/i18n/types.ts`: TypeScript interfaces for the translation schema.
- `src/i18n/locales/`: Contains `es.json` and `en.json` dictionaries.

## 🗺️ Roadmap / Future Enhancements

To continuously improve the quality and architecture of this portfolio, the following roadmap is planned:

-   **[ ] 3D WebGL Integration:** Implement `Three.js` (React Three Fiber) to add interactive, low-poly cybernetic backgrounds or interactive 3D models.
-   **[ ] E2E Testing Pipeline:** Set up **Playwright** or **Cypress** to ensure core user flows (i18n switching, navigation, form submissions) are robust and regression-free.
-   **[ ] CI/CD Automation:** Implement **GitHub Actions** workflows for automated linting, TypeScript type-checking, and preview deployments on PRs.
-   **[ ] Performance Optimization:** Add lazy loading for heavier assets/animations and implement advanced image optimization configurations via Vite plugins.
-   **[ ] PWA Capabilities:** Add Service Workers and a Web App Manifest to allow users to install the portfolio as a standalone Progressive Web App (PWA).
-   **[ ] Advanced Analytics:** Integrate a privacy-first web analytics tool (like Plausible or Umami) to track visitor flow and interaction with the `[ LANG ]` toggle.

## 🔗 Connect

[LinkedIn](https://www.linkedin.com/in/full-stack-julian-soto/) • [GitHub](https://github.com/juliandeveloper05) • [Instagram](https://www.instagram.com/palee_0x71/)

---
<div align="center">
  <sub>© 2026 Julian Soto // ENCRYPTED_CONNECTION</sub>
</div>
