# Samuel Jacquet | Developer Portfolio

A responsive portfolio showcasing my full-stack applications and websites. Visitors can explore projects, filter them by technology, and follow links to repositories and live sites.

## Featured project

**Job Match Assistant** is a job discovery and application tracker built with React, Express, and MongoDB.

- [View repository](https://github.com/Sammy65433/Job-match-assistant-2026)
- [Visit application](https://job-match-assistant-4frc.onrender.com)

Production workflows and recent integrations still need verification. The application does not submit job applications.

## Other projects

- Sports Training Tracker
- DPS Textellent CRM
- DPS Professional Tax Services website
- Ronald Morand Campaign website
- MOPRA website preview

MOPRA is a client preview, not a live ticket sale. Its raffle and payment details are not confirmed.

## Portfolio features

- Responsive layout for desktop and mobile
- Project cards with technology tags and links
- Filter projects by technology
- Project screenshot placeholders
- Keyboard focus styles and reduced-motion support
- Inline SVG icons

## Built with

- React
- Vite
- CSS
- Tailwind CSS

## Run locally

Install Node.js, then run these commands from the `frontend` directory:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

To create a production build:

```bash
npm run build
```

## Project structure

```text
frontend/
├── public/
│   └── images/              # Project screenshots
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── PortfolioTailwind.jsx
├── package.json
└── vite.config.js
```

## Customize

- Edit `PROFILE` in `src/PortfolioTailwind.jsx` to add your email, LinkedIn, and resume.
- Edit `PROJECTS` to update project descriptions and links.
- Arrange projects in the array from newest to oldest. Set `featured: true` on the featured project.
- Add screenshots to `public/images/` using the filenames specified in `PROJECTS`. Cards show placeholders when images are missing.
- Update the design in `src/index.css`.

Review screenshots before publishing and remove private information, credentials, and appointment links.

## Author

**Samuel Jacquet**  
[GitHub](https://github.com/Sammy65433)
