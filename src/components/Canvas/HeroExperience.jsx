import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

const HeroExperience = ({ scrollYProgress }) => {
    const groupRef = useRef();
    const ringRef1 = useRef();
    const ringRef2 = useRef();
    const ringRef3 = useRef();

    // Store scroll value in a ref to access in useFrame without re-rendering
    const scrollRef = useRef(0);

    useEffect(() => {
        if (scrollYProgress) {
            const unsubscribe = scrollYProgress.on("change", (v) => {
                scrollRef.current = v;
            });
            return () => unsubscribe();
        }
    }, [scrollYProgress]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const scroll = scrollRef.current;

        // Rotate entire group based on scroll
        if (groupRef.current) {
            // Rotate around X axis to simulate "tumbling" through space
            groupRef.current.rotation.x = scroll * Math.PI * 2;
            groupRef.current.rotation.y = scroll * Math.PI * 0.5;
        }

        if (ringRef1.current) {
            ringRef1.current.rotation.x = t * 0.1 + scroll * 2;
            ringRef1.current.rotation.y = t * 0.05;
        }
        if (ringRef2.current) {
            ringRef2.current.rotation.x = t * -0.15 + scroll * 2;
            ringRef2.current.rotation.z = t * 0.05;
        }
        if (ringRef3.current) {
            ringRef3.current.rotation.y = t * 0.2;
            ringRef3.current.rotation.z = t * -0.1 + scroll * 2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Deep Galaxy Background */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Jarvis-like HUD Rings */}
            <group position={[0, 0, -2]}>
                <mesh ref={ringRef1}>
                    <torusGeometry args={[3, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#00f3ff" transparent opacity={0.3} />
                </mesh>
                <mesh ref={ringRef2}>
                    <torusGeometry args={[2.5, 0.02, 16, 100]} />
                    <meshBasicMaterial color="#bd00ff" transparent opacity={0.3} />
                </mesh>
                <mesh ref={ringRef3}>
                    <torusGeometry args={[2, 0.01, 16, 100]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
                </mesh>
            </group>

            {/* Floating Data Particles */}
            <Sparkles
                count={300}
                scale={15}
                size={3}
                speed={0.5}
                opacity={0.6}
                color="#00f3ff"
            />

            <Sparkles
                count={200}
                scale={20}
                size={4}
                speed={0.3}
                opacity={0.4}
                color="#bd00ff"
            />

            {/* Central Tech Core */}
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh position={[0, 0, 0]}>
                    <icosahedronGeometry args={[1, 1]} />
                    <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
                </mesh>
            </Float>
        </group>
    );
};

export default HeroExperience;
