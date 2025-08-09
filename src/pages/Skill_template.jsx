import { useState } from 'react';
import './Skills.css' ;

function Skill_template ({ image, title, description }) {
    const [showPopup, setShowPopup] = useState(false);

    return(
        <>
            <div className="skill">
                <img src={image} alt="" className="skill_logo" />
                <button className="skill_more_info" onClick={() => setShowPopup(true)}>Read More</button>
            </div>

            {showPopup && (
                <div className="modal-overlay" onClick={() => setShowPopup(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowPopup(false)}>X</button>
                        <h1>{title}</h1>
                        <img src={image} alt={title} style={{ width: '300px' ,  objectFit: 'cover' }} />
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Skill_template ; 