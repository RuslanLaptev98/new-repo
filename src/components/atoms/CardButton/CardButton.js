import React from 'react'
import './CardButton.css'

export default function CardButton({ setModalActive }) {
    return (
        <button className="CardButton" onClick={() => setModalActive(true)}>
            ОПЛАТИТЬ
        </button>
    )
}
