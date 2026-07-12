import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Position exacte de la souris
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Position avec effet de ressort (spring) pour la fluidité
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Ne pas afficher sur les écrans tactiles
        if (window.matchMedia('(pointer: coarse)').matches) {
            return;
        }

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        // Détecter si on survole un élément interactif
        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = 
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive');

            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseenter', handleMouseEnter);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseenter', handleMouseEnter);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Petit point central */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#FF6B35',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Cercle extérieur fluide */}
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    border: '2px solid #FF6B35',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    width: isHovered ? 50 : 30,
                    height: isHovered ? 50 : 30,
                    backgroundColor: isHovered ? 'rgba(255, 107, 53, 0.1)' : 'transparent',
                    borderColor: isHovered ? 'rgba(255, 107, 53, 0)' : 'rgba(255, 107, 53, 0.5)',
                    scale: isHovered ? 1.2 : 1,
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
};

export default CustomCursor;
