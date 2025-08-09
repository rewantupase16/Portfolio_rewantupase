// import './Projects.css' ;
// import image1 from '../Assest/1.jpg' ;
// import image2 from '../Assest/2.png' ;
// import Project_template from './Project_template';

// function Projects({ onClose }) {
//   return (
//     <div className="popup-content">
//       <button onClick={onClose} className="close-btn">X</button>
//       <h1 >PROJECTS</h1>
//       <p className='line'>---------------------------</p>
//       <Project_template 
//       image={image1}
//       title="Fuck"
//       description="Rest In Peace"/>
//       <Project_template 
//       image={image2}
//       title="Up"
//       description="Rest In Peace"/>
//     </div>
//   );
// }

// export default Projects;

import './Projects.css';
import cs from '../Assest/coming_soon.png';
import Project_template from './Project_template';

function Projects({ onClose }) {
  return (
    <div className="popup-content">
      <button onClick={onClose} className="close-btn">X</button>
      <h1>PROJECTS</h1>
      <p className='line'>---------------------------</p>

      <Project_template
        image={cs}
        title="Project Coming Soon......."
        description="Coming Soon..................................................................................................."
        fullDescription="Not Yet"
      />

      <Project_template
        image={cs}
        title="Project Coming Soon......."
        description="Coming Soon..................................................................................................."
        fullDescription="Not Yet"
      />
    </div>
  );
}

export default Projects;

