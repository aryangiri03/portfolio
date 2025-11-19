import React from 'react';
import Section from './Section';

const skills = [
    { category: "Languages", items: ["Python", "C/C++", "Java", "JavaScript", "HTML", "CSS"] },
    { category: "Databases", items: ["MySQL", "MongoDB"] },
    { category: "Frameworks & Libraries", items: ["Flask", "Node.js", "Express.js", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"] },
    { category: "Tools & Technologies", items: ["GitHub", "VS Code", "Postman", "Excel", "MySQL", "LangChain", "HuggingFace", "LLaMA", "n8n"] },
    { category: "Soft Skills", items: ["Problem-solving", "Strategic Thinking", "Creative Ideation", "Team Leadership", "Communication"] }
];

const Skills = () => {
    return (
        <Section id="skills" title="Skills & Technologies">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', width: '100%' }}>
                {skills.map((skillGroup) => (
                    <div key={skillGroup.category} className="glass-panel" style={{ padding: '30px' }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: '20px',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            paddingBottom: '10px',
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.2rem'
                        }}>
                            {skillGroup.category}
                        </h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                            {skillGroup.items.map((item) => (
                                <span key={item} style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    padding: '6px 14px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text)',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseEnter={(e) => {
                                        e.target.style.borderColor = 'var(--color-primary)';
                                        e.target.style.background = 'rgba(0, 243, 255, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                        e.target.style.background = 'rgba(255, 255, 255, 0.03)';
                                    }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
