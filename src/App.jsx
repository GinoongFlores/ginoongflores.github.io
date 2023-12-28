import React from 'react';
import './index.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './pages/Footer';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';

import ThemeContext, { ThemeProvider } from './contexts/ThemeContext';

function Container() {
  const { isDarkMode } = React.useContext(ThemeContext);

  return (
    <div className={isDarkMode ? 'darkmode' : ''}>
      <SEO />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <Container />
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
