import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
    return (
        <nav className="flex justify-between items-center h-16 bg-aqua text-black relative shadow-sm" role="navigation">
            <Link to='/' className='pl-8 font-semibold text-xl'>MBTI Test</Link>
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
            <div className="pr-8 md:block hidden font-semibold text-xl">
                <Link className="p-4" to="/test">Test</Link>
                <Link className="p-4" to="/personalities">Personality Types</Link>
            </div>  
        </nav>
    )
}

export default Navbar
