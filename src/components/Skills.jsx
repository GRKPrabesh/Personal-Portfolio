import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillBars } from "../data/constants";

function SkillBar({ name, level, delay, inView }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 12, fontWeight: 700, background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{level}%</span>
      </div>
      <div style={{ height: 5, background: "rgba(255,255,255,0.05)", borderRadius: 100, overflow: "hidden" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ height: "100%", borderRadius: 100, background: "linear-gradient(90deg, #7c3aed, #06b6d4)", boxShadow: "0 0 10px rgba(124,58,237,0.5)" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} style={{ padding: "120px 0", background: "#07071a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "20%", left: "-5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            What I work with
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            My <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="skills-grid">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ background: "linear-gradient(145deg, rgba(124,58,237,0.06), rgba(6,182,212,0.03))", borderRadius: 24, padding: 32, border: "1px solid rgba(124,58,237,0.12)", backdropFilter: "blur(10px)" }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 28 }}>Proficiency</p>
            {skillBars.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} delay={0.15 + i * 0.08} inView={inView} />)}
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {skills.map((cat, i) => (
              <motion.div key={cat.category}
                initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                style={{ background: "rgba(255,255,255,0.025)", borderRadius: 18, padding: "16px 20px", transition: "all 0.25s", border: "1px solid rgba(255,255,255,0.04)", cursor: "default" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.08)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 10 }}>{cat.category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {cat.items.map(item => (
                    <span key={item} style={{ padding: "4px 12px", borderRadius: 100, background: "rgba(124,58,237,0.1)", color: "#a78bfa", fontSize: 12, fontWeight: 500, border: "1px solid rgba(124,58,237,0.15)" }}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
