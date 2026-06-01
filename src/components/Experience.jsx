import { motion } from "framer-motion";
import { experiences } from "../data/constants";

function TimelineItem({ item, index, isLast }) {
  const isWork = item.type === "work";
  return (
    <motion.div className="timeline-item"
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}>
      {/* Dot + line */}
      <div className="timeline-track">
        <div className={`timeline-dot${isWork ? " timeline-dot--work" : " timeline-dot--edu"}`}>
          {isWork ? "💼" : "🎓"}
        </div>
        {!isLast && <div className="timeline-line" />}
      </div>

      {/* Card */}
      <div className="timeline-body" style={{ paddingBottom: isLast ? 0 : 28 }}>
        <motion.div className="timeline-card" whileHover={{ x: 5, background: "rgba(124,58,237,0.07)" }}>
          <div className="timeline-card-header">
            <div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.organization}</p>
            </div>
            <div className="timeline-meta">
              <span className="timeline-period">{item.period}</span>
              <p className="timeline-location">{item.location}</p>
            </div>
          </div>
          <p className="timeline-desc">{item.description}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="section-bg-orb" style={{ top: "10%", right: "-5%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }} />

      <div className="container container--narrow">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="section-badge">My journey</span>
          <h2 className="section-title">Experience &amp; <span className="gradient-text">Education</span></h2>
        </motion.div>

        <div>
          {experiences.map((item, i) => (
            <TimelineItem key={`${item.title}-${i}`} item={item} index={i} isLast={i === experiences.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
