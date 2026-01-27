import React, { useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/Testimonials.css';

const Testimonials = () => {
    const { t, i18n } = useTranslation();
    const [activeIndex, setActiveIndex] = useState(0);

    const testimonialsData = {
        fr: [
            {
                id: 1,
                name: "Ahmed Benali",
                country: "Maroc",
                uni: "Koç University",
                major: "Génie Informatique",
                text: "Grâce à MG SERVİS, j'ai été admis à Koç University. L'équipe a géré toutes mes démarches administratives.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                id: 2,
                name: "Fatima Zahra",
                country: "Algérie",
                uni: "Istanbul University",
                major: "Médecine",
                text: "Un service exceptionnel. Ils m'ont aidé à trouver le meilleur programme de médecine. Je recommande !",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
                id: 3,
                name: "Moussa Diop",
                country: "Sénégal",
                uni: "Bilkent University",
                major: "Administration des Affaires",
                text: "Venir du Sénégal était un grand pas, mais MG SERVİS a rendu la transition si facile.",
                image: "/testimonials/moussa.png"
            },
            {
                id: 4,
                name: "Aminata Diallo",
                country: "Mali",
                uni: "Istanbul Aydın University",
                major: "Relations Internationales",
                text: "MG SERVİS a été incroyable. Ils m'ont soutenu de Bamako jusqu'à Istanbul. Je me sens chez moi ici.",
                image: "/testimonials/aminata.png"
            },
            {
                id: 5,
                name: "Samuel Okafor",
                country: "Nigeria",
                uni: "Medipol University",
                major: "Pharmacie",
                text: "Équipe très professionnelle ! Ils m'ont aidé à obtenir mon visa et mon logement très rapidement.",
                image: "/testimonials/samuel.png"
            },
            {
                id: 6,
                name: "Grace Tchipamba",
                country: "Congo (RDC)",
                uni: "Bahçeşehir University",
                major: "Architecture",
                text: "J'étais perdue avec toute la paperasse, mais ils ont tout rendu clair. Étudier à Istanbul est un rêve devenu réalité.",
                image: "/testimonials/grace.png"
            }
        ],
        en: [
            {
                id: 1,
                name: "Ahmed Benali",
                country: "Morocco",
                uni: "Koç University",
                major: "Computer Engineering",
                text: "Thanks to MG SERVİS, I was admitted to Koç University. The team managed all my administrative procedures.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                id: 2,
                name: "Fatima Zahra",
                country: "Algeria",
                uni: "Istanbul University",
                major: "Medicine",
                text: "Exceptional service. They helped me find the best medicine program. I highly recommend!",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
                id: 3,
                name: "Moussa Diop",
                country: "Senegal",
                uni: "Bilkent University",
                major: "Business Administration",
                text: "Coming from Senegal was a big step, but MG SERVİS made the transition so easy.",
                image: "/testimonials/moussa.png"
            },
            {
                id: 4,
                name: "Aminata Diallo",
                country: "Mali",
                uni: "Istanbul Aydın University",
                major: "International Relations",
                text: "MG SERVİS was incredible. They supported me from Bamako to Istanbul. I feel at home here.",
                image: "/testimonials/aminata.png"
            },
            {
                id: 5,
                name: "Samuel Okafor",
                country: "Nigeria",
                uni: "Medipol University",
                major: "Pharmacy",
                text: "Very professional team! They helped me get my visa and dormitory very quickly.",
                image: "/testimonials/samuel.png"
            },
            {
                id: 6,
                name: "Grace Tchipamba",
                country: "Congo (DRC)",
                uni: "Bahçeşehir University",
                major: "Architecture",
                text: "I was lost with all the paperwork, but they made everything clear. Studying in Istanbul is a dream come true.",
                image: "/testimonials/grace.png"
            }
        ],
        ar: [
            {
                id: 1,
                name: "أحمد بن علي",
                country: "المغرب",
                uni: "جامعة كوتش",
                major: "هندسة الكمبيوتر",
                text: "بفضل MG SERVİS، تم قبولي في جامعة كوتش. أدار الفريق جميع إجراءاتي الإدارية باحترافية.",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
                id: 2,
                name: "فاطمة الزهراء",
                country: "الجزائر",
                uni: "جامعة اسطنبول",
                major: "الطب",
                text: "خدمة استثنائية. ساعدوني في العثور على أفضل برنامج طبي. أوصي بهم بشدة!",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
                id: 3,
                name: "موسى ديوب",
                country: "السنغال",
                uni: "جامعة بيلكنت",
                major: "إدارة الأعمال",
                text: "القدوم من السنغال كان خطوة كبيرة، لكن MG SERVİS جعلت الانتقال سهلاً للغاية.",
                image: "/testimonials/moussa.png"
            },
            {
                id: 4,
                name: "أميناتا ديالو",
                country: "مالي",
                uni: "جامعة اسطنبول أيدين",
                major: "العلاقات الدولية",
                text: "كانت MG SERVİS رائعة. دعموني من باماكو إلى اسطنبول. أشعر وكأنني في منزلي هنا.",
                image: "/testimonials/aminata.png"
            },
            {
                id: 5,
                name: "صموئيل أوكافور",
                country: "نيجيريا",
                uni: "جامعة ميديبول",
                major: "صيدلة",
                text: "فريق محترف للغاية! ساعدوني في الحصول على التأشيرة والسكن بسرعة كبيرة.",
                image: "/testimonials/samuel.png"
            },
            {
                id: 6,
                name: "غريس تشيبامبا",
                country: "الكونغو (RDC)",
                uni: "جامعة بهجيشهير",
                major: "هندسة معمارية",
                text: "كنت تائهة مع كل الأوراق، لكنهم أوضحوا كل شيء. الدراسة في اسطنبول حلم تحقق.",
                image: "/testimonials/grace.png"
            }
        ]
    };

    // Use selected language list or fallback to French
    const currentTestimonials = testimonialsData[i18n.language] || testimonialsData.fr;

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % currentTestimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length);
    };

    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <div className="section-header text-center">
                    <span className="section-subtitle">{t('testimonials.subtitle')}</span>
                    <h2 className="section-title">{t('testimonials.title')} <span className="gradient-text">{t('testimonials.title_highlight')}</span></h2>
                    <div className="title-underline"></div>
                </div>

                <div className="testimonials-carousel" style={{ direction: 'ltr' }}> {/* Keep Carousel LTR for consistent sliding */}
                    <button className="nav-btn prev" onClick={prevTestimonial}><FaChevronLeft /></button>

                    <div className="testimonial-card">
                        <div className="quote-icon"><FaQuoteLeft /></div>
                        <p className="testimonial-text">"{currentTestimonials[activeIndex].text}"</p>

                        <div className="testimonial-author">
                            <img src={currentTestimonials[activeIndex].image} alt={currentTestimonials[activeIndex].name} className="author-img" />
                            <div className="author-info">
                                <h4>{currentTestimonials[activeIndex].name}</h4>
                                <p>{currentTestimonials[activeIndex].country}</p>
                                <span className="author-uni">{currentTestimonials[activeIndex].uni} - {currentTestimonials[activeIndex].major}</span>
                            </div>
                        </div>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <FaStar key={i} />)}
                        </div>
                    </div>

                    <button className="nav-btn next" onClick={nextTestimonial}><FaChevronRight /></button>
                </div>

                <div className="carousel-dots">
                    {currentTestimonials.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Testimonials;
