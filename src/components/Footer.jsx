import { motion } from "framer-motion";
import { personalInfo } from "../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <motion.span className="footer-logo"
          whileHover={{ scale: 1.04 }}>
          Prabesh Kattel<span className="footer-dot">.</span>
        </motion.span>

        <p className="footer-copy">© {year} Prabesh Kattel. All rights reserved.</p>

        <div className="footer-links">
          {[
            { label: "GitHub",   href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Email",    href: `mailto:${personalInfo.email}` },
          ].map(({ label, href }) => (
            <motion.a key={label} href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="footer-link"
              whileHover={{ color: "#a78bfa", y: -2 }}>
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
