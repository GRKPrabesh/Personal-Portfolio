import { personalInfo } from "../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#030308", padding: "36px 0", borderTop: "1px solid rgba(124,58,237,0.1)" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
        <span style={{ fontSize: 15, fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Prabesh Kattel<span style={{ WebkitTextFillColor: "#7c3aed" }}>.</span>
        </span>
        <p style={{ fontSize: 12, color: "#1e293b" }}>© {year} Prabesh Kattel. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Email", href: `mailto:${personalInfo.email}` },
          ].map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? "_self" : "_blank"} rel="noopener noreferrer"
              style={{ fontSize: 13, color: "#1e293b", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#a78bfa"}
              onMouseLeave={e => e.target.style.color = "#1e293b"}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
