import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const experience = [
  {
    role: "AI Model Evaluation Fellow",
    company: "Handshake AI",
    dates: "May 2026 — Present",
    details: [
      "Evaluated 120+ AI-generated responses across 6+ projects using rubric-based scoring for accuracy, reasoning, instruction following, and consistency.",
      "Analyzed 75+ image-based model outputs, flagging hallucinations, missed visual details, and edge cases to strengthen multimodal evaluation workflows.",
      "Reviewed LLM responses against persona, tone, style, and alignment rubrics, delivering structured feedback to improve conversational consistency and training data quality.",
    ],
  },
  {
    role: "Alumni Advisor",
    company: "Podium Education · Global Career Accelerator",
    dates: "Jul 2026 — Present",
    details: [
      "Advise prospective students through 25+ inbound calls and chats daily (150+ weekly), guiding program fit and next steps across a five-day schedule.",
      "Converted 40%+ of leads into enrollees using Salesforce to manage outreach, follow-ups, and pipeline tracking.",
    ],
  },
];

const projects = [
  {
    index: "01",
    title: "Arverié",
    subtitle: "AI Art Therapy",
    color: "clay",
    stack:
      "React, JavaScript, Python, Tailwind CSS, Claude API, Hume EVI 3, Canvas 2D",
    facts: ["1–2 sec latency", "12+ metrics", "60 FPS"],
    description:
      "Voice-led therapeutic prompting paired with reflective visual journaling.",
    bullets: [
      "Built Hume EVI + Claude voice interactions with logic-based interruptions and a 1–2 second response loop.",
      "Engineered a custom drawing canvas tracking behavioral signals for anxiety analysis while concurrent voice processing remains at 60 FPS.",
      "Designed Supabase persistence for canvas snapshots and AI reflections, surfaced through a journal UI with generated summaries and anxiety indicators.",
    ],
  },
  {
    index: "02",
    title: "CareCaller AI",
    subtitle: "Real-Time Medical Call Assistant",
    color: "mist",
    stack:
      "TypeScript, Python, FastAPI, React, AWS Transcribe Medical, AWS Comprehend Medical, Claude API",
    facts: ["91% accuracy", "<8 sec summaries", "94% NER precision"],
    description:
      "A call assistant that turns medical conversations into structured clinical context.",
    bullets: [
      "Built a real-time assistant using AWS Transcribe Medical and pyannote speaker diarization, producing SOAP-format summaries in under eight seconds.",
      "Applied AWS Comprehend Medical for NER and medication normalization at 94% precision, layering Claude for clinical reasoning in a FastAPI + React stack.",
    ],
  },
  {
    index: "03",
    title: "Trupti Fashion AI",
    subtitle: "Customer Assistant",
    color: "sage",
    stack: "n8n, OpenAI API, WhatsApp Business API, Google Workspace",
    facts: ["Persistent memory", "Live inventory", "WhatsApp workflow"],
    description:
      "An automated WhatsApp support workflow for product, sizing, and pricing questions.",
    bullets: [
      "Built an n8n-powered workflow using OpenAI and WhatsApp Business APIs for back-and-forth customer conversations.",
      "Connected Google Sheets as a live inventory knowledge base, allowing accurate answers for a business with no website.",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "SQL", "Scheme", "Prolog"],
  },
  {
    label: "Web & Frameworks",
    items: [
      "React",
      "FastAPI",
      "Flask",
      "HTML/CSS",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Canvas 2D",
    ],
  },
  {
    label: "AI / ML",
    items: [
      "Claude API",
      "OpenAI API",
      "Hume EVI 3",
      "AWS Comprehend Medical",
      "AWS Transcribe Medical",
      "Prompt Engineering",
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "Supabase",
      "AWS",
      "n8n",
      "WhatsApp Business API",
      "Google Workspace",
      "Microsoft Office Suite",
    ],
  },
];

