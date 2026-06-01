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

const icons = [DatabricksIcon, CiscoIcon];

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
