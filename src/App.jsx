import React from 'react';
import Scene from './components/Canvas/Scene';
import Overlay from './components/UI/Overlay';
import About from './components/UI/About';
import Skills from './components/UI/Skills';
import Projects from './components/UI/Projects';
import Experience from './components/UI/Experience';
import Contact from './components/UI/Contact';
import CustomCursor from './components/UI/CustomCursor';
import GlitchText from './components/UI/GlitchText';
import Typewriter from './components/UI/Typewriter';
import HolographicHUD from './components/UI/HolographicHUD';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <CustomCursor />
      <Scene scrollYProgress={scrollYProgress} />
      <Overlay />

      {/* Global Noise Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.05,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}></div>

      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--color-primary)',
          transformOrigin: '0%',
          zIndex: 10000,
          boxShadow: '0 0 10px var(--color-primary)'
        }}
      />

      <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        {/* Hero Spacer */}
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 10%'
        }}>
          <div style={{
            pointerEvents: 'auto',
            width: '100%',
            maxWidth: '1200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px'
          }}>

            {/* Left Side: Profile & Text */}
            <div style={{ flex: '1 1 400px', textAlign: 'left' }}>
              <div className="profile-pic-container" style={{ margin: '0 0 30px 0', width: '200px', height: '200px' }}>
                <div className="profile-pic-glow"></div>
                <img src="https://avatars.githubusercontent.com/u/155383285?s=400&u=4e13188abda16665196714b0db041a825b27430b&v=4" alt="Aryan Giri" className="profile-pic" />
              </div>
              <h1 style={{ marginBottom: '20px', lineHeight: 1 }}>
                <GlitchText text="ARYAN GIRI" />
              </h1>
              <div style={{ fontSize: '1.5rem', color: 'var(--color-text-dim)', minHeight: '1.5em' }}>
                <Typewriter text="B.Tech Computer Engineering Student" speed={50} delay={1000} />
              </div>
              <p style={{ marginTop: '20px', maxWidth: '500px', lineHeight: '1.6', color: 'var(--color-text)' }}>
                Transforming vision into smart, autonomous AI solutions engineered for the next era of intelligent systems.
              </p>
            </div>

            {/* Right Side: Holographic HUD */}
            <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
              <HolographicHUD />
            </div>

          </div>
        </div>

        {/* Content Sections */}
        <div style={{ pointerEvents: 'auto', background: 'linear-gradient(to bottom, transparent, #050505 20%)' }}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />

          <footer style={{ padding: '40px', textAlign: 'center', color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Aryan Giri. Built with Google Antigravity.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
