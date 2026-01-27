import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/FAQ.css';

const FAQ = () => {
    const { t, i18n } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const questionsData = t('faq.items', { returnObjects: true });

    // Fallback if translation fails or returns string
    const currentQuestions = Array.isArray(questionsData) ? questionsData : [];

    const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="faq" className="section faq-section">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="section-header text-center">
                    <motion.span variants={itemVariants} className="section-subtitle">{t('faq.subtitle')}</motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">{t('faq.title')} <span className="gradient-text">{t('faq.title_highlight')}</span></motion.h2>
                    <motion.div variants={itemVariants} className="title-underline"></motion.div>
                </div>

                <div className="faq-list">
                    {currentQuestions.map((item, i) => (
                        <motion.div
                            className={`faq-item ${openIndex === i ? 'open' : ''}`}
                            key={i}
                            onClick={() => toggle(i)}
                            variants={itemVariants}
                        >
                            <div className="faq-question">
                                <h3>{item.q}</h3>
                                <div className="icon-box">
                                    {openIndex === i ? <FaMinus className="toggle-icon minus" /> : <FaPlus className="toggle-icon plus" />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        className="faq-answer-wrapper"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="faq-answer">
                                            <p>{item.a}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default FAQ;
