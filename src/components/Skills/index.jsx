import React, { useContext } from 'react';
import './styles.css'; 
import SCss from '../../assets/SCss.svg';
import SHtml from '../../assets/SHtml.png';
import SJs from '../../assets/SJs.png';
import SReact from '../../assets/SReact.svg';
import SGitHub from '../../assets/SGitHub.png';

import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

const Skills = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].skills;

    const skills = [
        { imgSrc: SJs, altText: t.items[0].altText, text: t.items[0].text },
        { imgSrc: SHtml, altText: t.items[1].altText, text: t.items[1].text },
        { imgSrc: SCss, altText: t.items[2].altText, text: t.items[2].text },
        { imgSrc: SReact, altText: t.items[3].altText, text: t.items[3].text },
        { imgSrc: SGitHub, altText: t.items[4].altText, text: t.items[4].text },
    ];

    return (
        <section id="habilidades" className="habilidades__container">
            <h2 className="habilidades__titulos">{t.titulo}</h2>
            <ul className="habilidades__lista">
                {skills.map((skill, index) => (
                    <li key={index} className="habilidad__item">
                        <img className="habilidad__imagen" src={skill.imgSrc} alt={skill.altText} />
                        <p className="habilidad__texto">{skill.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
