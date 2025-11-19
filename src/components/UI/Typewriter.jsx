import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, speed = 50, delay = 500, className = '' }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let timeout;
        let currentIndex = 0;

        const startTyping = () => {
            if (currentIndex <= text.length) {
                setDisplayText(text.substring(0, currentIndex));
                currentIndex++;
                timeout = setTimeout(startTyping, speed);
            }
        };

        const initialTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(timeout);
            clearTimeout(initialTimeout);
        };
    }, [text, speed, delay]);

    return (
        <span className={className}>
            {displayText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{ display: 'inline-block', marginLeft: '2px', color: 'var(--color-primary)' }}
            >
                |
            </motion.span>
        </span>
    );
};

export default Typewriter;
