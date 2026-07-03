# Implementation Plan — Sprint 1: Frontend UI Foundation

We will migrate the existing HTML files under `src/stitch` to a clean React + Tailwind CSS project structure. The objective is to build a responsive, high-end, and visually stunning RTL dashboard application without business logic or API integration, utilizing Vite, React Router, Recharts, Framer Motion, and Tailwind CSS.

---

## User Review Required

> [!IMPORTANT]
> **Tailwind CSS Integration**
> The input HTML files in `src/stitch` rely heavily on Tailwind CSS utilities and custom classes. To preserve the exact design and responsiveness, we propose installing and configuring Tailwind CSS inside the Vite React project, mapping the custom brand colors, spacing rules, and typography configuration. Please approve this package installation.

> [!IMPORTANT]
> **Missing Page Layouts**
> For pages not found in the stitch code (e.g. `Videos`, `Questions`, `Definitions`, `Journal`, `Analytics`, `Settings`, `Profile`, and `Admin Pages`), we will design them in alignment with the existing premium, glassmorphism design system using extracted components.

---

## Open Questions

1. **Tailwind CSS Version**: Do you have a preference for Tailwind CSS v3 or v4? (We recommend Tailwind CSS v3 for stable integration with current Vite and React setup in the workspace).
2. **Icons and Fonts**: The stitch pages load Google Fonts (`IBM Plex Sans Arabic`) and Google Material Symbols Outlined stylesheet. We will add these links to the root `index.html` to load fonts and icons correctly. Is that acceptable?

---

## Proposed Changes

### Configuration & Root Files

#### [MODIFY] [index.html](file:///d:/dreem%20pro/alem%20el_mohasba/index.html)
- Change `<script type="module" src="/src/main.ts"></script>` to `/src/main.jsx`.
- Inject stylesheets for `IBM Plex Sans Arabic` font and `Material Symbols Outlined` icons in the `<head>`.
- Change default html direction to `dir="rtl"` and language to `lang="ar"`.

#### [MODIFY] [package.json](file:///d:/dreem%20pro/alem%20el_mohasba/package.json)
- Add `"react": "^19.0.0"` and `"react-dom": "^19.0.0"` if missing from current node_modules runtime.
- Add devDependencies: `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`.

#### [NEW] [vite.config.js](file:///d:/dreem%20pro/alem%20el_mohasba/vite.config.js)
- Configure Vite with `@vitejs/plugin-react` to parse JSX correctly.

#### [NEW] [tailwind.config.js](file:///d:/dreem%20pro/alem%20el_mohasba/tailwind.config.js)
- Setup custom Tailwind theme extensions matching the design system of the stitch project:
  - Colors (`primary`, `primary-container`, `surface-container`, `on-surface`, `tertiary`, `surface-tint`, etc.)
  - Font families (`body-lg`, `body-md`, `headline-md`, `display-lg`, `display-lg-mobile`, `label-sm`) using `IBM Plex Sans Arabic`.
  - Spacing options (`xl`, `lg`, `md`, `sm`, `xs`, `gutter`, `margin-desktop`, `margin-mobile`).
  - Border radius mappings.

#### [MODIFY] [src/styles/global.css](file:///d:/dreem%20pro/alem%20el_mohasba/src/styles/global.css)
- Load Tailwind directives:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Retain glassmorphism and custom animation utility styles (`.glass-card`, `.float-animation`, custom scrollbars).

#### [MODIFY] [src/main.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/main.jsx)
- Setup React root mounting `<App />` element onto `#app`.

#### [NEW] [src/App.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/App.jsx)
- Return `AppRouter` wrapped in any necessary global app context.

---

### Layouts & Routing

#### [MODIFY] [src/routes/AppRouter.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/routes/AppRouter.jsx)
- Build the React Router routes mapping:
  - `/` -> `Login`
  - Student Pages under `StudentLayout`:
    - `/dashboard` -> `Dashboard`
    - `/videos` -> `Videos`
    - `/questions` -> `Questions`
    - `/definitions` -> `Definitions`
    - `/accounting-cycle` -> `AccountingCycle`
    - `/journal` -> `Journal`
    - `/analytics` -> `Analytics`
    - `/ai` -> `AI`
    - `/settings` -> `Settings`
    - `/profile` -> `Profile`
  - Admin Pages under `AdminLayout`:
    - `/admin/dashboard` -> `Admin Dashboard`
    - `/admin/videos` -> `Admin Videos`
    - `/admin/questions` -> `Admin Questions`
    - `/admin/definitions` -> `Admin Definitions`
    - `/admin/students` -> `Admin Students`

#### [MODIFY] [src/layouts/StudentLayout.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/layouts/StudentLayout.jsx)
- Setup the core layout with fixed RTL Sidebar on the right, Top Navbar at the top (with a search bar, notification, and profile avatar), and the main `Outlet` wrapper shifting appropriately for responsiveness (`md:mr-[280px]`).
- Control mobile navigation state (collapsible sidebar) via standard React state hook.

