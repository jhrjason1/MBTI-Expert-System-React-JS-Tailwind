import React from 'react'

const TitleSearch = () => {
    return (
        <div className="bg-white bg-opacity-90 h-screen flex flex-col items-center">
            <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-1xl font-black mb-14 text-indigo-900 mt-24">
                Search for Your Personality Details Here
            </h1>
            <div className="py-6 px-10 lg:text-xl md:text-base sm:text-base
            flex items-center -my-5 relative" to="/">
                <input type="text" placeholder="Type MBTI here" className="bg-white font-semibold py-3 px-10 rounded-lg
                border-2 border-black" />
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 absolute ml-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
    )
}

export default TitleSearch
