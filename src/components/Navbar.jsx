import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Skills",         href: "#skills" },
  { label: "Projects",       href: "#projects" },
  { label: "Experience",     href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact" },
];

export default function Navbar({ onResumeClick }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navLinks.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive("#" + ids[i]); break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <a href="#hero" onClick={e => go(e, "#hero")} className="navbar-logo">
          Prabesh Kattel<span className="navbar-logo-dot">.</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => go(e, link.href)}
                className={`nav-link${active === link.href ? " nav-link--active" : ""}`}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={onResumeClick} className="nav-resume-btn">
              Resume
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button className="nav-hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          {[0, 1, 2].map(i => (
            <span key={i} className="nav-bar" style={{
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none"
                : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div className="nav-mobile-menu" style={{ maxHeight: menuOpen ? 480 : 0 }}>
        <ul className="nav-mobile-list">
          {navLinks.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={e => go(e, link.href)} className="nav-mobile-link">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button onClick={() => { setMenuOpen(false); onResumeClick(); }} className="nav-mobile-resume">
              📄 View Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
