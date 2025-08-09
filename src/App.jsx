import { useState } from 'react'
import './App.css'
import Particles from './components/background';
import TextPressure from './components/textanimation';
import Dock from './components/Dock';
import { FaHome, FaGhost, FaClipboardList  } from 'react-icons/fa';
import { FaFolder } from "react-icons/fa6";
import GlitchText from './components/GlitchText';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';


// const [activePopup, setActivePopup] = useState(null); // 'about' | 'projects' | 'skills' | null

// const items = [
//   { icon: <FaHome size={25} />, label: 'Home', onClick: () => setActivePopup(null) },
//   { icon: <FaFolder  size={20} />, label: 'Projects', onClick: () => setActivePopup('projects') },
//   { icon: <FaClipboardList size={20} />, label: 'Skills', onClick: () => setActivePopup('skills') },
//   { icon: <FaGhost  size={20} />, label: 'About Me', onClick: () => setActivePopup('about') },
// ];


function App() {
  // const [count, setCount] = useState(0)/
  const [activePopup, setActivePopup] = useState(null); // 'about' | 'projects' | 'skills' | null


  const items = [
    { icon: <FaHome size={25} />, label: 'Home', onClick: () => setActivePopup(null) },
    { icon: <FaFolder  size={20} />, label: 'Projects', onClick: () => setActivePopup('projects') },
    { icon: <FaClipboardList size={20} />, label: 'Skills', onClick: () => setActivePopup('skills') },
    { icon: <FaGhost  size={20} />, label: 'About Me', onClick: () => setActivePopup('about') },
  ];

  return (
    <>
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        <Particles
          particleColors={['#EE4B2B', '#EE4B2B']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="introtext">
          <div className='name' style={{ fontSize: 'clamp(3rem, 15vw, 10rem)' }}>
            <TextPressure
              text="Rewant Upase"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={{ fontSize: 'clamp(4rem, 20vw, 15rem)'}}
            />
          </div>
          {/* <p>AI/ML | Web Developer | Software Developer</p> */}
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={true}
            className='custom-class'
          >
            AI/ML | Web Developer | Software Developer
          </GlitchText>
        </div>
      </div>
      {activePopup && (
        <div className="popup-container">
          {activePopup === 'about' && <AboutMe onClose={() => setActivePopup(null)} />}
          {activePopup === 'projects' && <Projects onClose={() => setActivePopup(null)} />}
          {activePopup === 'skills' && <Skills onClose={() => setActivePopup(null)} />}
        </div>
      )}

      <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={80}
          magnification={100}
      />
    </>
  )
}

export default App
