import React from 'react'
import './Authentication.css'
import Verification from '../../molecules/Verification/Verification'
import Button from '../../atoms/Button/Button'

export default function Authentication() {
    const verifications = [
        {
            title: ['Введите номер телефона'],
            buttonTxt: 'получить код',
            inputMask: {
                placeholder: 'X (XXX) XXX-XX-XX',
                mask: '9 (999) 999 - 99 - 99',
            },
        },
        {
            title: [
                'На Ваш номер был выслан код.',
                'Для подтверждения введите его в поле ниже',
            ],
            buttonTxt: 'подтвердить',
            inputMask: { placeholder: 'X X X X X X', mask: '9 9 9 9 9 9' },
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
