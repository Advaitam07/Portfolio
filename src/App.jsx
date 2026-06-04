import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import InteractiveTerminal from './components/InteractiveTerminal.jsx';
import InteractivePipeline from './components/InteractivePipeline.jsx';
import Certifications from './components/Certifications.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', position: 'relative' }}>
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>
      
      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="terminal" style={{ padding: '6rem 0', position: 'relative' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Cloud Command Line</span>
              <h2 className="section-title">Interactive Terminal</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', marginTop: '0.5rem' }}>
                Interact with my portfolio database using a simulated Unix shell console. Type <code>help</code> to discover commands.
              </p>
            </div>
            <InteractiveTerminal />
          </div>
        </section>

        <section id="pipeline" style={{ padding: '6rem 0', position: 'relative', backgroundColor: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Automation Sandbox</span>
              <h2 className="section-title">Interactive DevOps Pipeline</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', marginTop: '0.5rem' }}>
                Simulate a real CI/CD deployment flow from code commit to AWS staging. Click "Run Pipeline" to watch the deployment.
              </p>
            </div>
            <InteractivePipeline />
          </div>
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
