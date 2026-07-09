import React from 'react';
import { FaUserTie, FaUniversity, FaFileAlt, FaHome, FaPlane, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            key: 'consultation',
            icon: <FaUserTie />,
        },
        {
            key: 'admission',
            icon: <FaUniversity />,
        },
        {
            key: 'visa',
            icon: <FaFileAlt />,
        },
        {
            key: 'housing',
            icon: <FaHome />,
        },
        {
            key: 'transfer',
            icon: <FaPlane />,
        },
        {
            key: 'support',
            icon: <FaHeadset />,
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section id="services" className="section services-section">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="section-header text-center">
                    <motion.span variants={itemVariants} className="section-subtitle">{t('services.subtitle')}</motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">{t('services.title')} <span className="gradient-text">{t('services.title_highlight')}</span></motion.h2>
                    <motion.div variants={itemVariants} className="title-underline"></motion.div>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            className="service-card"
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="icon-wrapper">
                                <div className="service-icon">{service.icon}</div>
                            </div>
                            <h3 className="service-title">{t(`services.items.${service.key}.title`)}</h3>
                            <p className="service-desc">{t(`services.items.${service.key}.desc`)}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
