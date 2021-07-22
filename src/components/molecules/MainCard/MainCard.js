import React from 'react'
import './MainCard.css'
import CardTitle from '../../atoms/CardTitle/CardTitle'
import CardImage from '../../atoms/CardImage/CardImage'

export default function MainCard({ title, image }) {
    return (
        <div className="MainCard">
            <div className="MainCard__title">
                <CardTitle title={title} />
            </div>
            <div className="MainCard__image">
                <CardImage image={image} />
            </div>
        </div>
    )
}
