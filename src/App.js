import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AboutSection from './components/AboutSection/AboutSection';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <AboutSection/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;

