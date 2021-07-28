import React, { useState } from 'react'
import Button from '../../atoms/Button/Button'
import ConditionsCard from '../../atoms/ConditionsCard/ConditionsCard'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import './Rent.css'

export default function Rent() {
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
        <div className="Rent">
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

            <SectionTitle
                title="дни и часы для аренды"
                styles={{ paddingTop: '76px' }}
            />
            <SectionTitle title="условия доставки и возврата товара" />
            <Button text="сохранить" />
        </div>
    )
}
