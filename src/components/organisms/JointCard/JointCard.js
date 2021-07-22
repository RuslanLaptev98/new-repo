import React from 'react'
import './JointCard.css'
import MainCard from '../../molecules/MainCard/MainCard'
import PriceCard from '../../molecules/PriceCard/PriceCard'

export default function JointCard({ card }) {
    return (
        <div className="JointCard">
            <MainCard title={card.title} image={card.image} />
            <PriceCard card={card} />
        </div>
    )
}
