import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/partials/_Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import About from './components/About'
import EnterSite from './components/EnterSite'
import Footer from './components/partials/_Footer'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar element={Navbar}/>
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<EnterSite />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer element={Footer}/>
    </div>
    
  )
}

export default App
