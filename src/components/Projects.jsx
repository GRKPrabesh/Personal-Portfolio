import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data/constants";

const GithubIcon = () => (
  <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

function ProjectCard({ project, index, inView }) {
  const colors = ["#7c3aed", "#06b6d4", "#7c3aed"];
  const c = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      style={{
        background: "rgba(255,255,255,0.025)", borderRadius: 24, padding: 28,
        display: "flex", flexDirection: "column", position: "relative", overflow: "hidden",
        transition: "all 0.3s", cursor: "default",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.07)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(124,58,237,0.15)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      {/* Top gradient bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${c}, ${c === "#7c3aed" ? "#06b6d4" : "#7c3aed"})`, borderRadius: "24px 24px 0 0" }} />

      <span style={{ position: "absolute", top: 18, right: 20, fontSize: 44, fontWeight: 900, color: "rgba(124,58,237,0.07)", lineHeight: 1, userSelect: "none" }}>
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10, paddingRight: 44, marginTop: 8 }}>{project.title}</h3>
      <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{project.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 20 }}>
        {project.tech.map(t => (
          <span key={t} style={{ padding: "4px 11px", borderRadius: 100, background: "rgba(124,58,237,0.1)", color: "#a78bfa", fontSize: 11, fontWeight: 600, border: "1px solid rgba(124,58,237,0.15)" }}>{t}</span>
        ))}
      </div>

      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 13, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={e => e.currentTarget.style.color = "#a78bfa"}
          onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
          <GithubIcon /> View on GitHub
        </a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} style={{ padding: "120px 0", background: "#050510", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", right: "-8%", width: 400, height: 400, background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What I&apos;ve built
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 14 }}>
            My <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
          </h2>
          <p style={{ fontSize: 14, color: "#475569", maxWidth: 420, margin: "0 auto" }}>A selection of projects across web development, databases, and desktop apps.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }} className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} inView={inView} />)}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.projects-grid{grid-template-columns:repeat(2,1fr) !important;}}
        @media(max-width:600px){.projects-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </section>
  );
}
