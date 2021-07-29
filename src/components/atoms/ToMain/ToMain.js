import React from 'react'
import './ToMain.css'
import arrow from './arrow-forward.svg'
import home from './house.svg'

export default function ToMain() {
    return (
        <div className="ToMain">
            <img src={arrow} alt="" />
            <p className="ToMain__text">На главную</p>
            <img src={home} alt="" />
        </div>
    )
}
