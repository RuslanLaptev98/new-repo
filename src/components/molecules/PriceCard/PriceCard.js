import React from 'react'
import './PriceCard.css'
import CardPrice from '../../atoms/CardPrice/CardPrice'
import CardDescription from '../../atoms/CardDescription/CardDescription'
import CardButton from '../../atoms/CardButton/CardButton'

export default function PriceCard({ card }) {
    return (
        <div className="PriceCard">
            <CardPrice price={card.price} discount={card.discount} />
            <CardDescription
                amount={card.amount}
                description={card.description}
            />
            <CardButton />
        </div>
    )
}
