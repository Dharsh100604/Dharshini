import React from 'react';
import AboutImage from '../../images/aboutme.jpg';
import resume from './Resume.pdf';
import { Section, MaxWidth, Title, AboutContent, LeftColumn, RightColumn } from './AboutSection.css.js';

const AboutSection = () => {
    return (
        <Section id="about">
            <MaxWidth>
                <Title>About Me<br></br></Title>
                <AboutContent>
                    <LeftColumn>
                   <img style={{ backgroundImage: `url(${AboutImage})` }}/>
                    </LeftColumn>
                    <RightColumn>
                        <div className="text">I'm <span>Dharshini</span></div>
                        <p>Seeking an opportunity to work in a challenging environment to prove my skills 
                            and utilize my knowledge. A passionate and skilled web developer and coder 
                            with a deep love for building websites and web applications. 
                            With a background in Computer Science and Engineering, I thrive on 
                            transforming creative ideas into digital realities.</p>
                        <a href={resume} download="Resume" className='resBtn'><div className='download'>Download CV</div></a> 
                    </RightColumn>
                </AboutContent>
            </MaxWidth>
        </Section>
    );
}

export default AboutSection;
