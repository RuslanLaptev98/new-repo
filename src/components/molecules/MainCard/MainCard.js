import React from 'react'
import './MainCard.css'
import CardTitle from '../../atoms/CardTitle/CardTitle'
import CardImage from '../../atoms/CardImage/CardImage'

export default function MainCard() {
    return (
        <div className="MainCard">
            <CardTitle />
            <CardImage />
        </div>
    )
}
