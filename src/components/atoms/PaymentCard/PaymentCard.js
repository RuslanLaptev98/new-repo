import React from 'react'
import './PaymentCard.css'
import tick from './tick.svg'

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
            <div
                className="PaymentCard__tick"
                style={
                    active === card.id
                        ? {
                              backgroundImage: `url(${tick})`,
                          }
                        : {}
                }
            ></div>
            {active === card.id ? (
                <img
                    src={card.icons[0]}
                    alt=""
                    className="PaymentCard__image"
                />
            ) : (
                <img
                    src={card.icons[1]}
                    alt=""
                    className="PaymentCard__image"
                />
            )}

            {card.description.map((text) => (
                <div className="PaymentCard__text">{text}</div>
            ))}
        </div>
    )
}
