import React from 'react';
import Section from './Section';

const About = () => {
    return (
        <Section id="about" title="About Me">
            <div className="glass-panel" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                    I'm <span className="neon-text">Aryan Giri</span>, a B.Tech Computer Engineering student at Vishwakarma University.
                    I specialize in building full-stack applications that merge complex backend logic with immersive frontend experiences.
                </p>
                <br />
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-dim)' }}>
                    My work spans across <strong>AI/ML</strong>, <strong>Blockchain</strong>, and <strong>Web Development</strong>.
                    I love solving real-world problems—whether it's estimating carbon footprints, enhancing study sessions with AI,
                    or securing academic credentials on the blockchain.
                </p>
            </div>
        </Section>
    );
};

export default About;
