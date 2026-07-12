import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const MouseParallax = ({ children, strength = 20, className = "" }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normaliser la position de la souris entre -1 et 1
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Ajouter un effet de ressort pour la fluidité
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Transformer les valeurs -1/1 en pixels
    const translateX = useTransform(springX, [-1, 1], [-strength, strength]);
    const translateY = useTransform(springY, [-1, 1], [-strength, strength]);

    return (
        <motion.div 
            style={{ x: translateX, y: translateY }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MouseParallax;
