import React, { useState } from 'react'
import './CustomInput.css'
import 'primeflex/primeflex.css'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'

export default function CustomInput({ input, setEditableValue }) {
    const [value, setValue] = useState('')

    // Dropdown
    const deliverySelectItems = [
        { label: 'Самовывоз', value: 'Самовывоз' },
        { label: 'Через сервис', value: 'Через сервис' },
        { label: 'Собственная доставка', value: 'Собственная доставка' },
    ]
    const [delivery, setDelivery] = useState(deliverySelectItems[0].label)

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
                <Dropdown
                    value={delivery}
                    options={deliverySelectItems}
                    onChange={(e) => setDelivery(e.value)}
                    placeholder={delivery}
                />
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
