import React, {useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Button from './Button';
import ISTJ from '../images/ISTJ.png'
import ISFJ from '../images/ISFJ.png'
import INFP from '../images/INFP.png'
import INTJ from '../images/INTJ.png'
import INFJ from '../images/INFJ.png'
import ENTP from '../images/ENTP.png'
import ISFP from '../images/ISFP.png'
import INTP from '../images/INTP.png'
import ENTJ from '../images/ENTJ.png'
import ENFJ from '../images/ENFJ.png'
import ENFP from '../images/ENFP.png'
import ESTJ from '../images/ESTJ.png'
import ESFJ from '../images/ESFJ.png'
import ISTP from '../images/ISTP.png'
import ESTP from '../images/ESTP.png'
import ESFP from '../images/ESFP.png'


const PersonalityTypes = ({openModal}) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div className="h-screen container px-5 py-2 mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 md:h-full sm:h-full sm:w-full -mt-96 sm:w-1/2 item-center">
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={INTJ} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INTJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teliti, tertarik dengan pemikiran orang lain, memiliki komitmen bekerja yang tinggi, dan ingin melayani orang di sekitar sebaik mungkin.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={INTP} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INTP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teoritis, abstrak, dan lebih tertarik mencari informasi mengenai hal yang berhubungan dengan minat mereka.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ENTJ} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ENTJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang pengambil keputusan yang baik, peka terhadap prosedur atau kebijakan yang kurang efisien, dan baik dalam hal kepemimpinan walaupun tak segan untuk memaksakan idenya.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg"  data-aos="fade-left">
                <img src={ENTP} className="w-full bg-purple-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ENTP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang cerdas, blak-blakan, dan tidak suka akan rutinitas.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right" >
                <img src={INFJ} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teliti, tertarik dengan pemikiran orang lain, memiliki komitmen bekerja yang tinggi, dan ingin melayani orang di sekitar sebaik mungkin.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                <img src={INFP} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    INFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang berpikir ideal, fleksibel, mudah beradaptasi, teguh pada prinsip yang dipegang, dan loyal terhadap orang yang mereka percayai.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                <img src={ENFJ} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ENFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang berempati tinggi, pendengar yang baik, bertanggung jawab, loyal, pandai bersosialisasi, dan dapat menerima kritik serta pujian dengan baik.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                <img src={ENFP} className="w-full bg-green-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ENFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang spontan, fleksibel, imajinatif, dan suportif terhadap orang lain.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ISTJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISTJ
                </div>
                <div className="px-4 pt-2 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang serius, tenang, teliti, dapat diandalkan, bertanggung jawab, realistis, dan logis. Sangat disiplin dalam melakukan dan mengatur pekerjaan mereka.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ISFJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang ramah, tenang, berhati-hati, bertanggung jawab, baik hati, loyal, dan berkomitmen. Individu dengan kepribadian MBTI ini akan memiliki ingatan yang kuat terhadap orang terpenting bagi mereka atau sesuatu yang penting. Berusaha menciptakan lingkungan yang tertib baik di tempat tinggal maupun tempat kerja.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ESTJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ESTJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang realistis, praktis, berorientasi fakta, tegas, dan cepat dalam membuat keputusan namun terkadang cenderung memaksakan orang lain untuk mengikuti keputusannya.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-left">
                <img src={ESFJ} className="w-full bg-blue-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ESFJ
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teliti, suka bekerja sama, peka terhadap sekitar, dan ingin dirinya diakui oleh orang lain atas kontribusi yang telah dilakukan atau dikerjakannya.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg" data-aos="fade-right">
                <img src={ISTP} className="w-full bg-yellow-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISTP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang toleran, fleksibel, bertindak cepat dalam menemukan solusi yang terbaik. Tertarik pada hubungan sebab-akibat dan mengatur fakta-fakta secara efisien serta logis.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg"  data-aos="fade-right">
                <img src={ISFP} className="w-full bg-yellow-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ISFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang teliti, suka bekerja sama, peka terhadap sekitar, dan ingin dirinya diakui oleh orang lain atas kontribusi yang telah dilakukan atau dikerjakannya.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg"  data-aos="fade-right">
                <img src={ESTP} className="w-full bg-yellow-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ESTP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang fleksibel, toleran, spontan, dan lebih suka untuk beraksi atau bertindak langsung daripada hanya menerima teori saja.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div>
            <div className="rounded overflow-hidden shadow-lg"  data-aos="fade-right">
                <img src={ESFP} className="w-full bg-yellow-100"/>
                <div className="font-bold text-indigo-900 text-xl mt-4 ml-4">
                    ESFP
                </div>
                <div className="px-4 pt-2 pb-4 text-justify">
                    <text>  
                        Merupakan individu dengan pribadi yang ramah, bersahabat, adaptif, spontan, dan suka bekerjasama dengan orang lain.
                    </text>
                </div>
                <Button onClick={openModal}/>
            </div> 
        </div>
    )
}

export default PersonalityTypes
