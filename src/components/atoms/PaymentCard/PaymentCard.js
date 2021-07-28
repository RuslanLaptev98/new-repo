import React from 'react'
import './PaymentCard.css'
import tick from './tick.svg'

export default function PaymentCard({
    active,
    setActive,
    id,
    text,
    iconActive,
    iconInactive,
}) {
    return (
        <div
            className={
                active === id ? 'PaymentCard PaymentCard-active' : 'PaymentCard'
            }
            onClick={() => setActive(id)}
        >
            <div
                className="PaymentCard__tick"
                style={
                    active === id
                        ? {
                              backgroundImage: `url(${tick})`,
                          }
                        : {}
                }
            ></div>
            {active === id ? (
                <img src={iconActive} alt="" className="PaymentCard__image" />
            ) : (
                <img src={iconInactive} alt="" className="PaymentCard__image" />
            )}

            {text.map((t) => (
                <div className="PaymentCard__text">{t}</div>
            ))}
        </div>
    )
}
