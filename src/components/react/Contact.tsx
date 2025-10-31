// src/components/react/Contact.tsx
import React, { useState } from 'react';

interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  phone?: string;
  location?: string;
}

interface ContactProps {
  title?: string;
  contactInfo?: ContactInfo;
}

const Contact: React.FC<ContactProps> = ({
  title = "Contacto",
  contactInfo = {
    email: "edinson@example.com",
    github: "https://github.com/Mervoid",
    linkedin: "https://linkedin.com/in/edinson-quispe",
    phone: "+51 XXX XXX XXX",
    location: "Lima, Perú"
  }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer id="contacto" className="section bg-dark">
      <div className="container">
        <h2 className="text-white">{title}</h2>
        
        <div className="contact-content">
          {/* Información de contacto */}
          <div className="contact-info">
            <h3 className="text-white">¡Hablemos!</h3>
            <p className="text-light">¿Tienes un proyecto en mente? No dudes en contactarme.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <strong className="text-white">Email:</strong>
                <a href={`mailto:${contactInfo.email}`} className="text-light">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="contact-item">
                <strong className="text-white">GitHub:</strong>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-light">
                  {contactInfo.github.split('//')[1]}
                </a>
              </div>
              
              {contactInfo.linkedin && (
                <div className="contact-item">
                  <strong className="text-white">LinkedIn:</strong>
                  <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-light">
                    LinkedIn Profile
                  </a>
                </div>
              )}
              
              {contactInfo.phone && (
                <div className="contact-item">
                  <strong className="text-white">Teléfono:</strong>
                  <span className="text-light">{contactInfo.phone}</span>
                </div>
              )}
              
              {contactInfo.location && (
                <div className="contact-item">
                  <strong className="text-white">Ubicación:</strong>
                  <span className="text-light">{contactInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          {/* Formulario de contacto */}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="text-white">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="text-white">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;