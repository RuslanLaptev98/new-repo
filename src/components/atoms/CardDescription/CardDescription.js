import React from 'react'
import './CardDescription.css'

export default function CardDescription({ amount, description }) {
    return (
        <div className="CardDescription">
            {amount && (
                <div className="CardDescription__paragraph">
                    Количество мест:{' '}
                    <span className="CardDescription__amount">{amount}</span>
                </div>
            )}
            {description.map((paragraph, i) => (
                <div className="CardDescription__paragraph" key={i}>
                    {paragraph}
                </div>
            ))}
        </div>
    )
}
