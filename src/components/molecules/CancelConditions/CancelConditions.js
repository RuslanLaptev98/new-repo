import React, { useState } from 'react'
import './CancelConditions.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ConditionsCard from '../../atoms/ConditionsCard/ConditionsCard'

export default function CancelConditions() {
    const [cancelConditionsActive, setCancelConditionsActive] = useState(0)
    const conditions = [
        {
            title: 'гибкие',
            text: 'При отмене оплата полностью возвращается, удерживается только комиссионный сбор',
        },
        {
            title: 'умеренные',
            text: 'при отмене аренды удерживается комиссионный сбор и 20% от стоимости аренды в пользу арендодателя',
        },
        {
            title: 'строгие',
            text: 'при отмене аренды удерживается комиссионный сбор и 35% от стоимости аренды в пользу арендодателя',
        },
    ]
    return (
        <div className="CancelConditions">
            <SectionTitle title="условия отмены" />
            <div className="Rent__cancel">
                {conditions.map((condition, i) => (
                    <ConditionsCard
                        condition={condition}
                        id={i}
                        key={i}
                        active={cancelConditionsActive}
                        setActive={setCancelConditionsActive}
                    />
                ))}
            </div>
        </div>
    )
}
