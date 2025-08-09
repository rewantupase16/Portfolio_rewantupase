import React from 'react';
import logo from '../Assest/temp_logo.png' ;
import linkedin from '../Assest/linkedin.png' ;
import instagram from '../Assest/instagram.png' ;
import x from '../Assest/twitter.png' ;
import './AboutMe.css' ; 

// const AboutMe = () => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-2">About Me</h2>
//       <p>I’m Rewant Upase, a passionate developer from IIT Kharagpur...</p>
//     </div>
//   );
// };

function AboutMe({ onClose }) {
  return (
    <div className="popup-content">
      <button onClick={onClose} className="close-btn">X</button>
      <h1>ABOUT ME</h1>
      <p className='line'>------------------------------</p>
      <div className="basic_info">
        <img src={logo} alt="" className="info_img" />
        <div className="info_about_me">
          <div className="name">Rewant Upase</div>
          <div className="skill_description">AI/ML | WEB DEVELOPER | SOFTWARE DEVELOPER</div>
          <div className="institute">Currently Studying In IIT KGP</div>
          <div className="mail">rewantupase@gmail.com</div>
        </div>
      </div>
      <a href="https://www.linkedin.com/in/rewant-upase-9b77aa327/" className="linkedin" target='_blank'>
        <img  src={linkedin} alt="" className="info_img" />
        <h2>Rewant Upase</h2>
      </a>
      <a href="https://www.instagram.com/rewantupase/" className="instagram" target='_blank'>
        <img  src={instagram} alt="" className="info_img" />
        <h2>rewantupase</h2>
      </a>
      <a href="https://x.com/rewantupase" className="x" target='_blank'>
        <img className="info_img" src={x} alt="" />
        <h2 >rewantupase</h2>
      </a>
    </div>
  );
}




export default AboutMe;
