// src/components/react/Skills.tsx
import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

interface SkillsProps {
  title?: string;
  skills?: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ 
  title = "Habilidades Técnicas",
  skills = [
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 88, category: 'frontend' },
    { name: 'Node.js', level: 82, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'database' },
    { name: 'PostgreSQL', level: 70, category: 'database' },
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Docker', level: 70, category: 'tools' },
  ]
}) => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend', 
    database: 'Base de Datos',
    tools: 'Herramientas'
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2>{title}</h2>
        
        {Object.entries(categories).map(([key, categoryName]) => {
          const categorySkills = getSkillsByCategory(key);
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={key} className="skills-category">
              <h3>{categoryName}</h3>
              <div className="skills-grid">
                {categorySkills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};


export default Skills;