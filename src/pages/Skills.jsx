import './Skills.css' ;
import react from '../Assest/react_logo.svg' ;
import cpp from '../Assest/cpp_logo.png' ;
import html from '../Assest/html_logo.png' ;
import css from '../Assest/css_logo.png' ;
import js from '../Assest/js_logo.png' ;
import python from '../Assest/python_logo.png' ;
import Skill_template from './Skill_template.jsx' ; 

function Skills({ onClose }) {
  return (
    <div className="popup-content">
      <button onClick={onClose} className="close-btn">X</button>
      <h1>SKILLS</h1>
      <p className='line'>---------------------</p>
      <div className="skill_container">
        < Skill_template 
        image={react}
        title="REACT"
        description="React, also known as React.js or ReactJS, is a free and open-source JavaScript library for building user interfaces (UIs) or UI components. It was developed by Facebook and is now maintained by Meta and a large open-source community."/>
        < Skill_template 
        image={cpp}
        title="C++"
        description="C++ is a powerful, general-purpose, and multi-paradigm programming language developed by Bjarne Stroustrup as an extension of the C language. It is often described as a middle-level language because it combines features of both high-level languages (like object-oriented programming, and low-level capabilities)" />
        < Skill_template 
        image={html}
        title='HTML'
        description="HTML, or HyperText Markup Language, is the standard language for creating web pages. It's a markup language, not a programming language, and it structures content on the web using a system of elements and attributes. These elements define how text, images, and other content are displayed in a web browser."/>
        < Skill_template 
        image={css}
        title="CSS"
        description="CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation and styling of a document written in a markup language, most commonly HTML. It is a fundamental technology of the World Wide Web, working in conjunction with HTML and JavaScript." />
        < Skill_template 
        image={js}
        title="JAVASCRIPT"
        description="JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled) programming language primarily used to add interactivity and dynamic behavior to web pages. It is considered one of the core technologies of the World Wide Web, alongside HTML (for structure) and CSS (for styling)." />
        < Skill_template 
        image={python}
        title="PYTHON"
        description="Python is a high-level, interpreted, general-purpose programming language known for its readability and ease of use. It was created by Guido van Rossum and first released in 1991. " />
      </div>
    </div>
  );
}

export default Skills;
