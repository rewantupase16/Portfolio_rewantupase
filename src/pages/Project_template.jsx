// import './Projects.css' ;

// function Project_template ({ image, title, description }) {
//     return (
//         <>
//             <div className="project">
//                 <div className="project_image"><img src={image} alt="" /></div>
//                 <div className="project_info">
//                   <div className="project_title">{title}</div>
//                   <div className="project_description">{description}</div>
//                   <button className="project_more_info">Read More</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Project_template ;

import { useState } from 'react';
import './Projects.css';

function Project_template({ image, title, description, fullDescription }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="project">
        <div className="project_image">
          <img src={image} alt={title} />
        </div>
        <div className="project_info">
          <div className="project_title">{title}</div>
          <div className="project_description">{description}</div>
          <button className="project_more_info" onClick={() => setShowPopup(true)}>
            Read More
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="modal-overlay" onClick={() => setShowPopup(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>
            <h1>{title}</h1>
            <img src={image} alt={title} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />
            <p>{fullDescription}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Project_template;
