import React from 'react'
import './ConditionsCard.css'
import tick from './tick.svg'

export default function ConditionsCard({ condition, id, active, setActive }) {
    return (
        <div
            className={
                active === id
                    ? 'ConditionsCard ConditionsCard-active'
                    : 'ConditionsCard'
            }
            onClick={() => setActive(id)}
        >
            <div
                className="ConditionsCard__tick"
                style={
                    active === id
                        ? {
                              backgroundImage: `url(${tick})`,
                          }
                        : {}
                }
            ></div>
            <div className="ConditionsCard__title">{condition.title}</div>
            <div className="ConditionsCard__text">{condition.text}</div>
        </div>
    )
}
