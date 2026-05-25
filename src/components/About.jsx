import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/constants";

const traits = [
  { icon: "�", label: "Business Development", color: "#7c3aed" },
  { icon: "�", label: "Software Developer", color: "#06b6d4" },
  { icon: "🎯", label: "Detail-Oriented", color: "#7c3aed" },
  { icon: "📣", label: "Marketing", color: "#06b6d4" },
  { icon: "🤝", label: "Counselling", color: "#7c3aed" },
  { icon: "🧠", label: "Problem Solver", color: "#06b6d4" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} style={{ padding: "120px 0", background: "#050510", position: "relative", overflow: "hidden" }}>
      {/* BG accent */}
      <div style={{ position: "absolute", top: "30%", right: "-10%", width: 400, height: 400, background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            Get to know me
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            About <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64, alignItems: "center" }} className="about-grid">
          {/* Left: quick info cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { label: "Focus", value: "Business Development", icon: "📈" },
              { label: "Also", value: "Software Developer", icon: "💻" },
              { label: "Status", value: "BDE @ PCPS College", icon: "�" },
              { label: "Location", value: personalInfo.location, icon: "🌏" },
            ].map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: "rgba(255,255,255,0.025)", borderRadius: 14, transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.08)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontSize: 14, color: "#e2e8f0", fontWeight: 600 }}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 16, letterSpacing: "-0.3px", lineHeight: 1.3 }}>
              Technology meets <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>strategy</span>
            </h3>
            <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.85, marginBottom: 32 }}>{personalInfo.bio}</p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 32 }}>
              {traits.map((trait, i) => (
                <motion.div key={trait.label}
                  initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                  style={{ background: "rgba(255,255,255,0.03)", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "center", gap: 8, cursor: "default", transition: "all 0.2s", border: "1px solid rgba(255,255,255,0.04)" }}
                  onMouseEnter={e => { e.currentTarget.style.background = `rgba(124,58,237,0.1)`; e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  <span style={{ fontSize: 15 }}>{trait.icon}</span>
                  <span style={{ fontSize: 12, color: "#cbd5e1", fontWeight: 500 }}>{trait.label}</span>
                </motion.div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                style={{ padding: "10px 22px", borderRadius: 100, background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "#fff", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 15px rgba(124,58,237,0.3)" }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 6px 20px rgba(124,58,237,0.45)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 15px rgba(124,58,237,0.3)"; }}>
                LinkedIn ↗
              </a>
              <a href={`mailto:${personalInfo.email}`}
                style={{ padding: "10px 22px", borderRadius: 100, background: "rgba(255,255,255,0.04)", color: "#94a3b8", fontSize: 13, fontWeight: 600, textDecoration: "none", transition: "all 0.2s", border: "1px solid rgba(255,255,255,0.08)" }}
                onMouseEnter={e => { e.target.style.background = "rgba(124,58,237,0.12)"; e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(124,58,237,0.3)"; }}
                onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.color = "#94a3b8"; e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}>
                Email Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important;gap:48px !important;}}`}</style>
    </section>
  );
}
