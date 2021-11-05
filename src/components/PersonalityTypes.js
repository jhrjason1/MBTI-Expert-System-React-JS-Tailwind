import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import ISTJ from '../images/ISTJ.png'
import ISFJ from '../images/ISFJ.png'
import INFP from '../images/INFP.png'
import INTJ from '../images/INTJ.png'
import INFJ from '../images/INFJ.png'
import ENTP from '../images/ENTP.png'
import ISFP from '../images/ISFP.png'

const PersonalityTypes = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="container mx-auto grid grid-cols-4 gap-6 sm:h-full -mt-96">
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ISTJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISTJ
                </div>
                <div className="px-4 pt-2 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang serius, tenang, teliti, dapat diandalkan, bertanggung jawab, realistis, dan logis. Sangat disiplin dalam melakukan dan mengatur pekerjaan mereka.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ISFJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang ramah, tenang, berhati-hati, bertanggung jawab, baik hati, loyal, dan berkomitmen. Individu dengan kepribadian MBTI ini akan memiliki ingatan yang kuat terhadap orang terpenting bagi mereka atau sesuatu yang penting. Berusaha menciptakan lingkungan yang tertib baik di tempat tinggal maupun tempat kerja.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={INFP} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang berpikir ideal, fleksibel, mudah beradaptasi, teguh pada prinsip yang dipegang, dan loyal terhadap orang yang mereka percayai.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={INTJ} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang independen atau mandiri dan memiliki standar yang tinggi akan kompetensi untuk diri sendiri dan orang lain.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg" data-aos="fade-right" >
                <img src={INFJ} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teliti, tertarik dengan pemikiran orang lain, memiliki komitmen bekerja yang tinggi, dan ingin melayani orang di sekitar sebaik mungkin.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg"  data-aos="fade-right">
                <img src={ENTP} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ENTP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang cerdas, blak-blakan, dan tidak suka akan rutinitas.
                    </text>
                </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg"  data-aos="fade-right">
                <img src={ISFP} className="w-full bg-yellow-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang tenang, ramah, dan sensitif. Mereka membutuhkan ruang sendiri dan bekerja pada waktu mereka sendiri, serta tidak memaksakan pendapat atau nilai mereka pada orang lain.
                    </text>
                </div>
            </div>
        </div>
    )
}

export default PersonalityTypes
