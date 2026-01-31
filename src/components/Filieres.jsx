import React from 'react';
import { FaLaptopCode, FaHeartbeat, FaBriefcase, FaGlobeAmericas, FaPalette, FaFlask, FaAngleRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/Filieres.css';

const Filieres = () => {
    const { t, i18n } = useTranslation();

    const categories = [
        {
            key: "engineering",
            icon: <FaLaptopCode />,
            color: "blue",
            items: {
                fr: ["Génie Informatique", "Génie Civil", "Génie Électrique", "Génie Mécanique", "Génie Industriel"],
                en: ["Computer Engineering", "Civil Engineering", "Electrical Engineering", "Mechanical Engineering", "Industrial Engineering"],
                ar: ["هندسة الكمبيوتر", "هندسة مدنية", "هندسة كهربائية", "هندسة ميكانيكية", "هندسة صناعية"]
            }
        },
        {
            key: "health",
            icon: <FaHeartbeat />,
            color: "red",
            items: {
                fr: ["Médecine", "Médecine Dentaire", "Pharmacie", "Sciences Infirmières", "Physiothérapie"],
                en: ["Medicine", "Dentistry", "Pharmacy", "Nursing", "Physiotherapy"],
                ar: ["الطب البشري", "طب الأسنان", "الصيدلة", "التمريض", "العلاج الطبيعي"]
            }
        },
        {
            key: "business",
            icon: <FaBriefcase />,
            color: "orange",
            items: {
                fr: ["Administration des Affaires", "Économie", "Marketing", "Commerce International", "Gestion Hôtelière"],
                en: ["Business Administration", "Economics", "Marketing", "International Trade", "Hotel Management"],
                ar: ["إدارة الأعمال", "الاقتصاد", "التسويق", "التجارة الدولية", "إدارة الفنادق"]
            }
        },
        {
            key: "social",
            icon: <FaGlobeAmericas />,
            color: "purple",
            items: {
                fr: ["Droit", "Relations Internationales", "Psychologie", "Sciences Politiques", "Sociologie"],
                en: ["Law", "International Relations", "Psychology", "Political Science", "Sociology"],
                ar: ["الحقوق", "العلاقات الدولية", "علم النفس", "العلوم السياسية", "علم الاجتماع"]
            }
        },
        {
            key: "arts",
            icon: <FaPalette />,
            color: "pink",
            items: {
                fr: ["Architecture", "Design Graphique", "Cinéma & Télévision", "Arts Plastiques", "Design Industriel"],
                en: ["Architecture", "Graphic Design", "Cinema & TV", "Plastic Arts", "Industrial Design"],
                ar: ["العمارة", "التصميم الجرافيكي", "السينما والتلفزيون", "الفنون التشكيلية", "التصميم الصناعي"]
            }
        },
        {
            key: "science",
            icon: <FaFlask />,
            color: "green",
            items: {
                fr: ["Biologie", "Chimie", "Physique", "Mathématiques", "Biotechnologie"],
                en: ["Biology", "Chemistry", "Physics", "Mathematics", "Biotechnology"],
                ar: ["الأحياء", "الكيمياء", "الفيزياء", "الرياضيات", "التكنولوجيا الحيوية"]
            }
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    const [showAll, setShowAll] = React.useState(false);

    // Show only first 3 items on mobile/desktop initially, or all if showAll is true
    const visibleCategories = showAll ? categories : categories.slice(0, 3);

    return (
        <section id="filieres" className="section filieres-section">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="section-header text-center">
                    <motion.span variants={itemVariants} className="section-subtitle">{t('programs.subtitle')}</motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">{t('programs.title')} <span className="gradient-text">{t('programs.title_highlight')}</span></motion.h2>
                    <motion.div variants={itemVariants} className="title-underline"></motion.div>
                </div>

                <div className="filieres-grid">
                    {visibleCategories.map((cat, idx) => (
                        <motion.div
                            className={`filiere-card color-${cat.color}`}
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            <div className="filiere-header">
                                <span className="filiere-icon-bg"></span>
                                <div className="filiere-icon">{cat.icon}</div>
                                <h3 className="filiere-title">{t(`programs.categories.${cat.key}`)}</h3>
                            </div>
                            <ul className="filiere-list">
                                {(cat.items[i18n.language] || cat.items.fr).map((item, i) => (
                                    <li key={i}>
                                        <FaAngleRight className="list-icon" style={{ transform: i18n.dir() === 'rtl' ? 'rotate(180deg)' : 'none' }} /> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="card-overlay"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="center-btn" style={{ marginTop: '3rem' }}>
                    <motion.button
                        variants={itemVariants}
                        className="btn btn-primary pulse-btn"
                        onClick={() => {
                            if (showAll) {
                                setShowAll(false);
                                // Scroll back to top of section when closing
                                const section = document.getElementById('filieres');
                                if (section) {
                                    const headerOffset = 100;
                                    const elementPosition = section.getBoundingClientRect().top;
                                    const offsetPosition = elementPosition + window.scrollY - headerOffset;
                                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                                }
                            } else {
                                setShowAll(true);
                            }
                        }}
                    >
                        {showAll ? (i18n.language === 'fr' ? 'Voir moins' : i18n.language === 'ar' ? 'عرض أقل' : 'Show Less') : t('programs.view_all')}
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default Filieres;

