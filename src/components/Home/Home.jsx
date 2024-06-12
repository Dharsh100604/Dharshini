import React from 'react';
import './Home.css'; 
import homeImage from '../../images/home.png';
import { useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [text] = useTypewriter({
        words: ['Developer', 'Designer',],
        loop: true,
    });
    return (
        <section className="home" id="home">
            <div className="max-width" style={{ backgroundImage: `url(${homeImage})` }}>
                <div className="home-content">
                    <div className="text-1">Hello, my name is</div>
                    <div className="text-2">Dharshini</div>
                    <div className="text-3">And I'm a <span>{text}</span></div>
                </div>
            </div>
        </section>
    );
}

export default Home;
