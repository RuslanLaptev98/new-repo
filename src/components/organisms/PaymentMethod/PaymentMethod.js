import React, { useState } from 'react'
import './PaymentMethod.css'
import PaymentCard from '../../atoms/PaymentCard/PaymentCard'
import Button from '../../atoms/Button/Button'
import iconCardActive from './card.svg'
import iconCardInactive from './card-black.svg'
import iconAccountActive from './account-white.svg'
import iconAccountInactive from './account.svg'

export default function PaymentMethod() {
    const paymentCards = [
        {
            id: 0,
            text: ['Банковская карта', 'Комиссия 1.9% + 30₽'],
            icons: [iconCardActive, iconCardInactive],
        },
        {
            id: 1,
            text: ['Лицевой счет', 'Комиссия 1%'],
            icons: [iconAccountActive, iconAccountInactive],
        },
    ]
    const [active, setActive] = useState(0)
    return (
        <div className="PaymentMethod">
            <div className="PaymentMethod__cards">
                {paymentCards.map((card, i) => (
                    <PaymentCard
                        key={i}
                        active={active}
                        setActive={setActive}
                        card={card}
                    />
                ))}
            </div>

            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 880 }}
            />
        </div>
    )
}
