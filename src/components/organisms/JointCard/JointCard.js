import React from 'react'
import './JointCard.css'
import MainCard from '../../molecules/MainCard/MainCard'
import PriceCard from '../../molecules/PriceCard/PriceCard'

export default function JointCard({ mainCard, priceCard }) {
    return (
        <div className="JointCard">
            <MainCard title={mainCard.title} image={mainCard.image} />
            <PriceCard
                sizeBig={priceCard.sizeBig}
                saleUI={priceCard.sale}
                price={priceCard.price}
                text={priceCard.text}
                arrow={priceCard.arrow}
                button={priceCard.button}
                timeLeft={priceCard.timeLeft}
            />
        </div>
    )
}
