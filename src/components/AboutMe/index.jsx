import React, { useContext } from 'react';
import './styles.css'; 
import PerfilImage from '../../assets/AMPhoto.png';
import PerfilLinkedin from '../../assets/AMLinkedin.svg';
import PerfilGitHubBlack from '../../assets/AMGitHub_black.png';
import PerfilIconCv from '../../assets/icon_cv1.png'

import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

const AboutMe = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].aboutMe;

    return (
        <div className="contenedor__sections"> 
            <section className="perfil__container">
                <article className="perfil__description">

                    <p className="perfil__texto">{t.descripcion}</p>
                    <div id="sobremi"  className="perfil__redes">
                        <ul className="perfil__lista">
                            <li>
                                <a className="perfil__itens" href="https://www.linkedin.com/in/zapata-richard-dev/" target="_blank">
                                    <img className="perfil__lista--img" src={PerfilLinkedin} alt="LinkedIn" />
                                    <span className="sr-only"></span>
                                </a>
                            </li>
                            <li>
                                <a className="perfil__itens" href="https://github.com/rzapata-dev" target="_blank">
                                    <img className="perfil__lista--img--git" src={PerfilGitHubBlack} alt="GitHub" />
                                    <span className="sr-only"></span>
                                </a>
                            </li>
                            <li>
                                <a className="perfil__itens" download>
                                <img className="perfil__lista--img--git" src={PerfilIconCv} alt="CV" />
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
                <figure  className="perfil__imagen">
                    <img className="imagen-circular" src={PerfilImage}  alt="Foto de Richard Zapata" />
                </figure>
            </section>
        </div>
    );
};

export default AboutMe;
