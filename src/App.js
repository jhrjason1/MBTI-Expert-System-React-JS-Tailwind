import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Dropdown from './components/Dropdown';
import Home from './pages';
import Test from './pages/test';
import Personalities from './pages/Personalities';
import React, {useState, toggle, useEffect} from 'react';

function App() {
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
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="test" element={<Test />} />
        <Route path="Personalities" element={<Personalities />} />
      </Routes>
    </>
  );
}

export default App;
