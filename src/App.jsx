import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentlyLearning from './components/CurrentlyLearning';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Header Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Banner with Console Terminal */}
        <Hero />

        {/* Profile Biography and Goals */}
        <About />

        {/* Active Learning Targets */}
        <CurrentlyLearning />

        {/* Categorized Skills Dashboard */}
        <Skills />

        {/* Feature Pipelines and Architectures */}
        <Projects />

        {/* AWS / LPIC Credentials Validation */}
        <Certifications />

        {/* Career Growth Timeline */}
        <Experience />

        {/* Get in Touch Form & Deployment Log Terminal */}
        <Contact />
      </main>

      {/* Footer Navigation & Signatures */}
      <Footer />
    </>
  );
}

export default App;
