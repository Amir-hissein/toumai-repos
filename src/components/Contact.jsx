import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaSearch, FaUniversity, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { filieresData } from '../data/filieres';
import '../styles/Contact.css';

const Contact = () => {
    const { t, i18n } = useTranslation();
    const [filieresList, setFilieresList] = useState(filieresData.fr);

    useEffect(() => {
        const lang = i18n.language;
        if (filieresData[lang]) {
            setFilieresList(filieresData[lang].sort());
        } else {
            setFilieresList(filieresData.fr.sort());
        }
    }, [i18n.language]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneCode: '+90',
        phone: '',
        uniType: 'public',
        filiere: '',
        currentLevel: '',
        startYear: '2026',
        message: '',
        consent: false
    });

    const [searchTerm, setSearchTerm] = useState('');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const filteredFilieres = filieresList.filter(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFiliereSelect = (filiere) => {
        setFormData(prev => ({ ...prev, filiere }));
        setSearchTerm(filiere);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <section id="contact" className="section contact-section">
                <div className="container success-container">
                    <motion.div
                        className="success-card"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <FaCheckCircle className="success-icon" />
                        <h2>{t('contact.form.success_title')}</h2>
                        <p>{t('contact.form.success_desc', { name: formData.name })}</p>
                        <button className="btn btn-primary" onClick={() => setIsSuccess(false)}>{t('contact.form.submit')}</button>
                    </motion.div>
                </div>
            </section>
        );
    }

    // Levels Dictionary
    const levels = {
        lycee: { fr: "Lycée (Terminale)", en: "High School (Final Year)", ar: "الثانوية العامة" },
        bac: { fr: "Baccalauréat obtenu", en: "High School Graduate", ar: "حاصل على البكالوريا" },
        licence_cours: { fr: "Licence en cours", en: "Bachelor In Progress", ar: "بكالوريوس قيد الدراسة" },
        licence_ok: { fr: "Licence obtenue", en: "Bachelor Degree", ar: "حاصل على البكالوريوس" },
        master_cours: { fr: "Master en cours", en: "Master In Progress", ar: "ماجستير قيد الدراسة" },
        master_ok: { fr: "Master obtenu", en: "Master Degree", ar: "حاصل على الماجستير" }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="contact" className="section contact-section">
            <motion.div
                className="container"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <div className="section-header text-center">
                    <motion.span variants={itemVariants} className="section-subtitle">{t('contact.subtitle')}</motion.span>
                    <motion.h2 variants={itemVariants} className="section-title">{t('contact.title_start')} <span className="gradient-text">{t('contact.title_end')}</span></motion.h2>
                    <motion.p variants={itemVariants} className="section-desc">{t('contact.desc')}</motion.p>
                    <motion.div variants={itemVariants} className="title-underline"></motion.div>
                </div>

                <motion.div
                    className="contact-form-wrapper"
                    variants={itemVariants}
                >
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-grid">
                            {/* Left Column */}
                            <div className="form-col">
                                <label className="form-group">
                                    <span className="label-text">{t('contact.form.name')}*</span>
                                    <div className="input-wrapper">
                                        <FaUser className="input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t('contact.form.name')}
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </label>

                                <label className="form-group">
                                    <span className="label-text">{t('contact.form.email')}*</span>
                                    <div className="input-wrapper">
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="votre.email@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left', direction: 'ltr' }}
                                        />
                                    </div>
                                </label>

                                <label className="form-group">
                                    <span className="label-text">{t('contact.form.phone')}*</span>
                                    <div className="phone-input-wrapper" style={{ direction: 'ltr' }}>
                                        <PhoneInput
                                            placeholder={t('contact.form.phone')}
                                            value={formData.phone}
                                            onChange={(value) => setFormData({ ...formData, phone: value })}
                                            defaultCountry="TR"
                                            international
                                        />
                                    </div>
                                </label>

                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.uni_type')}*</span>
                                    <div className="radio-group-cards">
                                        <label className={`radio-card ${formData.uniType === 'public' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="uniType"
                                                value="public"
                                                checked={formData.uniType === 'public'}
                                                onChange={handleChange}
                                            />
                                            <FaUniversity /> {t('contact.form.public')}
                                        </label>
                                        <label className={`radio-card ${formData.uniType === 'private' ? 'active' : ''}`}>
                                            <input
                                                type="radio"
                                                name="uniType"
                                                value="private"
                                                checked={formData.uniType === 'private'}
                                                onChange={handleChange}
                                            />
                                            <FaUniversity /> {t('contact.form.private')}
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="form-col">
                                <label className="form-group">
                                    <span className="label-text">{t('contact.form.program')}*</span>
                                    <div className="input-wrapper search-wrapper">
                                        <FaSearch className="input-icon" />
                                        <input
                                            type="text"
                                            placeholder={t('contact.form.program_placeholder')}
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            onBlur={() => {
                                                setTimeout(() => {
                                                    if (!filieresList.includes(searchTerm)) {
                                                    }
                                                }, 200);
                                            }}
                                        />
                                        {searchTerm && !filieresList.includes(searchTerm) && (
                                            <ul className="filiere-dropdown">
                                                {filteredFilieres.slice(0, 5).map((f, i) => (
                                                    <li key={i} onMouseDown={() => handleFiliereSelect(f)}>{f}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <select
                                        name="filiere"
                                        value={formData.filiere}
                                        onChange={handleChange}
                                        className="mt-2"
                                        style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                                        required
                                    >
                                        <option value="">{t('contact.form.program_placeholder')}</option>
                                        {filieresList.map(f => (
                                            <option key={f} value={f}>{f}</option>
                                        ))}
                                    </select>
                                </label>

                                <div className="row-group">
                                    <label className="form-group half">
                                        <span className="label-text">{t('contact.form.level')}</span>
                                        <select name="currentLevel" value={formData.currentLevel} onChange={handleChange}>
                                            <option value="">-</option>
                                            {Object.entries(levels).map(([key, val]) => (
                                                <option key={key} value={key}>{val[i18n.language] || val.fr}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <label className="form-group half">
                                        <span className="label-text">{t('contact.form.year')}</span>
                                        <select name="startYear" value={formData.startYear} onChange={handleChange}>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="form-group">
                                    <span className="label-text">{t('contact.form.message')}</span>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder="..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        maxLength={500}
                                    ></textarea>
                                    <div className="char-count">{formData.message.length}/500</div>
                                </label>
                            </div>
                        </div>

                        <div className="form-footer">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-text">{t('contact.form.consent')}</span>
                            </label>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? <span className="loader"></span> : <>{t('contact.form.submit')} <FaPaperPlane style={{ marginLeft: i18n.dir() === 'rtl' ? 0 : '0.5rem', marginRight: i18n.dir() === 'rtl' ? '0.5rem' : 0 }} /></>}
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
