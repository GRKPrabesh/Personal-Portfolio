import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumePage from "./components/ResumePage";

import Activities from "./components/Activities";

function App() {
  const [showResume, setShowResume] = useState(false);

  if (showResume) {
    return (
      <AnimatePresence>
        <ResumePage onBack={() => setShowResume(false)} />
      </AnimatePresence>
    );
  }

  return (
    <div style={{ background: "#080810", minHeight: "100vh" }}>
      <Navbar onResumeClick={() => setShowResume(true)} />
      <main>
        <Hero onResumeClick={() => setShowResume(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
