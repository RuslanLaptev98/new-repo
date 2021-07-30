import React, { useState } from 'react'
import './DeliveryConditions.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import CustomRadio from '../../atoms/CustomRadio/CustomRadio'
import CustomInput from '../../atoms/CustomInput/CustomInput'

export default function DeliveryConditions() {
    const [radioActive, setRadioActive] = useState(0)
    const radios = [
        { id: 0, text: 'Самовывоз' },
        { id: 1, text: 'Через сервис' },
        { id: 2, text: 'Собственная доставка' },
    ]
    const inputs = [
        { id: 0, type: 0, label: 'Адрес' },
        { id: 1, type: 0, label: 'Ближайший ориентир' },
        { id: 2, type: 1, label: 'Доставка' },
        { id: 3, type: 1, label: 'Возврат' },
    ]

    return (
        <div className="DeliveryConditions">
            <SectionTitle
                title="условия доставки и возврата товара"
                className="SectionTitle-delivery"
            />
            <div className="DeliveryConditions__content">
                <div className="DeliveryConditions__radio">
                    {radios.map((radio) => (
                        <CustomRadio
                            key={radio.id}
                            radio={radio}
                            active={radioActive}
                            setActive={setRadioActive}
                        />
                    ))}
                </div>
                <div className="DeliveryConditions__inputs">
                    {inputs.map((input) => (
                        <CustomInput
                            key={input.id}
                            input={input}
                            setEditableValue={() => ''}
                            className="CustomInput-delivery"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
