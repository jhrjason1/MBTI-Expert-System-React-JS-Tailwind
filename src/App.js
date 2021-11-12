import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Dropdown from './components/Dropdown';
import Button from './components/Button';
import Home from './pages';
import Test from './pages/test';
import Aboutus from './pages/aboutus';
import Credits from './pages/credits';
import {Modal} from './components/Modal'
import Personalities from './pages/Personalities';
import Result from './pages/result';
import React, {useState, toggle, useEffect} from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
    setShowModal(prev => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect (() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu)

    return () => {
      window.removeEventListener('resize', hideMenu)
    }
  })

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="test" element={<Test />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="Credits" element={<Credits />} />
        <Route path="result" element={<Result />} />
        <Route path="Personalities" element={<Personalities />} />
      </Routes>
    </>
  );
}

export default App;

