import React, { useContext } from 'react';
import './styles.css'; 
import LanguageContext from '../../context/LanguageContext';
import translations from '../../translate/translations';

const WhoAmI= () => {
    const { language } = useContext(LanguageContext);
    const t = translations[language].WhoAmI;
    
    return (
        <section className="sobremi__container">
            <article className="sobremi__description">
                <h2 className="sobremi__titulo">{t.AcercaDeMi}</h2>
                <p className="sobremi_texto">
                    {t.AcercaDeMi_texto}
                </p>
            </article>
        </section>
    );
};

export default WhoAmI;
