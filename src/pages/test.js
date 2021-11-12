import React from 'react'
import { Link } from 'react-router-dom'

const test = () => {
    return (
        <div className="bg-home-background bg-opacity-90 h-screen flex flex-col items-center pt-16">
            <h1 className="lg:text-6xl md:text-4xl sm:text-2xl text-3xl font-black mb-14">
                Answer to Get Your Personality Type !
            </h1>
            <div className="lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm rounded overflow-hidden shadow-lg flex bg-white pb-4 pr-4 mb-6">
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    You usually stay calm, even under a lot of pressure.
                </div>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    <br />
                    <br />
                    <input type="radio" value="Tidak"/><label>Disagree </label>
                    <input type="radio" value="HampirTidak"/><label>Almost disagree </label>
                    <input type="radio" value="TidakTahu" /><label>I don't know </label>
                    <input type="radio" value="HampirPasti" /><label>Almost agree </label>
                    <input type="radio" value="Benar" /><label>Agree </label>
                </div>  
            </div>
            <div className="lg:max-w-screen-xl md:max-w-screen-md sm:max-w-screen-sm rounded overflow-hidden shadow-lg flex bg-white pb-4 pr-4">
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    You often make a backup plan for a backup plan.
                </div>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    <br />
                    <br />
                    <input type="radio" value="Tidak"/><label>Disagree </label>
                    <input type="radio" value="HampirTidak"/><label>Almost disagree </label>
                    <input type="radio" value="TidakTahu" /><label>I don't know </label>
                    <input type="radio" value="HampirPasti" /><label>Almost agree </label>
                    <input type="radio" value="Benar" /><label>Agree </label>
                </div>  
            </div>
            <Link className="py-4 px-10 bg-yellow-300 rounded-full text-3xl hover:bg-yellow-400 transition duration-300 ease-in-out
            flex items-center my-16 cursor-pointer" to="/result">
                Submit 
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 ml-2 mt-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
        </div>            
    )
}

export default test
