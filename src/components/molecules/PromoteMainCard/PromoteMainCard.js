import React from 'react'
import './PromoteMainCard.css'

export default function PromoteMainCard({ data }) {
    return (
        <div className="PromoteMainCard">
            <div className="PromoteMainCard__title">{data.title}</div>
            <div
                className="PromoteMainCard__image"
                style={{ backgroundImage: `url(${data.image})` }}
            ></div>
        </div>
    )
}
