import React, { useState } from 'react'
import './CustomInput.css'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'

export default function CustomInput({ input, setEditableValue, className }) {
    const [value, setValue] = useState('')
    const [option, setOption] = useState('Через сервис')
    const customSelectItems = [
        { label: 'Самовывоз', value: 'Самовывоз' },
        { label: 'Через сервис', value: 'Через сервис' },
        { label: 'Собственная доставка', value: 'Собственная доставка' },
    ]

    return (
        <div className={`CustomInput ${className}`}>
            <label className="CustomInput__label">{input.label}</label>
            {input.type === 0 ? (
                <InputText
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setEditableValue(e.target.value)
                    }}
                />
            ) : input.type === 1 ? (
                <Dropdown
                    value={option}
                    options={customSelectItems}
                    onChange={(e) => setOption(e.value)}
                    placeholder={option}
                />
            ) : (
                <InputMask
                    mask="9 (999) 999-99-99"
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    placeholder="X (XXX) XXX-XX-XX"
                ></InputMask>
            )}
        </div>
    )
}
