import React, { useState, useEffect } from 'react';
import { FaGraduationCap, FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);

        // Update document direction based on language
        document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';

        return () => window.removeEventListener('scroll', handleScroll);
    }, [i18n.language]);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLangMenuOpen(false);
        setIsMobileMenuOpen(false);
    };

    const toggleLangMenu = () => {
        setIsLangMenuOpen(!isLangMenuOpen);
    };

    const navLinks = [
        { name: t('header.home'), href: '#hero' },
        { name: t('header.services'), href: '#services' },
        { name: t('header.universities'), href: '#universities' },
        { name: t('header.programs'), href: '#filieres' },
        { name: t('header.testimonials'), href: '#testimonials' },
        { name: t('header.contact'), href: '#contact' },
    ];

    const handleMobileLinkClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            // Small delay to allow menu animation to start closing
            setTimeout(() => {
                const headerOffset = 100;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }, 100);
        }
    };

    return (
        <nav className={`header ${isScrolled ? 'scrolled' : ''}`}>
            {/* ... keeping existing standard desktop JSX ... */}
            <div className="container header-container">
                <a href="#" className="logo">
                    <div className="logo-icon-wrapper">
                        <FaGraduationCap className="logo-icon" />
                    </div>
                    <span className="logo-text">TOUMAİ EDUCATION</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="nav-link">{link.name}</a>
                    ))}

                    {/* ... Language Dropdown code ... */}
                    <div className="lang-dropdown-container">
                        <button className="lang-toggle-btn" onClick={toggleLangMenu}>
                            <FaGlobe className="globe-icon" /> <span className="current-lang">{i18n.language.toUpperCase()}</span>
                        </button>

                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    className="lang-dropdown"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <button onClick={() => changeLanguage('fr')} className={`lang-option ${i18n.language === 'fr' ? 'active' : ''}`}>
                                        🇫🇷 Français
                                    </button>
                                    <button onClick={() => changeLanguage('en')} className={`lang-option ${i18n.language === 'en' ? 'active' : ''}`}>
                                        🇬🇧 English
                                    </button>
                                    <button onClick={() => changeLanguage('ar')} className={`lang-option ${i18n.language === 'ar' ? 'active' : ''}`}>
                                        🇹🇳 العربية
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <a href="#contact" className="btn btn-primary cta-btn">{t('header.apply_now')}</a>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-controls">
                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="mobile-menu-header">
                                <div className="logo-icon-wrapper mobile-logo-icon">
                                    <FaGraduationCap />
                                </div>
                                <span className="logo-text mobile-logo-text">TOUMAİ</span>
                            </div>

                            {navLinks.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="mobile-link"
                                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <div className="mobile-menu-lang">
                                <span className="lang-label">Langue:</span>
                                <div className="mobile-lang-options">
                                    <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>FR</button>
                                    <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>EN</button>
                                    <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>AR</button>
                                </div>
                            </div>

                            <div className="mobile-cta">
                                <a href="#contact" className="btn btn-primary" onClick={(e) => handleMobileLinkClick(e, '#contact')}>{t('header.apply_now')}</a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Header;
