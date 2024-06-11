import React from 'react';
import './Projects.css'; 
import lungcancer from '../../images/lungcancer.jpg';
import ecommerce from '../../images/E-Commerce.png';
import port from '../../images/well_known_port.png';


const Projects = () => {
  return (
    <section className="projects" id="projects">
        <div className='pro-center'>
                <h1 className='pro-title'>My Projects</h1>
            </div>
      <div className="max-width">
        <div className="projects-container">
          <div className="project-container project-card">
            <img src={ecommerce} alt="E-Commerce Website" className="project-pic"
            />
            <h3 className="project-title">Stationery Shop Website</h3>
            <p className="project-details">
              It provides detailed product information for confident purchasing decisions.
              Enable customer accounts and order tracking features to allow customers
              to easily manage their purchases, track shipments, and view order history.
            </p>
            <a href="https://github.com/Dharsh100604/Cube_Traders" target="_blank" className="project-link">Check it Out</a>
          </div>
          <div className="project-container project-card">
            <img src={lungcancer} alt="lungcancer"
              className="project-pic"
            />
            <h3 className="project-title">Lung Cancer Prediction</h3>
            <p className="project-details">
              I have developed a predictive model using the Random forest algorithm,
              with a focus on feature engineering to improve accuracy that ensure high performance. 
              Saving the trained model using pickle for easy deployment and future use.
            </p>
            <a href="https://github.com/Dharsh100604/Lung_cancer_RandomForest.git" target="_blank" className="project-link">Check it Out</a>
          </div>
          <div className="project-container project-card">
            <img
              src={port}
              alt="greeny-earth"
              className="project-pic"
            />
            <h3 className="project-title">Well-known Port Info</h3>
            <p className="project-details">
            A well-known port is a network port number that is reserved for specific
            services.It focus on identifying well-known port numbers and their associated services.
            Ports with numbers 0 to 1023 are called system or well-known ports.
            </p>
            <a href="https://github.com/Dharsh100604/Computer_Network" target="_blank" className="project-link">Check it Out</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
