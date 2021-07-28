import React, { useState } from 'react'
import './CustomInput.css'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import 'primeflex/primeflex.css'

export default function CustomInput({ label, type }) {
    const [value, setValue] = useState('')
    const [option, setOption] = useState(null)
    const options = [
        { name: 'Через сервис', code: 'SR' },
        { name: 'Самовывоз', code: 'SV' },
        { name: 'Собственная доставка', code: 'SD' },
    ]
    const onOptionChange = (e) => {
        setOption(e.value)
    }
    return (
        <div className="CustomInput">
            <label>{label}</label>
            {type === 0 ? (
                <InputText
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <Dropdown
                    value={option}
                    options={options}
                    onChange={onOptionChange}
                    optionLabel="name"
                />
            )}
        </div>
    )
}
