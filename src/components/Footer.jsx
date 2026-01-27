import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaTwitter, FaGraduationCap, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Footer.css';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-bg"></div>
            <div className="container">
                <div className="footer-grid">
                    {/* Col 1: About */}
                    <div className="footer-col col-about">
                        <a href="#" className="footer-logo">
                            <div className="logo-icon-wrapper-sm">
                                <FaGraduationCap />
                            </div>
                            <span>MG SERVİS</span>
                        </a>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><FaFacebook /></a>
                            <a href="#" className="social-link"><FaInstagram /></a>
                            <a href="#" className="social-link"><FaLinkedin /></a>
                            <a href="#" className="social-link"><FaWhatsapp /></a>
                            <a href="#" className="social-link"><FaTwitter /></a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="footer-col">
                        <h4>{t('footer.links_title')}</h4>
                        <ul className="footer-links">
                            <li><a href="#hero">{t('header.home')}</a></li>
                            <li><a href="#services">{t('header.services')}</a></li>
                            <li><a href="#universities">{t('header.universities')}</a></li>
                            <li><a href="#filieres">{t('header.programs')}</a></li>
                            <li><a href="#contact">{t('header.contact')}</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Services */}
                    <div className="footer-col">
                        <h4>{t('footer.services_title')}</h4>
                        <ul className="footer-links">
                            <li><a href="#">{t('services.items.admission.title')}</a></li>
                            <li><a href="#">{t('services.items.visa.title')}</a></li>
                            <li><a href="#">{t('services.items.housing.title')}</a></li>
                            <li><a href="#">{t('services.items.consultation.title')}</a></li>
                            <li><a href="#">{t('services.items.support.title')}</a></li>
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div className="footer-col col-contact">
                        <h4>{t('footer.contact_title')}</h4>
                        <ul className="contact-info">
                            <li><FaMapMarkerAlt className="contact-icon" style={{ marginLeft: i18n.dir() === 'rtl' ? '0.5rem' : 0, marginRight: i18n.dir() === 'rtl' ? 0 : '0.5rem' }} /> Istanbul, Türkiye</li>
                            <li><FaPhone className="contact-icon" style={{ marginLeft: i18n.dir() === 'rtl' ? '0.5rem' : 0, marginRight: i18n.dir() === 'rtl' ? 0 : '0.5rem' }} /> +90 555 123 45 67</li>
                            <li><FaEnvelope className="contact-icon" style={{ marginLeft: i18n.dir() === 'rtl' ? '0.5rem' : 0, marginRight: i18n.dir() === 'rtl' ? 0 : '0.5rem' }} /> contact@mgservis.com</li>
                            <li><FaClock className="contact-icon" style={{ marginLeft: i18n.dir() === 'rtl' ? '0.5rem' : 0, marginRight: i18n.dir() === 'rtl' ? '0.5rem' : 0 }} /> {t('footer.hours')}</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="copyright-row">
                        <p>{t('footer.rights', { year: currentYear })}</p>
                        <div className="legal-links">
                            <a href="#">{t('footer.legal.terms')}</a>
                            <span className="separator">|</span>
                            <a href="#">{t('footer.legal.privacy')}</a>
                            <span className="separator">|</span>
                            <a href="#">{t('footer.legal.cgu')}</a>
                        </div>
                    </div>
                    <div className="developed-by" style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <a href="https://tobeesoft.com" target="_blank" rel="noopener noreferrer" className="dev-credit">
                            {t('footer.developed_by')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
