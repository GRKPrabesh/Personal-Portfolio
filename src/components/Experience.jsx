import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/constants";

function TimelineItem({ item, index, inView, isLast }) {
  const isWork = item.type === "work";
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ display: "flex", gap: 20 }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div style={{
          width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
          background: isWork ? "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(124,58,237,0.1))" : "linear-gradient(135deg, rgba(6,182,212,0.3), rgba(6,182,212,0.1))",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
          border: `1px solid ${isWork ? "rgba(124,58,237,0.3)" : "rgba(6,182,212,0.3)"}`,
          boxShadow: `0 0 20px ${isWork ? "rgba(124,58,237,0.15)" : "rgba(6,182,212,0.15)"}`,
        }}>{isWork ? "💼" : "🎓"}</div>
        {!isLast && <div style={{ width: 1, flex: 1, background: "linear-gradient(to bottom, rgba(124,58,237,0.2), transparent)", marginTop: 6, minHeight: 20 }} />}
      </div>

      <div style={{ paddingBottom: isLast ? 0 : 28, flex: 1 }}>
        <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 18, padding: "18px 22px", transition: "all 0.25s", border: "1px solid rgba(255,255,255,0.04)", cursor: "default" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.07)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)"; e.currentTarget.style.transform = "translateX(4px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateX(0)"; }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 3 }}>{item.title}</h3>
              <p style={{ fontSize: 13, background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 600 }}>{item.organization}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: 11, color: "#475569", background: "rgba(124,58,237,0.1)", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(124,58,237,0.15)" }}>{item.period}</span>
              <p style={{ fontSize: 11, color: "#334155", marginTop: 5 }}>{item.location}</p>
            </div>
          </div>
          <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} style={{ padding: "120px 0", background: "#07071a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "10%", right: "-5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            My journey
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            Experience &amp; <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</span>
          </h2>
        </motion.div>

        <div>
          {experiences.map((item, i) => (
            <TimelineItem key={`${item.title}-${i}`} item={item} index={i} inView={inView} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
