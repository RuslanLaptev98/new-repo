import React from 'react'
import './JointCard.css'
import MainCard from '../../molecules/MainCard/MainCard'
import PriceCard from '../../molecules/PriceCard/PriceCard'

export default function JointCard() {
    return (
        <div className="JointCard">
            <MainCard />
            <PriceCard />
        </div>
    )
}
