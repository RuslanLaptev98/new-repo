import React, { useState } from 'react'
import './CancelConditions.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import ConditionsCard from '../../atoms/ConditionsCard/ConditionsCard'

export default function CancelConditions() {
    const [cancelConditionsActive, setCancelConditionsActive] = useState(0)
    const conditions = [
        {
            id: 0,
            title: 'гибкие',
            description:
                'При отмене оплата полностью возвращается, удерживается только комиссионный сбор',
        },
        {
            id: 1,
            title: 'умеренные',
            description:
                'при отмене аренды удерживается комиссионный сбор и 20% от стоимости аренды в пользу арендодателя',
        },
        {
            id: 2,
            title: 'строгие',
            description:
                'при отмене аренды удерживается комиссионный сбор и 35% от стоимости аренды в пользу арендодателя',
        },
    ]
    return (
        <div className="CancelConditions">
            <SectionTitle title="условия отмены" />
            <div className="CancelConditions__cancel">
                {conditions.map((condition, i) => (
                    <ConditionsCard
                        key={i}
                        condition={condition}
                        active={cancelConditionsActive}
                        setActive={setCancelConditionsActive}
                    />
                ))}
            </div>
        </div>
    )
}
