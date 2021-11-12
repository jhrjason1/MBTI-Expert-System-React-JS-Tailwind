import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Leo from '../images/leo.jpg'
import Jason from '../images/jason.jpg'
import GitHub from '../images/github.png'
import insta from '../images/instagram.png'
import { Link } from 'react-router-dom';

const Profile = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="container px-5 py-2 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16 md:h-full sm:h-full -mt-96 mb-16 lg:w-8/12 md:w-full sm:w-1/2 item-center sm:text-9xl">
                <div className="mt-96 px-8 py-8 bg-yellow-300 rounded md:mb-0 sm:mb-0 shadow-2xl " data-aos="fade-up">    
                    <img src={Leo} className="rounded-full"/>
                    <div className="font-lato text-black text-xl text-center mt-8">
                        Leonardo Steven
                    </div>
                    <div className="font-lato text-black text-base text-center">
                        Meet Me :
                    </div>
                    <div className="mt-4 flex justify-center gap-6 items-center relative">
                        <a href="https://github.com/leonardosteven" target="_blank"><img src={GitHub} className="cursor-pointer transform hover:scale-125 hover:drop-shadow-md"/></a>
                        <a href="https://instagram.com/elbaee" target="_blank"><img src={insta} className="cursor-pointer transform hover:scale-125"/></a>
                    </div>
                </div>
                <div className="mt-96 px-8 py-8 bg-gray-300 rounded md:mb-0 sm:mb-0 shadow-2xl" data-aos="fade-up">    
                    <img src={Leo} className="rounded-full"/>
                    <div className="font-lato text-black text-xl text-center mt-8">
                        Ananda Setiyani
                    </div>
                    <div className="font-lato text-black text-base text-center">
                        Meet Me :
                    </div>
                    <div className="mt-4 flex justify-center gap-6 items-center relative">
                        <a href="https://github.com/AnandaSetiyani" target="_blank"><img src={GitHub} className="cursor-pointer transform hover:scale-125 hover:drop-shadow-md"/></a>
                        <a href="https://instagram.com/anandasf29" target="_blank"><img src={insta} className="cursor-pointer transform hover:scale-125"/></a>
                    </div>
                </div>
                <div className="mt-96 px-8 py-8 bg-yellow-300 rounded md:mb-0 sm:mb-0 shadow-2xl" data-aos="fade-up">    
                    <img src={Jason} className="rounded-full "/>
                    <div className="font-lato text-black text-xl text-center mt-8">
                        Jason Haryanto
                    </div>
                    <div className="font-lato text-black text-base text-center">
                        Meet Me :
                    </div>
                    <div className="mt-4 flex justify-center gap-6 items-center relative">
                        <a href="https://github.com/jhrjason1" target="_blank"><img src={GitHub} className="cursor-pointer transform hover:scale-125 hover:drop-shadow-md"/></a>
                        <a href="https://instagram.com/jhrjason" target="_blank"><img src={insta} className="cursor-pointer transform hover:scale-125"/></a>
                    </div>
                </div>
            </div>
    )
}

export default Profile
