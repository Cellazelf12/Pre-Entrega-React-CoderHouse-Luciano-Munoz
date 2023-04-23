import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

function Contact() {
  return (
    <div className="contacto-container">
      <div className="contacto-header">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta o comentario? ¡Contáctanos!</p>
      </div>
      <div className="contacto-info">
        <div className="contacto-item">
          <FontAwesomeIcon icon={faPhoneAlt} className="contacto-icon" />
          <p>+1 (555) 555-5555</p>
        </div>
        <div className="contacto-item">
          <FontAwesomeIcon icon={faEnvelope} className="contacto-icon" />
          <p>info@ecommerce.com</p>
        </div>
        <div className="contacto-item">
          <FontAwesomeIcon icon={faTwitter} className="contacto-icon contacto-icon-social" />
          <FontAwesomeIcon icon={faFacebook} className="contacto-icon contacto-icon-social" />
          <FontAwesomeIcon icon={faInstagram} className="contacto-icon contacto-icon-social" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
