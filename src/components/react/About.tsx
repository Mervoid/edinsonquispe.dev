// src/components/react/About.tsx
import React from 'react';

interface AboutProps {
  title?: string;
  description: string;
}

const About: React.FC<AboutProps> = ({ 
  title = "Sobre Mí", 
  description 
}) => {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default About;