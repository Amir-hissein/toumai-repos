import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversity, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Universities.css';

const universities = [
    // Public Universities
    { id: 1, name: "Istanbul University", type: "public", location: "Istanbul", rating: 4.8 },
    { id: 2, name: "Ankara University", type: "public", location: "Ankara", rating: 4.7 },
    { id: 3, name: "Middle East Technical Uni (ODTÜ)", type: "public", location: "Ankara", rating: 4.9 },
    { id: 4, name: "Boğaziçi University", type: "public", location: "Istanbul", rating: 4.9 },
    { id: 5, name: "Hacettepe University", type: "public", location: "Ankara", rating: 4.8 },
    { id: 6, name: "Istanbul Technical Uni (ITU)", type: "public", location: "Istanbul", rating: 4.8 },
    { id: 7, name: "Ege University", type: "public", location: "Izmir", rating: 4.6 },
    { id: 8, name: "Marmara University", type: "public", location: "Istanbul", rating: 4.5 },
    { id: 9, name: "Dokuz Eylül University", type: "public", location: "Izmir", rating: 4.4 },
    { id: 10, name: "Gazi University", type: "public", location: "Ankara", rating: 4.3 },
    { id: 11, name: "Anadolu University", type: "public", location: "Eskişehir", rating: 4.2 },
    { id: 12, name: "Akdeniz University", type: "public", location: "Antalya", rating: 4.3 },
    { id: 13, name: "Bursa Uludağ University", type: "public", location: "Bursa", rating: 4.1 },
    // Public Universities
    { id: 1, name: "Istanbul University", type: "public", location: "Istanbul", rating: 4.8 },
    { id: 2, name: "Ankara University", type: "public", location: "Ankara", rating: 4.7 },
    { id: 3, name: "Middle East Technical Uni (ODTÜ)", type: "public", location: "Ankara", rating: 4.9 },
    { id: 4, name: "Boğaziçi University", type: "public", location: "Istanbul", rating: 4.9 },
    { id: 5, name: "Hacettepe University", type: "public", location: "Ankara", rating: 4.8 },
    { id: 6, name: "Istanbul Technical Uni (ITU)", type: "public", location: "Istanbul", rating: 4.8 },
    { id: 7, name: "Ege University", type: "public", location: "Izmir", rating: 4.6 },
    { id: 8, name: "Marmara University", type: "public", location: "Istanbul", rating: 4.5 },
    { id: 9, name: "Dokuz Eylül University", type: "public", location: "Izmir", rating: 4.4 },
    { id: 10, name: "Gazi University", type: "public", location: "Ankara", rating: 4.3 },
    { id: 11, name: "Anadolu University", type: "public", location: "Eskişehir", rating: 4.2 },
    { id: 12, name: "Akdeniz University", type: "public", location: "Antalya", rating: 4.3 },
    { id: 13, name: "Bursa Uludağ University", type: "public", location: "Bursa", rating: 4.1 },
    { id: 14, name: "Gebze Technical University", type: "public", location: "Kocaeli", rating: 4.4 },
    // Public (Small Cities / Anatolia)
    { id: 15, name: "Sakarya University", type: "public", location: "Sakarya", rating: 4.2 },
    { id: 16, name: "Kocaeli University", type: "public", location: "Kocaeli", rating: 4.1 },
    { id: 17, name: "Karadeniz Technical Uni (KTÜ)", type: "public", location: "Trabzon", rating: 4.3 },
    { id: 18, name: "Atatürk University", type: "public", location: "Erzurum", rating: 4.1 },
    { id: 19, name: "Ondokuz Mayıs University", type: "public", location: "Samsun", rating: 4.2 },
    { id: 20, name: "Çukurova University", type: "public", location: "Adana", rating: 4.3 },
    { id: 21, name: "Selçuk University", type: "public", location: "Konya", rating: 4.1 },
    { id: 22, name: "Erciyes University", type: "public", location: "Kayseri", rating: 4.2 },
    { id: 23, name: "Eskişehir Osmangazi Uni", type: "public", location: "Eskişehir", rating: 4.1 },
    { id: 24, name: "Mersin University", type: "public", location: "Mersin", rating: 4.0 },
    { id: 25, name: "Süleyman Demirel Uni", type: "public", location: "Isparta", rating: 4.0 },
    { id: 26, name: "Çanakkale 18 Mart Uni", type: "public", location: "Çanakkale", rating: 4.1 },
    { id: 27, name: "Bolu Abant İzzet Baysal Uni", type: "public", location: "Bolu", rating: 4.0 },
    { id: 28, name: "Muğla Sıtkı Koçman Uni", type: "public", location: "Muğla", rating: 4.1 },
    { id: 29, name: "Pamukkale University", type: "public", location: "Denizli", rating: 4.2 },

    // Private Universities
    { id: 30, name: "Koç University", type: "private", location: "Istanbul", rating: 5.0 },
    { id: 31, name: "Sabancı University", type: "private", location: "Istanbul", rating: 4.9 },
    { id: 32, name: "Bilkent University", type: "private", location: "Ankara", rating: 4.9 },
    { id: 33, name: "Bahçeşehir University (BAU)", type: "private", location: "Istanbul", rating: 4.8 },
    { id: 34, name: "Özyeğin University", type: "private", location: "Istanbul", rating: 4.8 },
    { id: 35, name: "Yeditepe University", type: "private", location: "Istanbul", rating: 4.6 },
    { id: 36, name: "Istanbul Medipol University", type: "private", location: "Istanbul", rating: 4.7 },
    { id: 37, name: "Istanbul Aydın University", type: "private", location: "Istanbul", rating: 4.5 },
    { id: 38, name: "Altınbaş University", type: "private", location: "Istanbul", rating: 4.4 },
    { id: 39, name: "Istanbul Gelişim University", type: "private", location: "Istanbul", rating: 4.3 },
    { id: 40, name: "Nişantaşı University", type: "private", location: "Istanbul", rating: 4.2 },
    { id: 41, name: "Üsküdar University", type: "private", location: "Istanbul", rating: 4.4 },
    { id: 42, name: "Bilgi University", type: "private", location: "Istanbul", rating: 4.6 },
    { id: 43, name: "Başkent University", type: "private", location: "Ankara", rating: 4.5 },
    { id: 44, name: "Beykent University", type: "private", location: "Istanbul", rating: 4.2 },
    { id: 45, name: "Medipol Ankara University", type: "private", location: "Ankara", rating: 4.6 }
];

