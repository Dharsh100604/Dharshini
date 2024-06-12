import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="max-width">
                <h1 className="title">My skills</h1>
                <div className="skills-content">
                    <div className="column left">
                        <div className="text">My creative skills and experiences</div>
                        <p>My journey as a web developer began during my academic years, where I quickly discovered my 
                            fascination with coding and design. Collaboration is at the heart of my work. I enjoy being 
                            part of dynamic teams where creativity and innovation thrive. Continuous learning is a 
                            vital aspect of my career. I'm always eager to stay updated with the latest technologies and 
                            industry trends to ensure that my work remains at the forefront of web development.</p>
                    </div>
                    <div className="column right">
                        <SkillBar name="HTML" value={80} />
                        <SkillBar name="CSS" value={70} />
                        <SkillBar name="JavaScript" value={50} />
                        <SkillBar name="Figma" value={60} />
                        <SkillBar name="MySQL" value={70} />
                    </div>
                </div>
            </div>
        </section>
    );
}

const SkillBar = ({ name, value }) => {
    return (
        <div className="bars">
            <div className="info">
                <span>{name}</span>
                <span>{value}%</span>
            </div>
            <div className={`line ${name.toLowerCase()}`}></div>
        </div>
    );
}

export default Skills;
