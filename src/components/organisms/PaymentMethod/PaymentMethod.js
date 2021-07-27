import React from 'react'
import './PaymentMethod.css'
import PaymentCard from '../../atoms/PaymentCard/PaymentCard'

export default function PaymentMethod() {
    return (
        <div className="PaymentMethod">
            <PaymentCard
                active={true}
                text={['Банковская карта', 'Комиссия 1.9% + 30₽']}
            />
            <PaymentCard text={['Лицевой счет', 'Комиссия 1%']} />
        </div>
    )
}
