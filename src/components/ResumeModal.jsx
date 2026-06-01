import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ResumeModal({ open, onClose }) {
  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="resume-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="resume-modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <span className="resume-modal-icon">📄</span>
                <div>
                  <p className="resume-modal-name">Prabesh Kattel</p>
                  <p className="resume-modal-sub">Resume / CV</p>
                </div>
              </div>
              <div className="resume-modal-actions">
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
                  ↗ Open in Tab
                </a>
                <button className="resume-close-btn" onClick={onClose} aria-label="Close">
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="resume-viewer">
              <object
                data="/Resume.pdf"
                type="application/pdf"
                className="resume-pdf-object"
              >
                {/* Fallback if browser can't render PDF inline */}
                <div className="resume-fallback">
                  <p style={{ color: "#94a3b8", marginBottom: 20, fontSize: 15 }}>
                    Your browser cannot display the PDF inline.
                  </p>
                  <a href="/Resume.pdf" download="Prabesh_Kattel_Resume.pdf" className="btn-primary">
                    ⬇ Download Resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
