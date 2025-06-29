import React, { useContext } from 'react';
import './styles.css'; 

import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

const Footer = () => {
  return (
    <footer className="footer__container">
      <nav className="footer__menu">
        <ul className="footer__lista">
          <li><a>© Richard Zapata Shapiama</a></li>
          <li><a className="footer__itens" href="mailto:jzap.work@gmail.com?subject=Contacto%20desde%20tu%20portafolio">contact</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
