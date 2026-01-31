import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaSearch, FaUniversity, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
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
        phone: '',
        uniType: 'public',
        filiere: '',
        currentLevel: '',
        startYear: '2026',
        message: '',
        consent: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = t('contact.form.error_required');
        }

        if (!formData.email.trim()) {
            newErrors.email = t('contact.form.error_required');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t('contact.form.error_email');
        }

        if (!formData.phone) {
            newErrors.phone = t('contact.form.error_required');
        }

        if (!formData.filiere) {
            newErrors.filiere = t('contact.form.error_required');
        }

        if (!formData.consent) {
            newErrors.consent = t('contact.form.error_consent');
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        const templateParams = {
            to_name: "Admin",
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            uni_type: formData.uniType === 'public' ? t('contact.form.public') : t('contact.form.private'),
            filiere: formData.filiere,
            current_level: formData.currentLevel ? t(`contact.form.levels.${formData.currentLevel}`) : 'Non spécifié',
            start_year: formData.startYear,
            message: formData.message
        };

        // IMPORTANT: Replace these with your actual IDs
        // Service ID, Template ID, Public Key
        emailjs.send(
            'service_pa0i70s',     // Service ID
            'template_f6lk5iz',    // Template ID
            templateParams,
            'U8rGxZ9ORmL-_iXO5'    // Public Key
        )
            .then((result) => {
                console.log('Email sent:', result.text);
                setIsSubmitting(false);
                setIsSuccess(true);
            }, (error) => {
                console.log('Email error:', error.text);
                setIsSubmitting(false);
                alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
            });
    };

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            uniType: 'public',
            filiere: '',
            currentLevel: '',
            startYear: '2026',
            message: '',
            consent: false
        });
        setIsSuccess(false);
        setErrors({});
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
                        <button className="btn btn-primary" onClick={resetForm}>
                            {t('contact.form.new_request')}
                        </button>
                    </motion.div>
                </div>
            </section>
        );
    }

    // Levels Keys
    const levelKeys = ['lycee', 'bac', 'licence_cours', 'licence_ok', 'master_cours', 'master_ok'];

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
                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-grid">
                            {/* Left Column */}
                            <div className="form-col">
                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.name')}*</span>
                                    <div className={`input-wrapper ${errors.name ? 'error' : ''}`}>
                                        <FaUser className="input-icon" />
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={t('contact.form.name')}
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    {errors.name && <span className="error-text">{errors.name}</span>}
                                </div>

                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.email')}*</span>
                                    <div className={`input-wrapper ${errors.email ? 'error' : ''}`}>
                                        <FaEnvelope className="input-icon" />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="votre.email@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ textAlign: 'left', direction: 'ltr' }}
                                        />
                                    </div>
                                    {errors.email && <span className="error-text">{errors.email}</span>}
                                </div>

                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.phone')}*</span>
                                    <div className={`phone-input-wrapper ${errors.phone ? 'error' : ''}`} style={{ direction: 'ltr' }}>
                                        <PhoneInput
                                            placeholder={t('contact.form.phone')}
                                            value={formData.phone}
                                            onChange={(value) => {
                                                setFormData({ ...formData, phone: value });
                                                if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                                            }}
                                            defaultCountry="TR"
                                            international
                                        />
                                    </div>
                                    {errors.phone && <span className="error-text">{errors.phone}</span>}
                                </div>

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
                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.program')}*</span>
                                    <select
                                        name="filiere"
                                        value={formData.filiere}
                                        onChange={handleChange}
                                        className={errors.filiere ? 'error' : ''}
                                    >
                                        <option value="">{t('contact.form.program_placeholder')}</option>
                                        {filieresList.map(f => (
                                            <option key={f} value={f}>{f}</option>
                                        ))}
                                    </select>
                                    {errors.filiere && <span className="error-text">{errors.filiere}</span>}
                                </div>

                                <div className="row-group">
                                    <div className="form-group half">
                                        <span className="label-text">{t('contact.form.level')}</span>
                                        <select name="currentLevel" value={formData.currentLevel} onChange={handleChange}>
                                            <option value="">-</option>
                                            {levelKeys.map((key) => (
                                                <option key={key} value={key}>{t(`contact.form.levels.${key}`)}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group half">
                                        <span className="label-text">{t('contact.form.year')}</span>
                                        <select name="startYear" value={formData.startYear} onChange={handleChange}>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="label-text">{t('contact.form.message')}</span>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        placeholder={t('contact.form.message_placeholder')}
                                        value={formData.message}
                                        onChange={handleChange}
                                        maxLength={500}
                                    ></textarea>
                                    <div className="char-count">{formData.message.length}/500</div>
                                </div>
                            </div>
                        </div>

                        <div className="form-footer">
                            <label className={`checkbox-container ${errors.consent ? 'error' : ''}`}>
                                <input
                                    type="checkbox"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                />
                                <span className="checkmark"></span>
                                <span className="checkbox-text">{t('contact.form.consent')}</span>
                            </label>
                            {errors.consent && <span className="error-text consent-error">{errors.consent}</span>}

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
