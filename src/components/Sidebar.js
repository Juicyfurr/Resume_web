

import React, { useState } from 'react';
import './Sidebar.css';
import img1 from './logos/phone.svg';
import img2 from './logos/linkedin.svg';
import img3 from './logos/email.svg';
import img4 from './logos/address.svg';
import img5 from './logos/files.svg';
import img6 from './logos/git.svg';
import {ImagePopupPhone, ImagePopupMail, ImagePopupLkdin, ImagePopupHome} from './ImagePopup';

const Sidebar = () => {
  const [phonepopupOpen, setPhonePopupOpen] = useState(false);
  const [mailpopupOpen, setMailPopupOpen] = useState(false);
  const [lkdinpopupOpen, setLkdinPopupOpen] = useState(false);
  const [homepopupOpen, setHomePopupOpen] = useState(false);

  const openPhonePopup = () => {
    setPhonePopupOpen(true);
    setMailPopupOpen(false);
    setLkdinPopupOpen(false);
    setHomePopupOpen(false);
  };

  const openMailPopup = () => {
    setPhonePopupOpen(false);
    setMailPopupOpen(true);
    setLkdinPopupOpen(false);
    setHomePopupOpen(false);
  };

  const openLkdinPopup = () => {
    setPhonePopupOpen(false);
    setMailPopupOpen(false);
    setLkdinPopupOpen(true);
    setHomePopupOpen(false);
  };

  const openHomePopup = () => {
    setPhonePopupOpen(false);
    setMailPopupOpen(false);
    setLkdinPopupOpen(false);
    setHomePopupOpen(true);
  };

  const closePopup = () => {
    setPhonePopupOpen(false);
    setMailPopupOpen(false);
    setLkdinPopupOpen(false);
    setHomePopupOpen(false);
  };

  return (
    <div>
      <nav className="sidebar">
          <img className="image5" src={img5} alt="" />
          <img className="image6" src={img6} alt="" />
          <img onClick={openPhonePopup} className="image1" src={img1} alt="" />
          <img onClick={openMailPopup} className="image3" src={img3} alt="" />
          <img onClick={openLkdinPopup} className="image2" src={img2} alt="" />
          <img onClick={openHomePopup} className="image4" src={img4} alt="" />
      </nav>

      {phonepopupOpen && (
        <ImagePopupPhone
          onClose={closePopup}
        />
      )}
      {mailpopupOpen && (
        <ImagePopupMail
          onClose={closePopup}
        />
      )}
      {lkdinpopupOpen && (
        <ImagePopupLkdin
          onClose={closePopup}
        />
      )}
      {homepopupOpen && (
        <ImagePopupHome
          onClose={closePopup}
        />
      )}



    </div>
  );
};

export default Sidebar;

