import React from 'react'
import './Authentication.css'
import Verification from '../../molecules/Verification/Verification'
import Button from '../../atoms/Button/Button'

export default function Authentication() {
    return (
        <div className="Authentication">
            <Verification
                text={['Введите номер телефона']}
                buttonTxt="получить код"
            />
            <Verification
                text={[
                    'На Ваш номер был выслан код.',
                    'Для подтверждения введите его в поле ниже',
                ]}
                buttonTxt="подтвердить"
            />
            <Button text="сохранить" />
        </div>
    )
}
