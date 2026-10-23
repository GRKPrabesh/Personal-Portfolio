import { motion } from "framer-motion";
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

const GoogleIcon = () => (
  <svg width="36" height="36" viewBox="0 0 100 100" fill="none">
    <rect width="100" height="100" rx="18" fill="#fff" />
    <path d="M91.7 51.1c0-2.9-.3-5.7-.8-8.4H51v15.9h22.9c-1 5.3-4 9.8-8.5 12.8v10.6h13.8c8.1-7.5 12.5-18.5 12.5-30.9z" fill="#4285F4" />
    <path d="M51 93c11.5 0 21.2-3.8 28.2-10.3L65.4 72.1C61.6 74.6 56.7 76 51 76c-11.1 0-20.5-7.5-23.9-17.6H13.7v11C20.7 83.5 35 93 51 93z" fill="#34A853" />
    <path d="M27.1 58.4c-.9-2.5-1.3-5.2-1.3-8s.5-5.4 1.3-8V31.4H13.7A42.1 42.1 0 009 50.4c0 6.8 1.6 13.2 4.7 18.9l13.4-11z" fill="#FBBC05" />
    <path d="M51 24.8c6.3 0 11.9 2.2 16.3 6.4l12.2-12.2C71.2 12 61.5 8 51 8 35 8 20.7 17.5 13.7 31.4l13.4 10.9C30.5 32.3 39.9 24.8 51 24.8z" fill="#EA4335" />
  </svg>
);

const icons = [DatabricksIcon, CiscoIcon, GoogleIcon];

export default function Certifications() {
  return (
    <section id="certifications" className="section section--dark">
      <div className="section-bg-orb" style={{ bottom: "20%", left: "-5%", background: "radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 70%)" }} />

      <div className="container container--mid">
        <motion.div className="section-header"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <span className="section-badge section-badge--cyan">Verified credentials</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert, i) => {
            const Icon = icons[i];
            return (
              <motion.a key={cert.title} href={cert.url} target="_blank" rel="noopener noreferrer"
                className="cert-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: `0 20px 50px ${cert.color}22` }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

                <div className="cert-icon"><Icon /></div>

                <div className="cert-body">
                  <div className="cert-title-row">
                    <h3 className="cert-title">{cert.title}</h3>
                    <svg width="14" height="14" fill="none" stroke="#7c3aed" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <p className="cert-date">Issued {cert.issued}</p>
                  {cert.credentialId && <p className="cert-id">ID: {cert.credentialId}</p>}
                  <div className="cert-badge" style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}35` }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: cert.color, display: "inline-block" }} />
                    <span style={{ fontSize: 11, color: cert.color, fontWeight: 600 }}>View Certificate</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
