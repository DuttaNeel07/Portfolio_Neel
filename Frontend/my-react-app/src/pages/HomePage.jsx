import SkillBadge from "../components/SkillBadge";
import { Link } from "react-router-dom";
import "./HomePage.css";

// ── Edit your info here ──────────────────────────────────────
const MY_NAME = "Neel Dutta";
const MY_TITLE = "Aspiring Developer";
const MY_BIO = `Hey! I'm Neel — a developer just getting started on my journey.
I enjoy building things for the web and I'm currently learning React, JavaScript,
and backend development with Node.js. I'm always looking to grow, take on new
challenges, and collaborate on interesting projects.`;

const SKILLS = [
  "JavaScript", "React", "HTML", "CSS",
  "Node.js", "Python", "Git", "MongoDB",
];

const SOCIAL_LINKS = [
  { label: "GitHub",   href: "https://github.com/DuttaNeel07" },
  { label: "LinkedIn", href: "#" }, // replace # with your LinkedIn URL
  { label: "Email",    href: "mailto:neel.dutta0729@gmail.com" },
];
// ────────────────────────────────────────────────────────────

function HomePage() {
  return (
    <div className="home">

      {/* ── Hero Section ── */}
      <section className="hero fade-up">
        <div className="hero-greeting">👋 Hello, world</div>
        <h1 className="hero-name">{MY_NAME}</h1>
        <p className="hero-title">{MY_TITLE}</p>
        <p className="hero-bio">{MY_BIO}</p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">See My Projects</Link>
          <Link to="/contact"  className="btn-secondary">Get In Touch</Link>
        </div>

        <div className="hero-socials">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-link">
              {s.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="divider fade-up-2" />

      {/* ── Skills Section ── */}
      <section className="skills-section fade-up-3">
        <span className="section-tag">Skills</span>
        <h2>What I work with</h2>
        <p className="skills-sub">Technologies I'm learning and building with</p>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <SkillBadge key={skill} label={skill} />
          ))}
        </div>
      </section>

      {/* ── Currently Learning ── */}
      <section className="learning-section fade-up-4">
        <span className="section-tag">Currently</span>
        <h2>What I'm up to</h2>

        <div className="learning-cards">
          <div className="learning-card">
            <div className="learning-icon">📚</div>
            <h4>Learning</h4>
            <p>Deepening my understanding of React, REST APIs, and full-stack JavaScript development.</p>
          </div>
          <div className="learning-card">
            <div className="learning-icon">🔨</div>
            <h4>Building</h4>
            <p>Working on personal projects to strengthen my skills and build a portfolio I'm proud of.</p>
          </div>
          <div className="learning-card">
            <div className="learning-icon">🎯</div>
            <h4>Goal</h4>
            <p>Land my first dev role and continue growing as a full-stack developer.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;