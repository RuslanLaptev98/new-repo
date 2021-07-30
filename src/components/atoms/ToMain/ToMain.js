import React from 'react'
import './ToMain.css'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'

export default function ToMain() {
    return (
        <div className="ToMain">
            <AiOutlineArrowLeft fill="#878e99" size="1.3rem" />
            <p className="ToMain__text">На главную</p>
            <BsHouseDoor fill="#878e99" size="1.3rem" />
        </div>
    )
}
