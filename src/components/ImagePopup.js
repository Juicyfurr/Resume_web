import React from 'react';
import './Sidebar.css';

const ImagePopupPhone = ({ onClose }) => {
  return (
    <div className="image-popup">
      <div className="popup-content">
          <strong>Ring me at :</strong> 
          <p className= "Cfont"><strong>8428254096</strong></p>
          <button className="close-button" onClick={onClose}>
          &times;
          </button>
      </div>
    </div>
  );
};

const ImagePopupMail = ({ onClose }) => {
  return (
    <div className="image-popup">
      <div className="popup-content">
      <strong>Mail me at : </strong>
      <p className= "Cfont"> <strong>rajatjha1398@gmail.com </strong></p>
        <button className="close-button" onClick={onClose}>
        &times;
        </button>
      </div>
    </div>
  );
};

const ImagePopupLkdin = ({ onClose }) => {
  return (
    <div className="image-popup">
      <div className="popup-content">
      <p><strong>Check my professional id at :</strong>&nbsp;<br/>  
      <a href="www.linkedin.com/in/rajat-jha-130298" target="_blank" rel="noopener noreferrer">
        <strong>My LinkedIn Profile</strong>
      </a>
      </p>
        <button className="close-button" onClick={onClose}>
        &times;
        </button>
      </div>
    </div>
  );
};

const ImagePopupHome = ({ onClose }) => {
  return (
    <div className="image-popup">
      <div className="popup-content">
        <strong>Permanent Address :</strong>  
        <p className= "Cfont"><strong>CK 37/49, Bansphatak, Varanasi, Uttar Pradesh</strong></p>
        <button className="close-button" onClick={onClose}>
        &times;
        </button>
      </div>
    </div>
  );
};

export {ImagePopupPhone, ImagePopupMail, ImagePopupLkdin, ImagePopupHome};
