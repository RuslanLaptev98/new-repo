import React from 'react'
import './SectionTitle.css'
import arrow from './right-arrow.svg'

export default function SectionTitle({ title }) {
    return (
        <div className="SectionTitle">
            <div className="SectionTitle__main">{title}</div>
            <div className="SectionTitle__more">Посмотреть все</div>
            <img src={arrow} alt=""></img>
        </div>
    )
}
