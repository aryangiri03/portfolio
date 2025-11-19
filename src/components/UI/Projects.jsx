import React from 'react';
import Section from './Section';
import { projects } from '../../data/projects';
import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', width: '100%', perspective: '1000px' }}>
                {projects.map((project) => (
                    <div key={project.id} className="flip-card-container" style={{ height: '450px' }}>
                        <div className="flip-card-inner">

                            {/* Front of Card */}
                            <div className="flip-card-front glass-panel" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '30px',
                                borderTop: `2px solid ${project.color}`
                            }}>
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${project.color}22, ${project.color}00)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '20px',
                                    boxShadow: `0 0 20px ${project.color}44`
                                }}>
                                    <Github size={40} color={project.color} />
                                </div>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    color: 'white',
                                    textAlign: 'center',
                                    fontFamily: 'var(--font-display)',
                                    marginBottom: '10px'
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{ color: 'var(--color-text-dim)', textAlign: 'center' }}>Hover to reveal details</p>
                            </div>

                            {/* Back of Card */}
                            <div className="flip-card-back glass-panel" style={{
                                borderBottom: `2px solid ${project.color}`
                            }}>
                                <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
                                    <h3 style={{ fontSize: '1.3rem', color: project.color, marginBottom: '15px', fontFamily: 'var(--font-display)', lineHeight: '1.3' }}>{project.title}</h3>
                                    <p style={{ color: 'var(--color-text)', marginBottom: '20px', lineHeight: '1.6', fontSize: '0.9rem', textAlign: 'left' }}>{project.description}</p>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                        {project.tech.map((t) => (
                                            <span key={t} style={{
                                                fontSize: '0.7rem',
                                                padding: '4px 8px',
                                                borderRadius: '12px',
                                                background: `${project.color}22`,
                                                color: project.color,
                                                border: `1px solid ${project.color}44`
                                            }}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    padding: '10px',
                                    background: project.color,
                                    color: 'black',
                                    borderRadius: '8px',
                                    fontWeight: 'bold',
                                    transition: 'transform 0.2s',
                                    marginTop: '10px',
                                    flexShrink: 0
                                }}>
                                    View Code <ArrowRight size={18} />
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
