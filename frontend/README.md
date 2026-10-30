# Samuel Jacquet | Developer Portfolio

A responsive portfolio showcasing my full-stack applications and websites. Explore project details, filter by technology, and visit project repositories and websites.

**Live portfolio:** [github-repo-site.onrender.com](https://github-repo-site.onrender.com)

## Featured projects

### MOPRA Website

A multilingual website prototype for a developing nonprofit initiative focused on L’Asile, Haiti.

- [Repository](https://github.com/Sammy65433/MOPRA-site)
- [Client preview](https://mopra-frontend.onrender.com)

The site is a client preview, not a live ticket sale. Raffle, payment, and ticket details still need confirmation.

### Job Match Assistant

A full-stack job discovery and application tracker built with React, Express, and MongoDB.

- [Repository](https://github.com/Sammy65433/Job-match-assistant-2026)
- [Application](https://job-match-assistant-4frc.onrender.com)

The app does not submit applications. Recent integrations and production workflows still need verification.

### DPS Textellent CRM

A staff-facing application for managing contacts, communications, campaigns, analytics, and appointments.

- [Repository](https://github.com/Sammy65433/DPS-Textellent-CRM-1)
- [Application](https://dps-textellent-frontend.onrender.com)

SMS was tested in mock mode. Campaign consent, delivery reporting, and consistent route scoping need further work before production campaign use.

## Other projects

- **DPS Professional Tax Services:** A business website with tax and real estate appointment workflows. [Visit website](https://www.dpstaxpro.com/)
- **Ronald Morand Campaign Website:** A multilingual campaign website with media and donation links. [Visit website](https://rmorand2026.com)
- **Sports Training Tracker:** A full-stack capstone for recording training sessions and goals. [Repository](https://github.com/Sammy65433/CP-325.9-Capstone-Project) · [Application](https://frontend-sports-training-tracker.onrender.com)

The campaign contact form’s submission handling needs verification. Sports Training Tracker’s login and registration do not verify passwords, and editing sessions and goals is future work.

## Portfolio features

- Responsive layout for desktop and mobile
- Project cards with technology tags and links
- Filtering by technology
- Screenshot placeholders and inline SVG icons
- Keyboard focus styles and reduced-motion support

## Built with

- React and Vite
- CSS and Tailwind CSS
- Render Static Sites

## Run locally

Install Node.js, then run these commands from the repository root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL shown in the terminal.

To build and preview the production site:

```bash
npm run build
npm run preview
```

## Project structure

```text
frontend/
├── public/
│   └── images/              # Project screenshots, when added
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── PortfolioTailwind.jsx
├── package.json
└── vite.config.js
```

## Customize

- Edit `PROFILE` in `src/PortfolioTailwind.jsx` to update contact links and skills.
- Edit `PROJECTS` to update descriptions, links, images, and project order.
- Set `featured: true` on projects that should display a featured badge.
- Add screenshots to `public/images/` using the filenames in `PROJECTS`. Placeholders appear when images are missing.
- Update the design in `src/index.css`.

Review screenshots before publishing and remove private information, credentials, and appointment links.

## Deployment

The portfolio is deployed as a Render Static Site.

- **Root directory:** `frontend`
- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`

## Author

**Samuel Jacquet**

- [GitHub](https://github.com/Sammy65433)
- [LinkedIn](https://www.linkedin.com/in/samuel-jacquet-29180549/)
