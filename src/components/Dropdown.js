import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-1 text-center items-center bg-white font-semibold text-xl' : 'hidden'} onClick={toggle}>
            <Link className="p-4 hover:underline hover:text-purple-800 transition duration-300 " to="/test">Test</Link>
            <Link className="p-4 hover:underline hover:text-green-600 transition duration-300 " to="/personalities">Personality Types</Link>
            <Link className="p-4 hover:underline hover:text-blue-600 transition duration-300 " to="/aboutus">About Us</Link>
            <Link className="p-4 hover:underline hover:text-yellow-600 transition duration-300 " to="/credit">Credits</Link>
        </div>
    )
}

export default Dropdown
