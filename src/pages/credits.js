import React from 'react'
import ReactJS from '../images/react.png'
import Tailwind from '../images/tailwind.png'
import AOS from '../images/aos.PNG'
import Hero from '../images/heroicons2.png'
import Flaticon from '../images/flaticon.png'
import Personalities from '../images/16personalities.png'

const credits = () => {
    return (
        <div className="items-center justify-center text-center h-12 bg-white font-lato text-black shadow-xl pt-6 mt-4">
            <h1 className="font-bold">
                Created Using :     
            </h1>
            <div className="px-96 flex justify-between items-center h-16 bg-white text-black relative shadow-sm py-12 list-none">
                <img src={ReactJS} className="w-1/12 mt-10"/>
                <img src={Tailwind} className="w-1/12 mt-10"/>
                <img src={AOS} className="w-1/8 mt-10"/>
            </div>
            <div className="px-96 flex justify-between items-center h-16 bg-white text-black relative shadow-sm py-12 list-none">
                <li>React Js</li>
                <li>Tailwind CSS</li>
                <li>Animation On Scroll (AOS)</li>
            </div>
            <h1 className="font-bold mt-12">
                Special Thanks To :    
            </h1>
            <div className="px-96 py-16 flex justify-between items-center h-16 bg-white text-black relative shadow-sm py-12 list-none">
                <img src={Hero} className="w-3/12 mt-10"/>
                <img src={Flaticon} className="w-3/12 mt-10"/>
                <img src={Personalities} className="w-3/12 mt-10"/>
            </div>
            <div className="px-96 flex justify-between items-center h-16 bg-white text-black relative shadow-sm py-12 list-none">
                <li>Heroicons</li>
                <li>Flaticon</li>
                <li>16 Personalities</li>
            </div>
        </div>
    )
}

export default credits