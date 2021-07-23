import React from 'react'
import './PriceCard.css'
import CardPrice from '../../atoms/CardPrice/CardPrice'
import CardDescription from '../../atoms/CardDescription/CardDescription'
import CardButton from '../../atoms/CardButton/CardButton'

export default function PriceCard({ card, setModalActive }) {
    return (
        <div className="PriceCard">
            <CardPrice price={card.price} discount={card.discount} />
            <div className="PriceCard__content">
                <CardDescription
                    amount={card.amount}
                    description={card.description}
                />
                <CardButton setModalActive={setModalActive} />
            </div>
        </div>
    )
}
