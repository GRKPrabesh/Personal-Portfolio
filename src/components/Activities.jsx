import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activities } from "../data/constants";

import trainingImg    from "../assets/training.png";
import leoDistrictImg from "../assets/Leo Club District Council Meeting Dhulikhel.jpg";
import leoDentalImg   from "../assets/Leo Club Free Dental Camp by Dreamers.jpg";
import aceSpectrumImg from "../assets/Ace Spectrum 2024.jpeg";

const imageMap = {
  training:    trainingImg,
  leoDistrict: leoDistrictImg,
  leoDental:   leoDentalImg,
  aceSpectrum: aceSpectrumImg,
};

function ActivityCard({ item, index }) {
  const [expanded, setExpanded] = useState(false);
  const img = imageMap[item.imageKey];

  return (
    <motion.div
      className="activity-card"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      whileHover={{ y: -6, boxShadow: `0 24px 60px ${item.tagColor}22` }}
    >
      {/* Image */}
      <div className="activity-img-wrap">
        <img src={img} alt={item.title} className="activity-img" />
        <div className="activity-img-overlay" />
        {/* Tag badge */}
        <span className="activity-tag" style={{ background: `${item.tagColor}22`, border: `1px solid ${item.tagColor}55`, color: item.tagColor }}>
          {item.tag}
        </span>
      </div>

      {/* Body */}
      <div className="activity-body">
        <div className="activity-date">{item.date}</div>
        <h3 className="activity-title">{item.title}</h3>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.p
              className="activity-desc"
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.description}
            </motion.p>
          ) : (
            <motion.p
              className="activity-desc activity-desc--clamp"
              key="short"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {item.description}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          className="activity-toggle"
          style={{ color: item.tagColor }}
          onClick={() => setExpanded(e => !e)}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      </div>
    </motion.div>
  );
}

export default function Activities() {
  return (
    <section id="activities" className="section section--alt">
      <div
        className="section-bg-orb"
        style={{ top: "20%", right: "-8%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)" }}
      />

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-badge">Beyond the screen</span>
          <h2 className="section-title">
            Activities &amp; <span className="gradient-text">Engagements</span>
          </h2>
          <p className="section-sub">
            Community involvement, leadership, and knowledge-sharing initiatives I have been part of.
          </p>
        </motion.div>

        <div className="activities-grid">
          {activities.map((item, i) => (
            <ActivityCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
