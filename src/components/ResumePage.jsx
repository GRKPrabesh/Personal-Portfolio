import { motion } from "framer-motion";

export default function ResumePage({ onBack }) {
  return (
    <motion.div
      className="resume-page"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.3 }}
    >
      {/* ── Top bar ── */}
      <div className="resume-page-bar">
        <div className="resume-page-bar-inner">
          <button className="resume-back-btn" onClick={onBack}>
            ← Back to Portfolio
          </button>

          <div className="resume-page-title">
            <span style={{ fontSize: 20 }}>📄</span>
            <div>
              <p className="resume-modal-name">Prabesh Kattel</p>
              <p className="resume-modal-sub">Resume / CV</p>
            </div>
          </div>

          <div className="resume-page-actions">
            <a
              href="/Resume.pdf"
              download="Prabesh_Kattel_Resume.pdf"
              className="resume-download-btn"
            >
              ⬇ Download
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-open-btn"
            >
              ↗ New Tab
            </a>
          </div>
        </div>
      </div>

      {/* ── PDF ── */}
      <div className="resume-page-viewer">
        <object
          data="/Resume.pdf"
          type="application/pdf"
          className="resume-page-pdf"
        >
          <div className="resume-fallback">
            <p style={{ color: "#94a3b8", marginBottom: 20, fontSize: 15 }}>
              Browser cannot display PDF inline.
            </p>
            <a href="/Resume.pdf" download="Prabesh_Kattel_Resume.pdf" className="btn-primary">
              ⬇ Download Resume
            </a>
          </div>
        </object>
      </div>

      {/* ── Footer ── */}
      <div className="resume-page-footer">
        <span style={{ fontSize: 13, color: "#334155" }}>
          © {new Date().getFullYear()} Prabesh Kattel
        </span>
        <div style={{ display: "flex", gap: 16 }}>
          <a href="/Resume.pdf" download="Prabesh_Kattel_Resume.pdf"
            style={{ fontSize: 12, color: "#7c3aed", textDecoration: "none", fontWeight: 600 }}>
            Download PDF
          </a>
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: "#06b6d4", textDecoration: "none", fontWeight: 600 }}>
            Open in Tab
          </a>
        </div>
      </div>
    </motion.div>
  );
}
