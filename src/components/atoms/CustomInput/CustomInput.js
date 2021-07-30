import React, { useState } from 'react'
import './CustomInput.css'
import 'primeflex/primeflex.css'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import arrow from './arrow-down.svg'

export default function CustomInput({ input, setEditableValue }) {
    const [value, setValue] = useState('')
    const [option, setOption] = useState('Через сервис')
    const customSelectItems = [
        { label: 'Самовывоз', value: 'Самовывоз' },
        { label: 'Через сервис', value: 'Через сервис' },
        { label: 'Собственная доставка', value: 'Собственная доставка' },
    ]

    return (
        <div className="CustomInput" style={input.styles}>
            <label
                style={{
                    maxWidth: '260px',
                    textAlign: 'right',
                    fontWeight: 600,
                }}
            >
                {input.label}
            </label>
            {input.type === 0 ? (
                <InputText
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        setEditableValue(e.target.value)
                    }}
                />
            ) : input.type === 1 ? (
                <div style={{ position: 'relative' }}>
                    <Dropdown
                        value={option}
                        options={customSelectItems}
                        onChange={(e) => setOption(e.value)}
                        placeholder={option}
                    />
                    <img src={arrow} alt="" className="CustomInput__arrow" />
                </div>
            ) : (
                <InputMask
                    mask={input.mask}
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    placeholder={input.placeholder}
                ></InputMask>
            )}
        </div>
    )
}
