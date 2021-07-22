import React from 'react'
import './CardPrice.css'

export default function CardPrice() {
    return (
        <div className="CardPrice">
            <div className="CardPrice__current">
                <span className="CardPrice__currentValue"></span>₽/день
            </div>
            <div className="CardPrice__prev">
                <span className="CardPrice__prevValue"></span>₽/день
            </div>
        </div>
    )
}
