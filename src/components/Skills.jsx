import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillBars } from "../data/constants";

function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.3, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" ref={ref} className="section section--alt">
      <div className="section-bg-orb" style={{ bottom: "20%", left: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="container">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="section-badge section-badge--cyan">What I work with</span>
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        </motion.div>

        <div className="skills-grid">
          {/* Proficiency bars */}
          <motion.div className="card"
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 }}>
            <p className="card-label">Proficiency</p>
            {skillBars.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={0.15 + i * 0.08} inView={inView} />
            ))}
          </motion.div>

          {/* Category chips */}
          <div className="skills-cats">
            {skills.map((cat, i) => (
              <motion.div key={cat.category} className="skill-cat"
                initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                whileHover={{ x: 5, background: "rgba(124,58,237,0.08)" }}>
                <p className="skill-cat-title">{cat.category}</p>
                <div className="chip-row">
                  {cat.items.map(item => (
                    <motion.span key={item} className="chip"
                      whileHover={{ scale: 1.08, background: "rgba(124,58,237,0.2)" }}>
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
