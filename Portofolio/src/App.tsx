import React from 'react';
import Experience from './components/home/Experience.tsx';
import Banner from './components/home/Banner.tsx'
import Projects from './components/home/Projects.tsx';
import SeaParticles from './components/home/SeaParticles.tsx';
import Socials from './components/home/Socials.tsx';

import './App.css'


function App() {
  return (
    <>
      <div className='container'>
        <Banner title="Kevas Wihanto" />
      </div>
      <div className='body'>
        <SeaParticles />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
