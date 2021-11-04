import React from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen ? 'grid grid-rows-2 text-center items-center bg-blue-300 font-semibold text-xl' : 'hidden'} onClick={toggle}>
            <Link className="p-4" to="/test">Test</Link>
            <Link className="p-4" to="/personalities">Personality Types</Link>
        </div>
    )
}

export default Dropdown
