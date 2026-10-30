import { useState } from "react";

const PROFILE = {
  name: "Samuel Jacquet",
  role: "Full-stack developer",
  pitch:
    "I build useful web applications that connect thoughtful interfaces with APIs, databases, and real-world workflows.",
  github: "https://github.com/Sammy65433",
  email: "SamuelRJacquet@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-jacquet-29180549/",
  resume: "",
  skills: [
    "JavaScript",
    "React",
    "Vite",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Supabase",
    "CSS",
  ],
};

const PROJECTS = [
  {
    title: "MOPRA Website",
    category: "Nonprofit client preview",
    featured: true,
    icon: "heart",
    image: "/images/mopra.jpg",
    imageAlt: "MOPRA website preview screenshot",
    desc:
      "A multilingual website prototype for a developing nonprofit initiative focused on L’Asile, Haiti.",
    did:
      "I built a responsive React preview with English, French, and Haitian Creole content, photo galleries, a raffle layout, and a ticket-page preview.",
    note:
      "This is a client preview, not a live ticket sale. The countdown, prizes, payment details, and reservation form are not confirmed or operational.",
    tech: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Framer Motion",
    ],
    repo: "https://github.com/Sammy65433/MOPRA-site",
    live: "https://mopra-frontend.onrender.com",
    liveLabel: "View preview",
  },
  {
    title: "Job Match Assistant",
    category: "Job discovery and tracking",
    featured: true,
    icon: "briefcase",
    image: "/images/job-match.jpg",
    imageAlt: "Job Match Assistant application screenshot",
    desc:
      "A job discovery and application tracker for organizing opportunities across software, data, and audio production.",
    did:
      "I built a React and Express application with MongoDB-backed accounts and saved jobs, job-source integrations, interview tracking, and tools for comparing entered skills and resume text.",
    note:
      "Fit scores are screening estimates, not proof of qualification. The app does not submit applications. Recent integrations and production workflows still need verification.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB"],
    repo: "https://github.com/Sammy65433/Job-match-assistant-2026",
    live: "https://job-match-assistant-4frc.onrender.com",
  },
  {
    title: "DPS Textellent CRM",
    category: "Staff-facing application",
    featured: true,
    icon: "users",
    image: "/images/dps-crm.jpg",
    imageAlt: "DPS Textellent CRM application screenshot",
    desc:
      "A separate staff-facing CRM for managing contacts, communications, campaigns, analytics, and appointments.",
    did:
      "I built staff booking tools, dashboard and analytics views, JWT-based staff onboarding, and integrations between the CRM and the DPS booking backend.",
    note:
      "SMS was tested in mock mode. Campaign consent, delivery reporting, and consistent route scoping need further work before production campaign use.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Supabase",
    ],
    repo: "https://github.com/Sammy65433/DPS-Textellent-CRM-1",
    live: "https://dps-textellent-frontend.onrender.com",
  },
  {
    title: "DPS Professional Tax Services",
    category: "Business website and booking",
    icon: "calendar",
    image: "/images/dps-tax.jpg",
    imageAlt: "DPS Professional Tax Services website screenshot",
    desc:
      "A services website with tax and real estate appointment requests, office tools, and guidance for securely sharing documents.",
    did:
      "I built React pages and booking workflows connected to an Express backend, Supabase, and Resend email notifications.",
    note:
      "Backend authorization for admin tools and a final production verification pass remain important improvements.",
    tech: ["React", "Vite", "Node.js", "Express", "Supabase", "CSS"],
    repo: "",
    live: "https://www.dpstaxpro.com/",
  },
  {
    title: "Ronald Morand Campaign Website",
    category: "Multilingual campaign website",
    icon: "globe",
    image: "/images/campaign.jpg",
    imageAlt: "Ronald Morand campaign website screenshot",
    desc:
      "A responsive campaign website with English, French, and Haitian Creole content, campaign media, and donation links.",
    did:
      "I built the pages and language controls, organized photos and videos, connected Donorbox donation links, and deployed the site with a custom domain.",
    note:
      "The deployed contact form’s submission handling still needs verification.",
    tech: ["React", "Vite", "React Router", "i18next", "CSS"],
    repo: "",
    live: "https://rmorand2026.com",
  },
  {
    title: "Sports Training Tracker",
    category: "Full-stack capstone",
    icon: "activity",
    image: "/images/sports-tracker.jpg",
    imageAlt: "Sports Training Tracker application screenshot",
    desc:
      "A training tracker for recording sports sessions, setting goals, and reviewing progress in one place.",
    did:
      "I built React pages, Express routes, and the MongoDB data flow for creating, viewing, and deleting sessions and goals. I also connected the dashboard to saved data and deployed the frontend and API on Render.",
    note:
      "Login and registration do not verify passwords. Editing sessions and goals is future work.",
    tech: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
    ],
    repo: "https://github.com/Sammy65433/CP-325.9-Capstone-Project",
    live: "https://frontend-sports-training-tracker.onrender.com",
  },
];

const TECHNOLOGIES = [
  "All",
  ...new Set(PROJECTS.flatMap((project) => project.tech)),
];

