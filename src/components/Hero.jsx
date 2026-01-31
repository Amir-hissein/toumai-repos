import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlayCircle, FaArrowRight, FaGraduationCap, FaGlobeAmericas, FaPassport } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Hero.css';

const Hero = () => {
    const { t, i18n } = useTranslation();

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

    const cardsVariants = {
        hidden: { opacity: 0, x: 100, rotate: 5 },
        visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="hero-grid-pattern"></div>
                <div className="animated-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container hero-container-split">
                <motion.div
                    className="hero-content-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                        {t('hero.title_start')} <br />
                        <span className="gradient-text-hero">{t('hero.title_end')}</span>
                    </motion.h1>

                    <motion.div variants={itemVariants} className="hero-badge-container">
                        <span className="hero-badge-glow"></span>
                        <span className="hero-badge-text">{t('hero.badge')}</span>
                    </motion.div>

                    <motion.p variants={itemVariants} className="hero-description">
                        {t('hero.description')}
                    </motion.p>

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

                <motion.div
                    className="hero-visual-right"
                    variants={cardsVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="floating-cards-container">
                        <motion.div
                            className="float-card card-1"
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }}
                        >
                            <div className="icon-circle ic-blue">
                                <FaGraduationCap />
                            </div>
                            <div className="fc-content">
                                <span>University</span>
                                <div className="fc-line"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="float-card card-2"
                            animate={{ y: [0, -22, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }}
                        >
                            <div className="icon-circle ic-cyan">
                                <FaGlobeAmericas />
                            </div>
                            <div className="fc-content">
                                <span>Global Access</span>
                                <div className="fc-line"></div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="float-card card-3"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 30px rgba(0,0,0,0.15)" }}
                        >
                            <div className="icon-circle ic-amber">
                                <FaPassport />
                            </div>
                            <div className="fc-content">
                                <span>Visa Support</span>
                                <div className="fc-line"></div>
                            </div>
                        </motion.div>

                        {/* Central Glow Effect behind cards */}
                        <div className="visual-glow"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