#### [MODIFY] [src/layouts/AdminLayout.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/layouts/AdminLayout.jsx)
- Setup a structure similar to `StudentLayout` but configured with the Admin navigation items (Dashboard, Videos, Questions, Definitions, Students) and specific admin header items.

---

### Reusable Components

We will extract clean, modular, prop-driven React components:

- **[NEW] [Sidebar.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/layout/Sidebar/Sidebar.jsx)**: Sidebar containing logo, navigation links, and logout action. Accepts `role` ("student" or "admin").
- **[NEW] [Navbar.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/layout/Navbar/Navbar.jsx)**: Sticky header with notifications, chat shortcuts, search bar, and user profile avatar.
- **[NEW] [VideoCard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/videos/VideoCard.jsx)**: Card rendering video thumbnail, chapter info, video duration, and completion progress bar.
- **[NEW] [StatsCard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/dashboard/StatsCard.jsx)**: Renders a numeric metric block with custom status text, icon, and growth trend percentage.
- **[NEW] [QuestionCard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/questions/QuestionCard.jsx)**: Displays interactive question text and option cards with mock active state.
- **[NEW] [DefinitionTable.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/DefinitionTable.jsx)**: Sleek dictionary list matching the table structure of terms, english translation, Arabic translation, and description.
- **[NEW] [ChapterTabs.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/ChapterTabs.jsx)**: Horizontal navigation tabs.
- **[NEW] [SearchBar.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/SearchBar.jsx)**: Search input with integrated magnifying glass icon.
- **[NEW] [Avatar.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/Avatar.jsx)**: Styled circle profile picture with border and status details.
- **[NEW] [NotificationCard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/NotificationCard.jsx)**: Floating notifications list row with timestamps.
- **[NEW] [ProgressCard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/ProgressCard.jsx)**: Dashboard general progress bar widget.
- **[NEW] [SectionHeader.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/components/ui/SectionHeader.jsx)**: Page header container supporting breadcrumbs, titles, and subheadings.

---

### Pages (Views)

#### Auth Pages
- **[MODIFY] [Login.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/auth/Login.jsx)**: Fully migrates `1.html` layout into React, implementing standard form input placeholders, illustration box, and tab toggle (Login/Register).

#### Student Pages
- **[MODIFY] [Dashboard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Dashboard.jsx)**: Migrates `2.html` / `5.html` incorporating `StatsCard`, weekly chart, and continue learning widgets.
- **[MODIFY] [Videos.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Videos.jsx)**: Video lists page with search, chapter filtering, and grid of video lectures.
- **[MODIFY] [Questions.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Questions.jsx)**: Question bank with statistics, quiz cards, and an interactive quiz test element.
- **[MODIFY] [Definitions.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Definitions.jsx)**: Glossary search tool with the definition table component.
- **[MODIFY] [AccountingCycle.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/AccountingCycle.jsx)**: Migrates interactive step-by-step simulator from `3.html` / `6.html`.
- **[MODIFY] [Journal.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Journal.jsx)**: Simple double-entry journal entry generator with debit/credit balance indicator.
- **[MODIFY] [AI.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/AI.jsx)**: Migrates chat UI matching `4.html` / `7.html` with typing indicator and response bubbles.
- **[MODIFY] [Analytics.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Analytics.jsx)**: Clean analytics dashboards using Recharts (interactive graphs).
- **[MODIFY] [Settings.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Settings.jsx)**: Settings page (Profile settings, security, academic details).
- **[NEW] [Profile.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/student/Profile.jsx)**: Profile viewer showing student achievements, certificates, and scores.

#### Admin Pages
- **[MODIFY] [Dashboard.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/admin/Dashboard.jsx)**: Overview metrics of students, videos, questions, and database statistics.
- **[MODIFY] [Videos.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/admin/Videos.jsx)**: Admin list and dashboard for video management.
- **[MODIFY] [Questions.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/admin/Questions.jsx)**: Admin manager for question entries.
- **[MODIFY] [Definitions.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/admin/Definitions.jsx)**: Admin list to edit definitions.
- **[MODIFY] [Students.jsx](file:///d:/dreem%20pro/alem%20el_mohasba/src/pages/admin/Students.jsx)**: View and review student performance metrics and details.

---

## Verification Plan

### Automated Verification
- Run `npm run build` to confirm Vite correctly resolves all file paths, React syntax, CSS styles, and packages imports without compile errors.

### Manual Verification
- Launch local development server (`npm run dev`).
- Open browser and navigate through the application, ensuring routing works across all paths.
- Validate responsiveness by testing across Mobile, Tablet, and Desktop viewport sizes.
