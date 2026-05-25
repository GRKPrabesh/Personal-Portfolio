import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { certifications } from "../data/constants";

const DatabricksIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#FF3621" />
    <path d="M50 20L80 37V63L50 80L20 63V37L50 20Z" fill="white" fillOpacity="0.15" />
    <path d="M50 30L72 43V67L50 72L28 67V43L50 30Z" fill="white" fillOpacity="0.2" />
    <path d="M50 40L64 48V60L50 64L36 60V48L50 40Z" fill="white" />
  </svg>
);

const CiscoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#1BA0D7" />
    <rect x="18" y="44" width="11" height="18" rx="3" fill="white" />
    <rect x="35" y="34" width="11" height="28" rx="3" fill="white" />
    <rect x="52" y="39" width="11" height="23" rx="3" fill="white" />
    <rect x="69" y="46" width="11" height="16" rx="3" fill="white" />
  </svg>
);

const certIconMap = [DatabricksIcon, CiscoIcon];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} style={{ padding: "120px 0", background: "#050510", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "20%", left: "-5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", color: "#06b6d4", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            Verified credentials
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px" }}>
            Certifications
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 22 }} className="cert-grid">
          {certifications.map((cert, i) => {
            const Icon = certIconMap[i];
            return (
              <motion.a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 20,
                  background: "rgba(255,255,255,0.025)", borderRadius: 22,
                  padding: "26px 28px", textDecoration: "none",
                  transition: "all 0.3s", cursor: "pointer", position: "relative", overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `rgba(${cert.color === "#FF3621" ? "255,54,33" : "27,160,215"},0.08)`; e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.borderColor = `${cert.color}40`; e.currentTarget.style.boxShadow = `0 20px 50px ${cert.color}20`; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Top accent */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

                <div style={{ flexShrink: 0, marginTop: 2 }}><Icon /></div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, marginBottom: 8 }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>{cert.title}</h3>
                    <svg width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: 3 }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p style={{ fontSize: 13, color: "#7c3aed", fontWeight: 600, marginBottom: 6 }}>{cert.issuer}</p>
                  <p style={{ fontSize: 12, color: "#475569" }}>Issued {cert.issued}</p>
                  {cert.credentialId && <p style={{ fontSize: 11, color: "#334155", marginTop: 4 }}>ID: {cert.credentialId}</p>}
                  <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 14px", borderRadius: 100, background: `${cert.color}15`, border: `1px solid ${cert.color}30` }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: cert.color, display: "inline-block" }} />
                    <span style={{ fontSize: 11, color: cert.color, fontWeight: 600 }}>View Certificate</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
      <style>{`@media(max-width:640px){.cert-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
