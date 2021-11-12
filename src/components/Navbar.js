import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo-4.png'

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm py-12" role="navigation">
            <Link to='/' className='font-lato text-xl'><img src={logo} className="lg:pl-8 sm:pl-4 cursor-pointer"/></Link>
            <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden font-lato text-xl">
                <Link className="p-4 hover:underline hover:text-purple-800 transition duration-300 " to="/test">Test</Link>
                <Link className="p-4 hover:underline hover:text-green-600 transition duration-300 " to="/personalities">Personality Types</Link>
                <Link className="p-4 hover:underline hover:text-blue-600 transition duration-300 " to="/aboutus">About Us</Link>
                <Link className="p-4 hover:underline hover:text-yellow-600 transition duration-300 " to="/credits">Credits</Link>
            </div>  
        </nav>
    )
}

export default Navbar
