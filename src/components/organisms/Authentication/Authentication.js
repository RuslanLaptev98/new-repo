import React from 'react'
import './Authentication.css'
import Verification from '../../molecules/Verification/Verification'
import Button from '../../atoms/Button/Button'

export default function Authentication() {
    const verifications = [
        { text: ['Введите номер телефона'], buttonTxt: 'получить код' },
        {
            text: [
                'На Ваш номер был выслан код.',
                'Для подтверждения введите его в поле ниже',
            ],
            buttonTxt: 'подтвердить',
        },
    ]
    return (
        <div className="Authentication">
            {verifications.map((ver, i) => (
                <Verification key={i} ver={ver} />
            ))}
            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 880, marginTop: 130 }}
            />
        </div>
    )
}
