import React from 'react';
import Section from './Section';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className="glass-panel" style={{ padding: '50px', maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Mail color="var(--color-primary)" />
                        <a href="mailto:buildwitharyangiri@gmail.com" style={{ fontSize: '1.1rem' }}>buildwitharyangiri@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Phone color="var(--color-primary)" />
                        <a href="tel:+919307752746" style={{ fontSize: '1.1rem' }}>+91 93077 52746</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <MapPin color="var(--color-primary)" />
                        <span style={{ fontSize: '1.1rem' }}>Bangalore, INdia</span>
                    </div>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input type="text" placeholder="Name" style={{
                        padding: '15px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white'
                    }} />
                    <input type="email" placeholder="Email" style={{
                        padding: '15px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white'
                    }} />
                    <textarea placeholder="Message" rows="5" style={{
                        padding: '15px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px',
                        color: 'white',
                        resize: 'vertical'
                    }}></textarea>
                    <button type="submit" style={{
                        padding: '15px',
                        background: 'var(--color-primary)',
                        color: 'black',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        fontSize: '1rem'
                    }}>
                        Send Message
                    </button>
                </form>
            </div>
        </Section>
    );
};

export default Contact;
