import React from 'react'
import './PromotePriceCardHeader.css'
import discount from './discount.svg'
import discountShadow from './discount-shadow.svg'

export default function PromotePriceCardHeader({ data }) {
    return (
        <div className="PromotePriceCardHeader">
            {/* Скидка UI */}
            {data.discount !== 1 && (
                <>
                    <img
                        className="PromotePriceCardHeader__discount"
                        src={discount}
                        alt=""
                    />
                    <img
                        className="PromotePriceCardHeader__discountShadow"
                        src={discountShadow}
                        alt=""
                    />
                </>
            )}
            {/* Цена */}
            <div className="PromotePriceCardHeader__current">
                <span className="PromotePriceCardHeader__currentValue">
                    {Math.trunc(data.price * data.discount)}
                </span>
                ₽/день
            </div>
            {/* Предыдущая цена */}
            {data.discount !== 1 && (
                <div className="PromotePriceCardHeader__prev">
                    <span className="PromotePriceCardHeader__prevValue">
                        {data.price}
                    </span>
                    ₽/день
                </div>
            )}
        </div>
    )
}
