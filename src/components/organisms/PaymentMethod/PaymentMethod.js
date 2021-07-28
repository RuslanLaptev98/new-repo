import React, { useState } from 'react'
import './PaymentMethod.css'
import PaymentCard from '../../atoms/PaymentCard/PaymentCard'
import Button from '../../atoms/Button/Button'
import iconCardActive from './card.svg'
import iconCardInactive from './card-black.svg'
import iconAccountActive from './account-white.svg'
import iconAccountInactive from './account.svg'

export default function PaymentMethod() {
    const [active, setActive] = useState(0)
    return (
        <div className="PaymentMethod">
            <div className="PaymentMethod__cards">
                <PaymentCard
                    active={active}
                    setActive={setActive}
                    id={0}
                    text={['Банковская карта', 'Комиссия 1.9% + 30₽']}
                    iconActive={iconCardActive}
                    iconInactive={iconCardInactive}
                />
                <PaymentCard
                    active={active}
                    setActive={setActive}
                    id={1}
                    text={['Лицевой счет', 'Комиссия 1%']}
                    iconActive={iconAccountActive}
                    iconInactive={iconAccountInactive}
                />
            </div>

            <Button text="сохранить" />
        </div>
    )
}
