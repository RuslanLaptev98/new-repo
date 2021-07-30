import React, { useState } from 'react'
import './PaymentMethod.css'
import PaymentCard from '../../atoms/PaymentCard/PaymentCard'
import Button from '../../atoms/Button/Button'
import { BsCreditCard } from 'react-icons/bs'
import { AiOutlineFileProtect } from 'react-icons/ai'

export default function PaymentMethod() {
    const paymentCards = [
        {
            id: 0,
            description: ['Банковская карта', 'Комиссия 1.9% + 30₽'],
            icons: [
                <BsCreditCard fill="#fff" size="2.3rem" />,
                <BsCreditCard fill="#212429" size="2.3rem" />,
            ],
        },
        {
            id: 1,
            description: ['Лицевой счет', 'Комиссия 1%'],
            icons: [
                <AiOutlineFileProtect fill="#fff" size="2.3rem" />,
                <AiOutlineFileProtect fill="#212429" size="2.3rem" />,
            ],
        },
    ]
    const [active, setActive] = useState(0)

    return (
        <div className="PaymentMethod">
            <div className="PaymentMethod__cards">
                {paymentCards.map((card) => (
                    <PaymentCard
                        key={card.id}
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
