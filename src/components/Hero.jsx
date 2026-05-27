import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/constants";
import heroPhoto from "../assets/profile.jfif";

const Particle = ({ style }) => (
  <div style={{
    position: "absolute", borderRadius: "50%",
    background: "linear-gradient(135deg, rgba(124,58,237,0.6), rgba(6,182,212,0.4))",
    animation: `float ${style.dur}s ease-in-out infinite`,
    animationDelay: `${style.delay}s`,
    ...style,
  }} />
);

export default function Hero() {
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

  const particles = [
    { width: 6, height: 6, top: "15%", left: "10%", dur: 4, delay: 0 },
    { width: 4, height: 4, top: "25%", left: "30%", dur: 5, delay: 1 },
    { width: 8, height: 8, top: "60%", left: "5%", dur: 6, delay: 2 },
    { width: 5, height: 5, bottom: "30%", left: "40%", dur: 4.5, delay: 0.5 },
    { width: 3, height: 3, top: "40%", left: "20%", dur: 3.5, delay: 1.5 },
  ];

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #050510 0%, #0a0520 50%, #050510 100%)",
      position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
    }}>
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "10%", left: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 65%)", borderRadius: "50%", animation: "float 8s ease-in-out infinite" }} />
        <div style={{ position: "absolute", bottom: "0", right: "20%", width: 500, height: 500, background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)", borderRadius: "50%", animation: "float2 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px", opacity: 0.5 }} />
        {particles.map((p, i) => <Particle key={i} style={p} />)}
      </div>

      {/* Left: Text content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1140, margin: "0 auto", padding: "120px 28px 80px", width: "100%" }}>
        <div style={{ maxWidth: 580 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 100,
              background: "rgba(124,58,237,0.12)",
              border: "1px solid rgba(124,58,237,0.25)",
              color: "#a78bfa", fontSize: 12, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 28,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", animation: "pulse-glow 2s ease-in-out infinite", display: "inline-block" }} />
             
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ fontSize: "clamp(40px, 6vw, 72px)", fontWeight: 900, color: "#fff", lineHeight: 1.08, marginBottom: 16, letterSpacing: "-1.5px" }}>
            Hi, I&apos;m<br />
            <span style={{ background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 40%, #06b6d4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shimmer 4s linear infinite" }}>
              Prabesh Kattel
            </span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
            style={{ fontSize: "clamp(16px, 2.5vw, 22px)", fontWeight: 500, color: "#94a3b8", marginBottom: 20, height: 36, display: "flex", alignItems: "center", gap: 3 }}>
            <span style={{ color: "#06b6d4" }}>{"<"}</span>
            <span style={{ color: "#e2e8f0" }}>{displayed}</span>
            <span style={{ display: "inline-block", width: 2, height: 24, background: "#7c3aed", borderRadius: 2, animation: "blink 1s step-end infinite" }} />
            <span style={{ color: "#06b6d4" }}>{" />"}</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.3 }}
            style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, maxWidth: 460, marginBottom: 36 }}>
            Software Engineering student passionate about data analysis, full-stack development, and building things that matter.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }}
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "13px 30px", borderRadius: 100, background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", transition: "all 0.25s", boxShadow: "0 4px 20px rgba(124,58,237,0.4)", fontFamily: "inherit" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(124,58,237,0.55)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(124,58,237,0.4)"; }}>
              View My Work →
            </button>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              style={{ padding: "13px 30px", borderRadius: 100, background: "transparent", color: "#a78bfa", fontWeight: 600, fontSize: 14, border: "1.5px solid rgba(124,58,237,0.4)", cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.12)"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.7)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              Contact Me
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.55 }}
            style={{ display: "flex", gap: 32, marginTop: 44 }}>
            {[["5+", "Projects Built"], ["2+", "Years Learning"], ["2", "Certifications"]].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontSize: 26, fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{num}</p>
                <p style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Photo — pinned to right, fades into page on left and bottom, Gemini watermark hidden */}
      <div style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        height: "100%",
        width: "48%",
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
      }} className="hero-photo">
        <motion.img
          src={heroPhoto}
          alt="Prabesh Kattel"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        {/* Fade left edge into background */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #050510 0%, rgba(5,5,16,0.5) 20%, transparent 45%)" }} />
        {/* Fade bottom edge — also hides Gemini watermark */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #050510 0%, rgba(5,5,16,0.8) 12%, transparent 35%)" }} />
        {/* Fade top edge */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #050510 0%, transparent 15%)" }} />
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 3 }}>
        <span style={{ fontSize: 10, color: "#334155", letterSpacing: "0.2em", textTransform: "uppercase" }}>scroll</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #7c3aed, transparent)" }} />
      </motion.div>

      <style>{`
        @media (max-width: 768px) { .hero-photo { display: none; } }
      `}</style>
    </section>
  );
}
