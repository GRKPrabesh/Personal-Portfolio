import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { personalInfo } from "../data/constants";

const GithubIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const inputStyle = {
  width: "100%", background: "rgba(255,255,255,0.04)", borderRadius: 12,
  padding: "12px 16px", color: "#fff", fontSize: 14,
  border: "1px solid rgba(255,255,255,0.07)", outline: "none",
  transition: "all 0.2s", fontFamily: "inherit",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Opens user's mail client with TO pre-filled to Prabesh, subject and body pre-filled
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Hi Prabesh,\n\nMy name is ${form.name} and my email is ${form.email}.\n\n${form.message}\n\nBest regards,\n${form.name}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 0", background: "#07071a", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "20%", left: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "-5%", width: 300, height: 300, background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)", borderRadius: "50%", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 28px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: 72 }}>
          <span style={{ display: "inline-block", padding: "5px 16px", borderRadius: 100, background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)", color: "#a78bfa", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
            Get in touch
          </span>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", marginBottom: 14 }}>
            Contact <span style={{ background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me</span>
          </h2>
          <p style={{ fontSize: 14, color: "#475569", maxWidth: 360, margin: "0 auto" }}>Have a project in mind or just want to say hi? My inbox is always open.</p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 28 }} className="contact-grid">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "linear-gradient(145deg, rgba(124,58,237,0.07), rgba(6,182,212,0.03))", borderRadius: 22, padding: 28, border: "1px solid rgba(124,58,237,0.12)" }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 24 }}>Let&apos;s Connect</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                  { label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, icon: <MailIcon /> },
                  { label: "Location", value: personalInfo.location, href: null, icon: "🌏" },
                ].map(({ label, value, href, icon }) => (
                  <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(124,58,237,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7c3aed", flexShrink: 0, fontSize: 16 }}>{icon}</div>
                    <div>
                      <p style={{ fontSize: 10, color: "#334155", marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</p>
                      {href ? (
                        <a href={href} style={{ fontSize: 13, color: "#94a3b8", textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={e => e.target.style.color = "#a78bfa"}
                          onMouseLeave={e => e.target.style.color = "#94a3b8"}>{value}</a>
                      ) : (
                        <p style={{ fontSize: 13, color: "#94a3b8" }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: "rgba(255,255,255,0.025)", borderRadius: 22, padding: 24, border: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ fontSize: 11, color: "#475569", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em" }}>Find me on</p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { name: "GitHub", href: personalInfo.github, Icon: GithubIcon },
                  { name: "LinkedIn", href: personalInfo.linkedin, Icon: LinkedinIcon },
                  { name: "Email", href: `mailto:${personalInfo.email}`, Icon: MailIcon },
                ].map(({ name, href, Icon }) => (
                  <a key={name} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer" aria-label={name}
                    style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none", transition: "all 0.2s", border: "1px solid rgba(255,255,255,0.06)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(124,58,237,0.2)"; e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.borderColor = "rgba(124,58,237,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.color = "#475569"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 }}>
            <form onSubmit={handleSubmit}
              style={{ background: "linear-gradient(145deg, rgba(124,58,237,0.06), rgba(6,182,212,0.03))", borderRadius: 22, padding: 32, display: "flex", flexDirection: "column", gap: 18, border: "1px solid rgba(124,58,237,0.12)" }}>
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Prabesh Kattel" },
                { id: "email", label: "Your Email", type: "email", placeholder: "you@example.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} style={{ display: "block", fontSize: 11, color: "#475569", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</label>
                  <input id={id} name={id} type={type} required value={form[id]} onChange={handleChange} placeholder={placeholder} style={inputStyle}
                    onFocus={e => { e.target.style.background = "rgba(124,58,237,0.08)"; e.target.style.borderColor = "rgba(124,58,237,0.35)"; }}
                    onBlur={e => { e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.borderColor = "rgba(255,255,255,0.07)"; }} />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: 11, color: "#475569", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Message</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project or idea..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => { e.target.style.background = "rgba(124,58,237,0.08)"; e.target.style.borderColor = "rgba(124,58,237,0.35)"; }}
                  onBlur={e => { e.target.style.background = "rgba(255,255,255,0.04)"; e.target.style.borderColor = "rgba(255,255,255,0.07)"; }} />
              </div>
              <button type="submit"
                style={{ padding: "14px", borderRadius: 12, background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", transition: "all 0.25s", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(124,58,237,0.35)" }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(124,58,237,0.5)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(124,58,237,0.35)"; }}>
                {submitted ? "✓ Opening Mail Client..." : "Send Message →"}
              </button>
              <p style={{ fontSize: 11, color: "#334155", textAlign: "center" }}>This will open your email client with the message pre-filled.</p>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr !important;}}`}</style>
    </section>
  );
}