const certifications = [
  "AI Fluency Frameworks & Foundations — Anthropic",
  "AI Professional Skills Certification — Global Career Accelerator",
  "Web Development — Global Career Accelerator",
  "Software and App Design — Arizona Department of Education",
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Priyanshi Rana home">
          <span>PR</span>
          <span className="wordmark-divider" />
          <span>Portfolio</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </nav>
        <a className="header-link" href="mailto:priyannshi.rana@gmail.com">
          Let&apos;s connect <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science · AI Systems · Tempe, AZ</p>
            <h1 id="intro-title">
              Priyanshi<span>Rana</span>
            </h1>
            <p className="hero-summary">
              Software engineering student building thoughtful AI experiences
              across evaluation, real-time systems, and full-stack products.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#education">
                View résumé <ArrowDown aria-hidden="true" size={17} />
              </a>
              <a
                className="button button-quiet"
                href={`${import.meta.env.BASE_URL}Priyanshi_latest_resume.pdf`}
                download="Priyanshi_Rana.pdf"
              >
                Print résumé
              </a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-placeholder">
              <img
                className="portrait-image"
                src={`${import.meta.env.BASE_URL}pri_image.jpeg`}
                alt="Priyanshi Rana"
              />
            </div>
            <p className="availability">
              <span aria-hidden="true" /> Available for software engineering
              &amp; AI opportunities
            </p>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            <span>Building technology with attention to people</span>
          </div>
        </section>

        <section className="contact-ribbon" aria-label="Contact information">
          <a href="mailto:priyannshi.rana@gmail.com">
            <Mail aria-hidden="true" size={18} /> priyannshi.rana@gmail.com
          </a>
          <a href="tel:+16235008656">
            <Phone aria-hidden="true" size={17} /> (623) 500-8656
          </a>
          <span>
            <MapPin aria-hidden="true" size={18} /> Tempe, Arizona
          </span>
          <a
            href="https://www.linkedin.com/in/priyannshirana/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin aria-hidden="true" size={17} /> LinkedIn
          </a>
          <a
            href="https://github.com/priyannshirana"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github aria-hidden="true" size={17} /> GitHub
          </a>
        </section>

        <section
          className="resume-section education-section"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="resume-kicker">
            <span>/ 01</span>
            <span>Education</span>
          </div>
          <div className="education-main">
            <div className="section-heading-compact">
              <h2 id="education-title">Arizona State University</h2>
            </div>
            <p className="education-school">
              Ira A. Fulton Schools of Engineering
            </p>
            <p className="education-degree">
              B.S. in Computer Science — Software Engineering
            </p>
          </div>
          <div className="education-meta">
            <strong>4.17</strong>
            <span>GPA · Dean&apos;s List</span>
            <span>May 2027</span>
          </div>
        </section>

        <section
          className="resume-section experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="resume-kicker">
            <span>/ 02</span>
            <span>Experience</span>
          </div>
          <div className="resume-content">
            <div className="section-heading-compact">
              <h2 id="experience-title">Proof in practice.</h2>
            </div>
            <div className="timeline">
              {experience.map((job) => (
                <article className="timeline-item" key={job.role}>
                  <div className="timeline-date">{job.dates}</div>
                  <div className="timeline-content">
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                    <ul>
                      {job.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="resume-section projects-section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="resume-kicker">
            <span>/ 03</span>
            <span>Projects</span>
          </div>
          <div className="resume-content">
            <div className="section-heading-compact">
              <h2 id="projects-title">Selected builds.</h2>
              <p className="section-support">
                Applied AI, real-time systems, and practical automation.
              </p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article
                  className={`project-card project-${project.color}`}
                  key={project.title}
                >
                  <div className="project-topline">
                    <span className="project-index">{project.index}</span>
                    <span className="project-type">{project.subtitle}</span>
                    <Code2 aria-hidden="true" size={18} />
                  </div>
                  <div className="project-core">
                    <div>
                      <h3>{project.title}</h3>
                      <p className="project-description">
                        {project.description}
                      </p>
                    </div>
                    <p className="project-stack">{project.stack}</p>
                  </div>
                  <ul className="project-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="project-facts">
                    {project.facts.map((fact) => (
                      <span key={fact}>{fact}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="resume-section skills-section"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="resume-kicker">
            <span>/ 04</span>
            <span>Technical Skills</span>
          </div>
          <div className="resume-content skills-content">
            <div className="section-heading-compact">
              <h2 id="skills-title">The toolkit.</h2>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="resume-section certifications-section"
          id="certifications"
          aria-labelledby="certifications-title"
        >
          <div className="resume-kicker">
            <span>/ 05</span>
            <span>Certifications</span>
          </div>
          <div className="resume-content certification-content">
            <div className="section-heading-compact">
              <h2 id="certifications-title">Continued learning.</h2>
            </div>
            <ol>
              {certifications.map((certification, index) => (
                <li key={certification}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{certification}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="eyebrow">Career fair ready</p>
          <h2>
            Let&apos;s make something
            <br />
            <em>useful</em> together.
          </h2>
        </div>
        <div className="footer-contact">
          <a href="mailto:priyannshi.rana@gmail.com">
            priyannshi.rana@gmail.com{" "}
            <ArrowUpRight aria-hidden="true" size={19} />
          </a>
          <p>Tempe, AZ · Computer Science, May 2027</p>
        </div>
      </footer>
    </div>
  );
}
