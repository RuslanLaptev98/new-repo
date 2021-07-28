import React from 'react'
import './CustomInput.css'

export default function CustomInput({ label, type }) {
    return (
        <div className="CustomInput">
            <label>{label}</label>
            {type === 0 ? (
                <input className="CustomInput__input" type="text" />
            ) : (
                <select className="CustomInput__input" type="text">
                    <option value="0">Через сервис</option>
                    <option value="1">Самовывоз</option>
                    <option value="2">Собственная доставка</option>
                </select>
            )}
        </div>
    )
}
