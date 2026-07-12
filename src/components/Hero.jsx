import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlayCircle, FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import MouseParallax from './MouseParallax';
import '../styles/Hero.css';

import hero1 from '../assets/images/hero1.png';
import hero2 from '../assets/images/hero2.png';
import hero3 from '../assets/images/hero3.png';

const images = [hero1, hero2, hero3];

const Hero = () => {
    const { t, i18n } = useTranslation();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const sliderVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="International Students"
                        className="hero-fullscreen-image"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                    />
                </AnimatePresence>
                <div className="hero-fullscreen-overlay"></div>
                <div className="hero-grid-pattern"></div>
            </div>

            <div className="container hero-container-fullscreen">
                <motion.div
                    className="hero-content-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <MouseParallax strength={15}>
                        <motion.h1 variants={itemVariants} className="hero-title">
                            {t('hero.title_start')} <br />
                            <span className="gradient-text-hero">{t('hero.title_end')}</span>
                        </motion.h1>
                    </MouseParallax>

                    <MouseParallax strength={-10}>
                        <motion.div variants={itemVariants} className="hero-badge-container">
                            <span className="hero-badge-glow"></span>
                            <span className="hero-badge-text">{t('hero.badge')}</span>
                        </motion.div>
                    </MouseParallax>

                    <MouseParallax strength={5}>
                        <motion.p variants={itemVariants} className="hero-description">
                            {t('hero.description')}
                        </motion.p>
                    </MouseParallax>

                    <motion.div variants={itemVariants} className="hero-buttons">
                        <a href="#contact" className="btn btn-primary btn-lg pulse-animation">
                            {t('hero.cta_primary')} <FaArrowRight style={{ marginLeft: i18n.dir() === 'rtl' ? 0 : '0.5rem', marginRight: i18n.dir() === 'rtl' ? '0.5rem' : 0 }} />
                        </a>
                        <a href="#services" className="btn btn-secondary btn-lg glass-btn">
                            <FaPlayCircle className="icon-mr" style={{ marginLeft: i18n.dir() === 'rtl' ? '0.5rem' : 0, marginRight: i18n.dir() === 'rtl' ? 0 : '0.5rem' }} /> {t('hero.cta_secondary')}
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-stats-row"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <div className="mini-stat">
                            <span className="ms-number">45+</span>
                            <span className="ms-label">{t('hero.stats.universities')}</span>
                        </div>
                        <div className="ms-divider"></div>
                        <div className="mini-stat">
                            <span className="ms-number">500+</span>
                            <span className="ms-label">{t('hero.stats.students')}</span>
                        </div>
                        <div className="ms-divider"></div>
                        <div className="mini-stat">
                            <span className="ms-number">98%</span>
                            <span className="ms-label">{t('hero.stats.success')}</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
