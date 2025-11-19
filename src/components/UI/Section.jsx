import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Section = ({ id, title, children, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Cylindrical Rotation Effect
    // As it enters (0), it's at the "bottom" of the cylinder (rotated back)
    // At center (0.5), it's facing front
    // As it leaves (1), it's at the "top" of the cylinder (rotated forward)
    const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [45, 0, -45]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
    const z = useTransform(smoothProgress, [0, 0.5, 1], [-200, 0, -200]); // Push back at edges

    return (
        <section id={id} className={`section-container ${className}`} style={{
            minHeight: '100vh',
            padding: '100px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
            perspective: '1500px', // Increased perspective for grander scale
            overflow: 'hidden' // Prevent scrollbar flickering
        }}>
            <motion.div
                ref={ref}
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    rotateX,
                    opacity,
                    scale,
                    z,
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'center center -500px' // Pivot around a point behind the screen (cylinder center)
                }}
            >
                {title && (
                    <h2 className="neon-text" style={{
                        fontSize: '3rem',
                        marginBottom: '60px',
                        textAlign: 'center',
                        fontFamily: 'var(--font-display)'
                    }}>
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
