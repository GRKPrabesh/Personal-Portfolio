import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/constants";

const traits = [
  { icon: "📈", label: "Business Dev" },
  { icon: "💻", label: "Software Dev" },
  { icon: "🎯", label: "Detail-Oriented" },
  { icon: "📣", label: "Marketing" },
  { icon: "🤝", label: "Counselling" },
  { icon: "🧠", label: "Problem Solver" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function About() {
  return (
    <section id="about" className="section section--dark">
      <div className="section-bg-orb" style={{ top: "30%", right: "-10%", background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />

      <div className="container">
        <motion.div className="section-header" {...fadeUp()}>
          <span className="section-badge">Get to know me</span>
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        </motion.div>

        <div className="about-grid">
          {/* Info cards */}
          <motion.div className="about-cards" {...fadeLeft(0.1)}>
            {[
              { label: "Focus",    value: "Business Development", icon: "📈" },
              { label: "Also",     value: "Software Developer",   icon: "💻" },
              { label: "Location", value: personalInfo.location,  icon: "🌏" },
            ].map((item, i) => (
              <motion.div key={item.label} className="info-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6, background: "rgba(124,58,237,0.08)" }}>
                <span className="info-card-icon">{item.icon}</span>
                <div>
                  <p className="info-card-label">{item.label}</p>
                  <p className="info-card-value">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bio */}
          <motion.div {...fadeRight(0.15)}>
            <h3 className="about-subtitle">
              Technology meets <span className="gradient-text">strategy</span>
            </h3>
            <p className="about-bio">{personalInfo.bio}</p>

            <div className="traits-grid">
              {traits.map((t, i) => (
                <motion.div key={t.label} className="trait-chip"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                  whileHover={{ y: -3, background: "rgba(124,58,237,0.12)" }}>
                  <span>{t.icon}</span>
                  <span className="trait-label">{t.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-actions">
              <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className="btn-primary" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                LinkedIn ↗
              </motion.a>
              <motion.a href={`mailto:${personalInfo.email}`}
                className="btn-outline" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                Email Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
