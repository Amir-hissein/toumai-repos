import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "905399115960"; // Numéro WhatsApp TOUMAİ
    const message = "Bonjour, je souhaite avoir plus d'informations sur vos services.";

    const handleClick = () => {
        // Track WhatsApp click
        import("react-ga4").then(module => {
            const ReactGA = module.default;
            ReactGA.event({
                category: "Contact",
                action: "Click WhatsApp",
                label: "Floating Button"
            });
        });

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="whatsapp-float" onClick={handleClick}>
            <div className="whatsapp-icon-wrapper">
                <FaWhatsapp className="whatsapp-icon" />
                <span className="online-indicator"></span>
            </div>
            <span className="whatsapp-tooltip">Chat with us</span>
        </div>
    );
};

export default WhatsAppButton;
