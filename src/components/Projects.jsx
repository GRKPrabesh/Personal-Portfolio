import { motion } from "framer-motion";
import { projects } from "../data/constants";

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const accentColors = ["#7c3aed", "#06b6d4", "#7c3aed"];

function ProjectCard({ project, index }) {
  const c = accentColors[index % accentColors.length];
  const c2 = c === "#7c3aed" ? "#06b6d4" : "#7c3aed";

  return (
    <motion.div className="project-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(124,58,237,0.18)" }}>
      {/* Top bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, ${c}, ${c2})`, borderRadius: "20px 20px 0 0" }} />
      {/* Index watermark */}
      <span className="project-index">{String(index + 1).padStart(2, "0")}</span>

      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <div className="chip-row" style={{ marginBottom: 20 }}>
        {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
      </div>

      {project.github && (
        <motion.a href={project.github} target="_blank" rel="noopener noreferrer"
          className="project-link" whileHover={{ color: "#a78bfa", x: 3 }}>
          <GithubIcon /> View on GitHub
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section section--dark">
      <div className="section-bg-orb" style={{ top: "20%", right: "-8%", background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }} />

      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="section-badge">What I&apos;ve built</span>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-sub">A selection of projects across web development, databases, and desktop apps.</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
