import React, { useContext } from 'react';
import focusGif from '../../assets/focus.gif';
import encriptadorGif from '../../assets/encriptador.gif';
import pikaGif from '../../assets/pika.gif';
import webdivisasGif from '../../assets/web-divisas.gif';

import './styles.css';

import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

// Mapeo de nombres de archivo a importaciones de imágenes
const images = {
    focusGif,
    encriptadorGif,
    webdivisasGif 
    // pikaGif
};

//Para agregar mas proyectos 
//Importas el gif , lo agregas al constante images - eso es todo en esta seccion
//Luego agregas el contenido en translations.js

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].projects;

    return (
        <section id="proyectos" className="proyecto__container">
            <h2 className="proyecto__titulos">{t.title}</h2>
            <ul className="proyecto__lista">
                {t.items.map((project, index) => (
                    <li key={index} className="proyecto__item">
                        <figure className="proyecto__imagen">
                            <img src={images[project.imgSrc]} alt={project.altText} />
                        </figure>
                        <article className="proyecto__detalle">
                            <h3 className="proyecto__titulo">{project.title}</h3>
                            <p className="proyecto__descripcion">{project.description}</p>
                            <div className="proyecto__detalle--botones">
                                <a className="proyecto__enlace" href={project.projectLink} title="Ver más detalles del proyecto" target="_blank" rel="noopener noreferrer">{project.buttonDetails}</a>
                                <a className="proyecto__enlace" href={project.githubLink} title="Ver el repositorio de GitHub del proyecto" target="_blank" rel="noopener noreferrer">{project.buttonGitHub}</a>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
