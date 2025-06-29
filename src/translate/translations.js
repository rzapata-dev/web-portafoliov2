const translations = {
    es: {
        header: {
            conoceme: 'Conoceme',
            habilidades: 'Habilidades',
            proyectos: 'Proyectos',
            contacto: 'Contacto',
            idiomas: 'Idiomas'
        },
        aboutMe: {
            saludo: '¡Holaaa!',
            descripcion: 'Soy Richard Zapata, un entusiasta de la tecnología y el aprendizaje constante. Actualmente estoy participando en el programa Oracle ONE de Alura Latam, donde desarrollo habilidades clave para crear soluciones innovadoras y funcionales que responden a las necesidades digitales actuales. Estoy siempre en búsqueda de nuevos desafíos que me permitan crecer y aportar valor.'
        },
        WhoAmI:{
            AcercaDeMi: 'Acerca de mi',
            AcercaDeMi_texto:' Como desarrollador front-end, estoy comprometido con la creación de experiencias digitales que combinan funcionalidad y creatividad. Mi trayectoria profesional está marcada por una dedicación constante al aprendizaje y la innovación. En cada proyecto, veo una oportunidad para perfeccionar mis habilidades técnicas y explorar nuevas ideas. Aunque tengo poca experiencia formal en la industria, estoy decidido a aportar valor a proyectos colaborativos y ofrecer soluciones efectivas que realmente impacten. Mi objetivo es crecer profesionalmente mientras contribuyo con proyectos que transformen ideas en realidad.'
        },
        skills: {
            titulo: 'Habilidades',
            items: [
                { text: 'JavaScript', altText: 'Icono de JavaScript' },
                { text: 'HTML', altText: 'Icono de HTML' },
                { text: 'CSS', altText: 'Icono de CSS' },
                { text: 'React', altText: 'Icono de React' },
                { text: 'GitHub', altText: 'Icono de GitHub' }
            ]
        },
        projects: {
            title: "Proyectos",
            items: [
                {
                    imgSrc: 'focusGif',  // El nombre del archivo de imagen
                    altText: "Gif pagina web focus",
                    title: "Enfoque Total",
                    description: "Herramienta de productividad con tiempos ajustables (25/5/15 minutos) para trabajo y descanso. Incluye música para mejorar la concentración, efectos sonoros interactivos e imágenes generadas por IA. Desarrollada con CSS y JavaScript, brinda una experiencia visual y funcional que optimiza el enfoque y se adapta a las necesidades del usuario.",
                    projectLink: "https://page-focus-rz.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/Page_focus_rz",
                    buttonDetails: "Proyecto",
                    buttonGitHub: "GitHub"
                },
                {
                    imgSrc: 'encriptadorGif',
                    altText: "Imagen de pagina web sobre un encriptador y desencriptador",
                    title: "Encriptador de Texto",
                    description: "Aplicación web para encriptar y desencriptar texto de manera rápida y segura. Con interfaz minimalista y responsiva, incluye notificaciones visuales y modales de advertencia. Desarrollada con HTML, CSS y JavaScript, ofrece una experiencia funcional y atractiva, garantizando privacidad y protección de datos.",
                    projectLink: "https://encriptador-proyecto.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/Encriptador_proyecto",
                    buttonDetails: "Proyecto",
                    buttonGitHub: "GitHub"
                },
                {
                    imgSrc: 'webdivisasGif',
                    altText: "Vista previa de la página web de casa de cambio J&R",
                    title: "Casa de Cambio J&R",
                    description: "Sitio web informativo y responsivo para una casa de cambio ubicada en Barranco, Lima. Presenta información clara sobre servicios, ubicación, preguntas frecuentes y tipos de cambio disponibles. Desarrollado con React, React Router y estilos personalizados, incorpora integración con Google Maps, reCAPTCHA y formularios funcionales. Optimizado para accesibilidad y rendimiento en dispositivos móviles.",
                    projectLink: "https://web-divisas.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/web-divisas",
                    buttonDetails: "Proyecto",
                    buttonGitHub: "GitHub"
                },
                // {
                //     imgSrc: 'pikaGif',  // El nombre del archivo de imagen
                //     altText: "Gif pagina web focus",
                //     title: "Temporizador de Enfoque",
                //     description: "Herramienta de productividad con intervalos personalizables (25/5/15 minutos) para trabajo y descanso. Incluye música para concentración, efectos sonoros interactivos e imágenes generadas por IA. Desarrollada con CSS y JavaScript, ofrece una experiencia visual y funcional que mejora el enfoque y se adapta a las necesidades del usuario.",
                //     projectLink: "https://page-focus-rz.vercel.app/",
                //     githubLink: "https://github.com/rzapata-dev/Page_focus_rz",
                //     buttonDetails: "Proyecto",
                //     buttonGitHub: "GitHub"
                // },
                // Más proyectos...
            ]
        }
        // otras traducciones...
        
    },
    en: {
        header: {
            conoceme: 'About Me',
            habilidades: 'Skills',
            proyectos: 'Projects',
            contacto: 'Contact',
            idiomas: 'Languages'
        },
        aboutMe: {
            saludo: 'Hello!',
            descripcion: 'I am Richard Zapata, a technology enthusiast and constant learner. I am currently participating in the Oracle ONE program at Alura Latam, where I develop key skills to create innovative and functional solutions that meet current digital needs. I am always looking for new challenges that allow me to grow and add value.'
        },
        WhoAmI:{
            AcercaDeMi: 'Who Am I',
            AcercaDeMi_texto: 'As a front-end developer, I am committed to creating digital experiences that combine functionality and creativity. My professional journey is marked by a constant dedication to learning and innovation. In every project, I see an opportunity to refine my technical skills and explore new ideas. Although I have limited formal experience in the industry, I am determined to add value to collaborative projects and deliver effective solutions that truly make an impact. My goal is to grow professionally while contributing to projects that turn ideas into reality.'
        },
        skills: {
            titulo: 'Skills',
            items: [
                { text: 'JavaScript', altText: 'JavaScript Icon' },
                { text: 'HTML', altText: 'HTML Icon' },
                { text: 'CSS', altText: 'CSS Icon' },
                { text: 'React', altText: 'React Icon' },
                { text: 'GitHub', altText: 'GitHub Icon' }
            ]
        },
        projects: {
            title: "Projects",
            items: [
                {
                    imgSrc: 'focusGif',
                    altText: "Gif pagina web focus",
                    title: "Total Focus",
                    description: "Productivity tool with customizable intervals (25/5/15 minutes) for work and breaks. Features focus music, interactive sound effects, and AI-generated images. Built with CSS and JavaScript, it delivers a visually engaging and functional experience that enhances focus and adapts to user needs.",
                    projectLink: "https://page-focus-rz.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/Page_focus_rz",
                    buttonDetails: "Live Demo",
                    buttonGitHub: "GitHub"
                },
                {
                    imgSrc: 'encriptadorGif',
                    altText: "Image of the website for an encryptor and decryptor",
                    title: "Text Encryptor",
                    description: "Web app for quick and secure text encryption and decryption. Featuring a minimalist and responsive interface, it includes visual notifications and warning modals. Built with HTML, CSS, and JavaScript, it delivers a functional and engaging experience while ensuring data privacy and protection.",
                    projectLink: "https://encriptador-proyecto.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/Encriptador_proyecto",
                    buttonDetails:  "Live Demo",
                    buttonGitHub: "GitHub"
                },
                {
                    imgSrc: 'webdivisasGif',
                    altText: "Preview of the currency exchange website J&R",
                    title: "Currency Exchange J&R",
                    description: "Responsive and informative website for a currency exchange business located in Barranco, Lima. It provides clear information about services, location, FAQs, and available exchange rates. Built with React, React Router, and custom styling, it integrates Google Maps, reCAPTCHA, and functional contact forms. Optimized for accessibility and mobile performance.",
                    projectLink: "https://web-divisas.vercel.app/",
                    githubLink: "https://github.com/rzapata-dev/web-divisas",
                    buttonDetails: "Live Demo",
                    buttonGitHub: "GitHub"
                }
    ,
                // Más proyectos...
            ]
        }
        // otras traducciones...
    }
};

export default translations;
