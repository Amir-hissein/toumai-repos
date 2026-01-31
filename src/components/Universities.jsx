import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Universities.css';

// All partner universities with their images
const universities = [
    { id: 1, name: "Istanbul University", image: "/testimonials/universite2.jpeg" },
    { id: 2, name: "Ankara University", image: "/testimonials/universite3.jpeg" },
    { id: 3, name: "Koç University", image: "/testimonials/universite4.jpeg" },
    { id: 4, name: "Sabancı University", image: "/testimonials/universite5.jpeg" },
    { id: 5, name: "Bilkent University", image: "/testimonials/universite6.jpeg" },
];

const Universities = () => {
    const { t } = useTranslation();

    // Duplicate universities for infinite scroll effect
    const duplicatedUnis = [...universities, ...universities];

    return (
        <section id="universities" className="section uni-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">{t('universities.title_highlight')}</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="uni-carousel-wrapper">
                    <div className="uni-carousel">
                        {duplicatedUnis.map((uni, index) => (
                            <div
                                key={`${uni.id}-${index}`}
                                className="uni-logo-card"
                            >
                                <img
                                    src={uni.image}
                                    alt={uni.name}
                                    className="uni-logo-img"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Universities;
