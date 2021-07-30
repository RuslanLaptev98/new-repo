import React from 'react'
import './PaymentCard.css'
import { TiTick } from 'react-icons/ti'

export default function PaymentCard({ active, setActive, card }) {
    return (
        <div
            className={
                active === card.id
                    ? 'PaymentCard PaymentCard-active'
                    : 'PaymentCard'
            }
            onClick={() => setActive(card.id)}
        >
            <div className="PaymentCard__tick">
                {active === card.id ? <TiTick fill="#3cbf32" /> : null}
            </div>
            <div className="PaymentCard__cardicon">
                {active === card.id ? card.icons[0] : card.icons[1]}
            </div>

            {card.description.map((text) => (
                <div className="PaymentCard__text">{text}</div>
            ))}
        </div>
    )
}
