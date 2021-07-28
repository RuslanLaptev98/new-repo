import React from 'react'
import './CustomInput.css'

export default function CustomInput({ label }) {
    return (
        <div className="CustomInput">
            <label>{label}</label>
            <input className="CustomInput__input" type="text" />
        </div>
    )
}
