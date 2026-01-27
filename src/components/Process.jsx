import React from 'react';
import { FaCommentDots, FaBullseye, FaFileAlt, FaPaperPlane, FaCheckCircle, FaPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/Process.css';

const Process = () => {
    const { t } = useTranslation();

    const steps = [
        { icon: <FaCommentDots />, key: '1' },
        { icon: <FaBullseye />, key: '2' },
        { icon: <FaFileAlt />, key: '3' },
        { icon: <FaCheckCircle />, key: '4' },
        { icon: <FaPlane />, key: '5' }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section id="process" className="section process-section">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="section-header text-center">
                    <motion.span variants={itemVariants} className="section-subtitle">{t('process.subtitle')}</motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">{t('process.title')} <span className="gradient-text">{t('process.title_highlight')}</span></motion.h2>
                    <motion.div variants={itemVariants} className="title-underline"></motion.div>
                </div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    <div className="timeline-items">
                        {steps.map((step, i) => (
                            <motion.div
                                className="timeline-item"
                                key={i}
                                variants={itemVariants}
                            >
                                <div className="timeline-marker">
                                    <div className="timeline-icon">{step.icon}</div>
                                    <div className="step-number">{i + 1}</div>
                                </div>
                                <div className="timeline-content">
                                    <h3>{t(`process.steps.${step.key}.title`)}</h3>
                                    <p>{t(`process.steps.${step.key}.desc`)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
export default Process;
