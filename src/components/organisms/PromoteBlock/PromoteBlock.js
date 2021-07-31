import React from 'react'
import './PromoteBlock.css'
import PromoteMainCard from '../../molecules/PromoteMainCard/PromoteMainCard'
import PromotePriceCard from '../../molecules/PromotePriceCard/PromotePriceCard'

export default function PromoteBlock({ data }) {
    return (
        <div className="PromoteBlock">
            <PromoteMainCard data={data} />
            <PromotePriceCard data={data} />
        </div>
    )
}
