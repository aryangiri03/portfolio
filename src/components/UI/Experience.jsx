import React from 'react';
import Section from './Section';

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>

                {/* Experience Item 1 */}
                <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-10px', top: '40px', width: '20px', height: '20px', background: 'var(--color-primary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-primary)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '10px' }}>
                        <h3 style={{ fontSize: '1.6rem', color: 'white', fontFamily: 'var(--font-display)' }}>AI Software Developer Intern</h3>
                        <span style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>June 2024 - Dec 2024</span>
                    </div>
                    <h4 style={{ color: 'var(--color-primary)', marginBottom: '20px', fontSize: '1.2rem' }}>EDUPLUS CAMPUS | Pune</h4>
                    <ul style={{ paddingLeft: '20px', color: 'var(--color-text)', lineHeight: '1.8', fontSize: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>Developed the backend infrastructure for a decentralized academic credential verification system using Node.js and Ethereum smart contracts, supporting up to 10,000+ student records per institution.</li>
                        <li style={{ marginBottom: '10px' }}>Integrated blockchain-based storage to ensure tamper-proof and verifiable academic data.</li>
                        <li>Collaborated with frontend and blockchain teams to implement secure RESTful APIs, smart contract workflows, and scalable credential issuance for multiple academic partners.</li>
                    </ul>
                </div>

                {/* Experience Item 2 */}
                <div className="glass-panel" style={{ padding: '40px', marginBottom: '40px', position: 'relative' }}>
                    <div style={{ position: 'absolute', left: '-10px', top: '40px', width: '20px', height: '20px', background: 'var(--color-secondary)', borderRadius: '50%', boxShadow: '0 0 15px var(--color-secondary)' }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '10px' }}>
                        <h3 style={{ fontSize: '1.6rem', color: 'white', fontFamily: 'var(--font-display)' }}>AI/ML Intern</h3>
                        <span style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>June 2024 - July 2024</span>
                    </div>
                    <h4 style={{ color: 'var(--color-secondary)', marginBottom: '20px', fontSize: '1.2rem' }}>INTERNPE | Pune</h4>
                    <ul style={{ paddingLeft: '20px', color: 'var(--color-text)', lineHeight: '1.8', fontSize: '1rem' }}>
                        <li style={{ marginBottom: '10px' }}>Engineered features and optimized 5+ ML models, improving accuracy by 20%.</li>
                        <li style={{ marginBottom: '10px' }}>Applied Grid Search and K-Fold Cross Validation to tune hyperparameters.</li>
                        <li>Utilized Scikit-Learn and TensorFlow for model training and deployment, reducing inference latency by 30%.</li>
                    </ul>
                </div>

            </div>
        </Section>
    );
};

export default Experience;
