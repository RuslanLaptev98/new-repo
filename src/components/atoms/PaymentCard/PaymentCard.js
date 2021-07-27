import React from 'react'
import './PaymentCard.css'

export default function PaymentCard({ active, text }) {
    return (
        <div
            className={
                active ? 'PaymentCard PaymentCard-active' : 'PaymentCard'
            }
        >
            <div className="PaymentCard__text">{text[0]}</div>
            <div className="PaymentCard__text">{text[1]}</div>
        </div>
    )
}
