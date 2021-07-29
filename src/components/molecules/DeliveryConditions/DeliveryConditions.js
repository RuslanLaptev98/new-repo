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
    const inputStyles = {
        marginBottom: 30,
        marginRight: 64,
    }
    const inputs = [
        { id: 0, type: 0, label: 'Адрес', styles: inputStyles },
        { id: 1, type: 0, label: 'Ближайший ориентир', styles: inputStyles },
        { id: 2, type: 0, label: 'Доставка', styles: inputStyles },
        { id: 3, type: 0, label: 'Возврат', styles: inputStyles },
    ]
    return (
        <div className="DeliveryConditions">
            <SectionTitle
                title="условия доставки и возврата товара"
                styles={{ paddingTop: '76px', maxWidth: '190px' }}
            />
            <div className="DeliveryConditions__content">
                <div className="DeliveryConditions__radio">
                    {radios.map((radio, i) => (
                        <CustomRadio
                            key={i}
                            radio={radio}
                            active={radioActive}
                            setActive={setRadioActive}
                        />
                    ))}
                </div>
                <div className="DeliveryConditions__inputs">
                    {inputs.map((input, i) => (
                        <CustomInput key={i} input={input} />
                    ))}
                </div>
            </div>
        </div>
    )
}
