import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import Magnetic from './Magnetic';

const Overlay = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {/* Navbar */}
            <nav className="glass-panel" style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '10px 30px',
                zIndex: 10,
                pointerEvents: 'auto',
                display: 'flex',
                gap: '20px',
                alignItems: 'center'
            }}>
                <a href="#about" className="nav-link">About</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Social Dock */}
            <div className="social-dock" style={{ pointerEvents: 'auto' }}>
                <Magnetic>
                    <a href="https://github.com/aryangiri03" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-wrapper">
                        <Github size={24} />
                    </a>
                </Magnetic>
                <Magnetic>
                    <a href="https://www.linkedin.com/in/aryan-giri-852a0a259/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-wrapper">
                        <Linkedin size={24} />
                    </a>
                </Magnetic>
                <Magnetic>
                    <a href="mailto:buildwitharyangiri@gmail.com" aria-label="Email" className="social-icon-wrapper">
                        <Mail size={24} />
                    </a>
                </Magnetic>
            </div>

            {/* Resume Button */}
            <div style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 10,
                pointerEvents: 'auto'
            }}>
                <Magnetic>
                    <a href="https://drive.google.com/file/d/1YwAGQWOK0FllMmNg5VVbi-xqCniK128W/view?usp=drive_link" target="_blank" className="glass-panel" style={{ padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-primary)' }}>
                        <FileText size={20} />
                        Resume
                    </a>
                </Magnetic>
            </div>
        </div>
    );
};

export default Overlay;
