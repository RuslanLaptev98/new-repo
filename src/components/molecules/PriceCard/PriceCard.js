import React from 'react'
import './PriceCard.css'
import CardPrice from '../../atoms/CardPrice/CardPrice'
import CardDescription from '../../atoms/CardDescription/CardDescription'
import CardButton from '../../atoms/CardButton/CardButton'

export default function PriceCard() {
    return (
        <div className="PriceCard">
            <CardPrice />
            <CardDescription />
            <CardButton />
        </div>
    )
}
