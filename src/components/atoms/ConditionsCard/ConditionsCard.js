import React from 'react'
import './ConditionsCard.css'
import { TiTick } from 'react-icons/ti'

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
            <div className="ConditionsCard__tick">
                {active === condition.id ? <TiTick fill="#3cbf32" /> : null}
            </div>
            <div className="ConditionsCard__title">{condition.title}</div>
            <div className="ConditionsCard__text">{condition.description}</div>
        </div>
    )
}
