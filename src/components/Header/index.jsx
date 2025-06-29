import React, { useContext } from 'react';
import './styles.css';
import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

const Header = () => {
    const { language, changeLanguage } = useContext(LanguageContext);
    const t = translations[language].header;

    const handleLanguageChange = (event) => {
        changeLanguage(event.target.value);
    };

    return (
        <header className="header">
            <nav className="menu__container">
                <h1 className="menu__logo">Richard Zapata</h1>
                <ul className="menu__lista">
                    <li className="menu__lista_li"><a className="menu__itens" href="#sobremi">{t.conoceme}</a></li>
                    <li className="menu__lista_li"><a className="menu__itens" href="#habilidades">{t.habilidades}</a></li>
                    <li className="menu__lista_li"><a className="menu__itens" href="#proyectos">{t.proyectos}</a></li>
                    <li className="menu__lista_li"><a className="menu__itens" href="mailto:jzap.work@gmail.com?subject=Contacto desde tu portafolio">{t.contacto}</a></li>
                </ul>
                <div className="language-selector">
                    <label htmlFor="language"> </label>
                    <select id="language" name="language" value={language} onChange={handleLanguageChange}>
                        <option value="es">Es</option>
                        <option value="en">En</option>
                    </select>
                </div>
            </nav>
        </header>
    );
};

export default Header;
