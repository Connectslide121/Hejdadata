# Copilot Instructions for Hejda Data

These instructions guide AI coding agents working on this repo.

## Project Overview

- Single-page, static web app hosted on GitHub Pages (`gh-pages` branch).
- Purpose: generate GDPR-compliant deletion/restriction email requests to Swedish directory services.
- Tech stack: `index.html`, `styles.css`, `script.js` (no build tooling, no backend).

## Architecture & Data Flow

- UI is defined in `index.html` as:
  - Landing section with marketing copy, provider logo carousel, and a "Get Started" CTA.
  - Two-step wizard: Step 1 collects user info, Step 2 lists generated email links.
- All behavior is implemented in `script.js`:
  - `translations`: nested object providing all copy in Swedish (`sv`) and English (`en`) keyed by `data-i18n` attributes.
  - `providers`: array of 10 Swedish directory services with `id`, `name`, `email`, optional `logo`, and localized description `desc.sv` / `desc.en`.
  - `emailTemplates`: language-specific `subject` + `body(name, email, pin)` generators used to build `mailto:` links.
  - Global state: `currentLang`, `currentStep`.
  - DOM is wired via element IDs and classes (e.g. `#langSwitch`, `#startBtn`, `.wizard-track`, `#emailLinks`).
  - `lucide` icons are loaded from CDN in `index.html` and initialized in `script.js` after major DOM updates.
- Styling and layout live entirely in `styles.css` and rely on static class names referenced from the HTML.

## Key Behaviors & Patterns

- **Language toggle**:
  - `currentLang` is either `"sv"` or `"en"`.
  - Clicking `#langSwitch` calls `toggleLanguage()`, which updates `document.documentElement.lang`, re-renders all `[data-i18n]` elements from `translations`, updates placeholders, and reruns `lucide.createIcons()`.
  - When on Step 2, toggling language regenerates the email list using the same user inputs but the other language’s `emailTemplates` and `providers[*].desc[currentLang]`.
- **Wizard navigation**:
  - `navigateToStep(step)` controls `currentStep`, hides/shows the landing section, and moves `.wizard-track` using `transform: translateX(...)` in viewport widths.
  - Step numbers and progress bars are static in `index.html`; changing the number of steps requires updating HTML, CSS, and navigation logic together.
- **Form validation**:
  - `validateStep1()` enables `#nextToEmails` only when `userName` and `userEmail` are non-empty and `userEmail.checkValidity()` is true.
  - Validation is input-only; there is no submit event used for navigation, only button clicks.
- **Email generation**:
  - `generateEmails()` reads `userName`, `userEmail`, `userPIN`, uses all `providers` (no user selection in UI) to build `mailto:` URLs with encoded `subject` and `body`.
  - Each provider gets an item with logo (custom `assets/*.png` if defined, otherwise Clearbit logo based on domain) and a primary button that opens the mail client.
  - `onerror` handlers on `<img>` hide broken logos and show fallback initials.
- **Privacy constraints**:
  - No data is stored anywhere (no cookies/localStorage/sessionStorage, no network calls except logo images).
  - All logic must remain client-side and work when opened directly as a static file or via a simple HTTP server.

## Conventions for Changes

- **Localization**:
  - Any new user-facing text should:
    - Be added to `translations.sv` and `translations.en` with matching nested keys.
    - Be referenced in HTML via `data-i18n="..."` and updated by `updateLanguage()` instead of hardcoding strings.
  - Placeholders for inputs must be updated in `updateLanguage()` if new fields are added.
- **New providers/services**:
  - Add entries to the `providers` array in `script.js` with:
    - `id`, `name`, `email`, optional `logo` path under `assets/`, and `desc` with `sv` and `en` strings.
  - Keep `emailTemplates` generic and compliant with GDPR; avoid provider-specific text unless necessary.
- **New steps or flows**:
  - If introducing more wizard steps, keep `currentStep` a simple integer and extend `navigateToStep()` logic and `.wizard-track` layout accordingly.
  - Update progress labels (`1/2`, `2/2`) and bar widths in `index.html` to stay consistent with the step count.
- **Icons**:
  - Use Lucide icon names (e.g. `data-lucide="user-pen"`) and ensure `lucide.createIcons()` is called after dynamically inserting any `<i data-lucide="...">` elements.

## Workflows

- **Local dev**:
  - Open `index.html` directly in a browser or use a static server (e.g. `npx http-server`).
  - No build or bundling; changes to `index.html`, `styles.css`, or `script.js` reflect immediately on reload.
- **Deployment**:
  - The app is served from GitHub Pages; keep all paths relative (e.g. `styles.css`, `script.js`, `assets/...`) and avoid assuming a root `/`.

## Guardrails for AI Agents

- Do **not** introduce any backend calls, tracking, analytics, or persistent storage; privacy is a core feature.
- Do **not** add frameworks or build tools (React, bundlers, etc.) without an explicit instruction from the user.
- Preserve the bilingual behavior whenever adding or modifying UI text.
- Keep email body content respectful, neutral, and aligned with GDPR Articles 17 & 18.
- When refactoring, maintain simple, framework-free, browser-compatible JavaScript (no TypeScript or module bundlers).
