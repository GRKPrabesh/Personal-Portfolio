import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/constants";
import heroPhoto from "../assets/profile.jfif";

export default function Hero({ onResumeClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = personalInfo.taglines[currentIdx];
    let t;
    if (!isDeleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    else if (!isDeleting && displayed.length === word.length)
      t = setTimeout(() => setIsDeleting(true), 2000);
    else if (isDeleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    else { setIsDeleting(false); setCurrentIdx(p => (p + 1) % personalInfo.taglines.length); }
    return () => clearTimeout(t);
  }, [displayed, isDeleting, currentIdx]);

  return (
    <section id="hero" className="hero-section">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-container">
        <div className="hero-layout">

          {/* ── Text ── */}
          <div className="hero-text">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="hero-badge">
                <span className="hero-badge-dot" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1 className="hero-title"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Hi, I&apos;m<br />
              <span className="hero-name">Prabesh Kattel</span>
            </motion.h1>

            <motion.div className="hero-typewriter"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <span className="tw-bracket">{"<"}</span>
              <span className="tw-text">{displayed}</span>
              <span className="tw-cursor" />
              <span className="tw-bracket">{" />"}</span>
            </motion.div>

            <motion.p className="hero-desc"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              Software Engineering student passionate about data analysis, full-stack development, and building things that matter.
            </motion.p>

            <motion.div className="hero-buttons"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <button className="btn-primary" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
                View My Work →
              </button>
              <button className="btn-resume" onClick={onResumeClick}>
                📄 Resume
              </button>
              <button className="btn-outline" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Me
              </button>
            </motion.div>

            <motion.div className="hero-stats"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
              {[["5+", "Projects Built"], ["2+", "Years Learning"], ["2", "Certifications"]].map(([num, label]) => (
                <div key={label} className="hero-stat">
                  <p className="hero-stat-num">{num}</p>
                  <p className="hero-stat-label">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Photo ── */}
          <motion.div className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}>
            <div className="hero-photo-ring" />
            <img src={heroPhoto} alt="Prabesh Kattel" className="hero-photo-img" />
            <div className="hero-photo-glow" />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="hero-scroll"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
        <span className="hero-scroll-label">scroll</span>
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
