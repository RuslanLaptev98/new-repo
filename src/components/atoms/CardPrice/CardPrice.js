import React from 'react'
import './CardPrice.css'
import cross from './cross.svg'
import skidka from './skidka.svg'
import skidkashadow from './skidka-shadow.svg'

export default function CardPrice({ price, discount = 1 }) {
    return (
        <div className="CardPrice">
            {discount !== 1 && (
                <>
                    <img className="CardPrice__skidka" src={skidka} alt="" />
                    <img
                        className="CardPrice__skidkashadow"
                        src={skidkashadow}
                        alt=""
                    />
                </>
            )}
            <div className="CardPrice__current">
                <span className="CardPrice__currentValue">
                    {Math.trunc(price * discount)}
                </span>
                ₽/день
            </div>
            {discount !== 1 && (
                <div className="CardPrice__prev">
                    <span className="CardPrice__prevValue">{price}</span>₽/день
                    <img className="CardPrice__cross" src={cross} alt="" />
                </div>
            )}
        </div>
    )
}
