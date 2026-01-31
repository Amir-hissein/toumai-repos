import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../styles/WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = "905399115960"; // Numéro WhatsApp TOUMAİ
    const message = "Bonjour, je souhaite avoir plus d'informations sur vos services.";

    const handleClick = () => {
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
