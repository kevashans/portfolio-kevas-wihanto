import { useState } from 'react'
import Header from './components/home/Header.jsx'
import Banner from './components/home/Banner.jsx'
import './App.css'
import React from 'react';
import Experience from './components/home/Experience.js';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Header />
        <Banner title="Kevas Wihanto" />
      </div>
      <div className='body'>
        <Experience />
      </div>
    </>
  )
}

export default App
