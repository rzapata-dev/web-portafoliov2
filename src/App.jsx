import React from 'react';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhoAmI from './components/WhoAmI';
import Footer from './components/Footer';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <>
    <LanguageProvider>
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <WhoAmI />
      <Footer/>     
      </LanguageProvider>
    </>
  );
}

export default App;
