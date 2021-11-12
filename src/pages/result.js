import React from 'react'
import INFJ from '../images/INFJ.png'

const result = () => {
    return (
        <div className="h-screen flex flex-col items-center">
            <h1 className="font-changa font-bold text-3xl mt-4">Your Personality Type Is :</h1>
            <h1 className="font-staat mt-4 text-6xl">Advocate (INFJ)</h1>
            <div className="container px-5 py-2 mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 md:h-full sm:h-full mb-16 lg:w-8/12 md:w-full sm:w-1/2 item-center">
                <img src={INFJ} className="w-full mt-16"/>
                <text className="text-justify mt-24">
                    Few personality types are as passionate and enigmatic as Advocates (INFJs). As someone with this personality type, you stand out for your imagination, your compassion, your integrity, and your deeply held principles. Unlike many other idealistic types, however, you are also capable of turning your ideals into plans and executing them.
                    Yet Advocates face challenges too. Even the most idealistic and dedicated of personality types can become frustrated when it comes to navigating interpersonal conflicts, confronting unpleasant facts, pursuing self-realization, or finding a fulfilling career path. As a result, you may sometimes find yourself questioning who you really are – and who you’re really meant to be.
                </text>
            </div>
        </div>
    )
}

export default result
