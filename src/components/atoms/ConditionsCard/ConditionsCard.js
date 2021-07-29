import React from 'react'
import './ConditionsCard.css'
import tick from './tick.svg'

export default function ConditionsCard({ condition, active, setActive }) {
    return (
        <div
            className={
                active === condition.id
                    ? 'ConditionsCard ConditionsCard-active'
                    : 'ConditionsCard'
            }
            onClick={() => setActive(condition.id)}
        >
            <div
                className="ConditionsCard__tick"
                style={
                    active === condition.id
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
