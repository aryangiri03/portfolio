import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HolographicHUD = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="holo-hud-container" style={{
            position: 'relative',
            width: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px'
        }}>
            {/* Rotating Rings */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    border: '2px dashed var(--color-primary)',
                    borderRadius: '50%',
                    opacity: 0.3
                }}
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    border: '1px solid var(--color-secondary)',
                    borderRadius: '50%',
                    borderLeftColor: 'transparent',
                    borderRightColor: 'transparent',
                    opacity: 0.5
                }}
            />

            {/* Central Data Display */}
            <div className="glass-panel" style={{
                padding: '20px',
                borderRadius: '50%',
                width: '180px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 243, 255, 0.05)',
                border: '1px solid rgba(0, 243, 255, 0.2)',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 0 30px rgba(0, 243, 255, 0.1)'
            }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: '5px' }}>SYSTEM ONLINE</div>
                <div style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'white' }}>
                    {time.toLocaleTimeString([], { hour12: false })}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--color-text-dim)', marginTop: '5px' }}>
                    LOC: Bangalore, IN
                </div>

                {/* Animated Bars */}
                <div style={{ display: 'flex', gap: '3px', marginTop: '15px', height: '20px', alignItems: 'flex-end' }}>
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [5, 20, 5] }}
                            transition={{ duration: 1 + i * 0.2, repeat: Infinity }}
                            style={{
                                width: '4px',
                                background: 'var(--color-secondary)',
                                borderRadius: '2px'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HolographicHUD;
