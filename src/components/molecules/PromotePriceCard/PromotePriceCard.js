import React from 'react'
import './PromotePriceCard.css'
import PromotePriceCardHeader from '../../atoms/PromotePriceCardHeader/PromotePriceCardHeader'
import PromoteButton from '../../atoms/PromoteButton/PromoteButton'

export default function PromotePriceCard({ data }) {
    return (
        <div className="PromotePriceCard">
            <PromotePriceCardHeader data={data} />
            <div className="PromotePriceCard__content">
                {data.description.map((desc, i) => (
                    <div className="PromotePriceCard__description" key={i}>
                        {desc}
                    </div>
                ))}
                <PromoteButton />
            </div>
        </div>
    )
}