const Universities = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('public');
    const [showAll, setShowAll] = useState(false);

    const filteredUnis = universities.filter(u => u.type === activeTab);
    const displayedUnis = showAll ? filteredUnis : filteredUnis.slice(0, 8);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <section id="universities" className="section uni-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">{t('universities.subtitle')}</span>
                    <h2 className="section-title">{t('universities.title')} <span className="gradient-text">{t('universities.title_highlight')}</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="tabs-container">
                    <div className="tabs">
                        <button
                            className={`tab-btn ${activeTab === 'public' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('public'); setShowAll(false); }}
                        >
                            {t('universities.tabs.public')}
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'private' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('private'); setShowAll(false); }}
                        >
                            {t('universities.tabs.private')}
                        </button>
                        <div className={`tab-indicator ${activeTab === 'private' ? 'right' : 'left'}`}></div>
                    </div>
                </div>

                <motion.div
                    layout
                    className="uni-grid"
                >
                    <AnimatePresence mode='popLayout'>
                        {displayedUnis.map((uni) => (
                            <motion.div
                                layout
                                key={uni.id}
                                className="uni-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="uni-content-wrapper">
                                    <div className="uni-icon-box">
                                        <FaUniversity className="uni-icon" />
                                    </div>

                                    <h3 className="uni-name">{uni.name}</h3>

                                    <div className="uni-info">
                                        <div className="info-item">
                                            <FaMapMarkerAlt className="info-icon" />
                                            <span>{t(`universities.locations.${uni.location.replace(' ', '')}`, uni.location)}</span>
                                        </div>
                                        <div className="info-item">
                                            <FaStar className="info-icon star" />
                                            <span>{uni.rating}/5.0</span>
                                        </div>
                                    </div>

                                    <button className="uni-action-btn">
                                        {t('universities.card.details')}
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredUnis.length > 8 && (
                    <div className="center-btn">
                        <button
                            className="btn btn-outline"
                            onClick={toggleShowAll}
                        >
                            {showAll ? t('universities.view_less') : t('universities.view_all')}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Universities;