function Icon({ name, size = 20, className = "" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
    focusable: false,
  };

  const paths = {
    arrow: (
      <>
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
    code: (
      <>
        <path d="m8 17-5-5 5-5" />
        <path d="m16 7 5 5-5 5" />
        <path d="m14 4-4 16" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    filter: <path d="M4 7h16M7 12h10M10 17h4" />,
    image: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 16-5-5L5 21" />
      </>
    ),
  };

  return <svg {...props}>{paths[name] || paths.arrow}</svg>;
}

function ProjectImage({ project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="project-image">
      {!failed && project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="image-placeholder">
          <span className="placeholder-icon">
            <Icon name={project.icon} size={38} />
          </span>
          <span className="placeholder-title">{project.title}</span>
          <span className="placeholder-caption">
            <Icon name="image" size={15} />
            Project screenshot
          </span>
        </div>
      )}

      {project.featured && (
        <span className="featured-badge">Featured project</span>
      )}
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectImage project={project} />

      <div className="project-content">
        <div className="project-category">
          <Icon name={project.icon} size={17} />
          <span>{project.category}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="project-description">{project.desc}</p>

        <p className="project-detail">
          <strong>What I built:</strong> {project.did}
        </p>

        <p className="project-note">
          <strong>Current status:</strong> {project.note}
        </p>

        <div className="tech-heading">
          <Icon name="layers" size={17} />
          <span>Built with</span>
        </div>

        <ul
          className="tech-list"
          aria-label={`${project.title} technologies`}
        >
          {project.tech.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.repo && (
            <a href={project.repo}>
              <Icon name="code" size={18} />
              View code
            </a>
          )}

          {project.live && (
            <a href={project.live}>
              <Icon name="arrow" size={18} />
              {project.liveLabel || "Visit site"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function PortfolioTailwind() {
  const [active, setActive] = useState("All");

  const visibleProjects = PROJECTS.filter(
    (project) => active === "All" || project.tech.includes(active)
  );

  return (
    <div className="portfolio">
      <a className="skip-link" href="#projects">
        Skip to projects
      </a>

      <div className="page-shell">
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Samuel Jacquet, home">
            <span className="brand-mark">
              <Icon name="code" size={21} />
            </span>
            <span>Samuel Jacquet</span>
          </a>

          <nav aria-label="Main navigation" className="nav">
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href={PROFILE.github}>GitHub</a>
          </nav>
        </header>

        <main id="top">
          <section className="hero" aria-labelledby="hero-heading">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {PROFILE.role}
              </p>

              <h1 id="hero-heading">
                Hi, I’m <span>{PROFILE.name}.</span>
              </h1>

              <p className="hero-description">{PROFILE.pitch}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  Explore my work
                  <Icon name="arrow" size={18} />
                </a>

                <a className="button button-secondary" href={PROFILE.github}>
                  <Icon name="code" size={18} />
                  GitHub
                </a>

                {PROFILE.email && (
                  <a
                    className="button button-secondary"
                    href={`mailto:${PROFILE.email}`}
                  >
                    <Icon name="mail" size={18} />
                    Email
                  </a>
                )}

                {PROFILE.linkedin && (
                  <a className="button button-secondary" href={PROFILE.linkedin}>
                    <Icon name="arrow" size={18} />
                    LinkedIn
                  </a>
                )}

                {PROFILE.resume && (
                  <a className="button button-secondary" href={PROFILE.resume}>
                    <Icon name="file" size={18} />
                    Resume
                  </a>
                )}
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="art-window">
                <div className="window-top">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="window-body">
                  <Icon name="code" size={48} />
                  <div className="art-line long" />
                  <div className="art-line medium" />
                  <div className="art-line short" />
                </div>
              </div>
              <span className="art-float art-float-one">
                <Icon name="layers" size={23} />
              </span>
              <span className="art-float art-float-two">
                <Icon name="globe" size={23} />
              </span>
            </div>
          </section>

          <section id="skills" className="skills-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">My toolkit</p>
                <h2>Technologies I work with</h2>
              </div>
              <span className="heading-icon">
                <Icon name="layers" size={22} />
              </span>
            </div>

            <ul className="skill-list">
              {PROFILE.skills.map((skill) => (
                <li key={skill}>
                  <Icon name="code" size={15} />
                  {skill}
                </li>
              ))}
            </ul>
          </section>

          <section id="projects" className="projects-section">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2>Projects</h2>
                <p className="section-description">
                  Applications, websites, and workflows I’ve built.
                </p>
              </div>
              <span className="heading-icon">
                <Icon name="briefcase" size={22} />
              </span>
            </div>

            <div className="filter-heading">
              <Icon name="filter" size={18} />
              <span>Filter by technology</span>
            </div>

            <div
              className="filters"
              role="group"
              aria-label="Filter projects by technology"
            >
              {TECHNOLOGIES.map((technology) => (
                <button
                  key={technology}
                  type="button"
                  aria-pressed={technology === active}
                  onClick={() => setActive(technology)}
                >
                  {technology}
                </button>
              ))}
            </div>

            <p className="results-count" aria-live="polite">
              Showing {visibleProjects.length}{" "}
              {visibleProjects.length === 1 ? "project" : "projects"}
              {active !== "All" ? ` using ${active}` : ""}.
            </p>

            <div className="project-grid">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </main>

        <footer className="footer">
          <div>
            <strong>{PROFILE.name}</strong>
            <p>Building practical web experiences.</p>
          </div>

          <a href={PROFILE.github}>
            <Icon name="code" size={18} />
            GitHub
            <Icon name="arrow" size={16} />
          </a>
        </footer>
      </div>
    </div>
  );
}
