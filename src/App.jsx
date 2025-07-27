import React from 'react';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
