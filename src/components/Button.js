import React from 'react'
import { openModal } from '../App';

const Button = ({openModal}) => {
    return (
        <div>
            <button onClick={openModal} className="px-4 pt-2 pb-2 mb-4 ml-4 text-justify rounded bg-red-600 text-white hover:text-red-600 hover:bg-white border hover:border-red-600">Click for more details !</button>
        </div>
    )
}

export default Button
