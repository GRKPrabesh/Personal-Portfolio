import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "all 0.4s ease",
      padding: scrolled ? "12px 0" : "20px 0",
      background: scrolled ? "rgba(5,5,16,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(124,58,237,0.1)" : "none",
    }}>
      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" onClick={e => handleNav(e, "#hero")} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 1 }}>
          <span style={{ fontSize: 16, fontWeight: 800, background: "linear-gradient(135deg, #a78bfa, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Prabesh Kattel
          </span>
          <span style={{ color: "#7c3aed", fontSize: 22, fontWeight: 900, lineHeight: 1, marginLeft: 1 }}>.</span>
        </a>

        <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }} className="hidden md:flex">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleNav(e, link.href)} style={{
                textDecoration: "none", fontSize: 13, fontWeight: 500,
                color: active === link.href ? "#a78bfa" : "#94a3b8",
                transition: "color 0.2s",
                position: "relative",
              }}
                onMouseEnter={e => e.target.style.color = "#e2e8f0"}
                onMouseLeave={e => e.target.style.color = active === link.href ? "#a78bfa" : "#94a3b8"}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, borderRadius: 2,
              background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
              transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      <div className="md:hidden" style={{
        overflow: "hidden", maxHeight: menuOpen ? 400 : 0,
        transition: "max-height 0.35s ease",
        background: "rgba(5,5,16,0.97)", backdropFilter: "blur(20px)",
      }}>
        <ul style={{ listStyle: "none", padding: "16px 28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => handleNav(e, link.href)}
                style={{ textDecoration: "none", fontSize: 15, fontWeight: 500, color: "#cbd5e1" }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
