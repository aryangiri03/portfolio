import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import StarField from './StarField';
import HeroExperience from './HeroExperience';

const Scene = ({ scrollYProgress }) => {
    return (
        <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Handle pixel ratio for mobile/desktop
            >
                <Suspense fallback={null}>
                    <color attach="background" args={['#050505']} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />

                    <StarField />
                    <HeroExperience scrollYProgress={scrollYProgress} />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
