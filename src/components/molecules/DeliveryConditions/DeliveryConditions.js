import React, { useState } from 'react'
import './DeliveryConditions.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import CustomRadio from '../../atoms/CustomRadio/CustomRadio'
import CustomInput from '../../atoms/CustomInput/CustomInput'

export default function DeliveryConditions() {
    const [radioActive, setRadioActive] = useState(0)
    return (
        <div className="DeliveryConditions">
            <SectionTitle
                title="условия доставки и возврата товара"
                styles={{ paddingTop: '76px', maxWidth: '190px' }}
            />
            <div className="DeliveryConditions__content">
                <div className="DeliveryConditions__radio">
                    <CustomRadio
                        id={0}
                        active={radioActive}
                        setActive={setRadioActive}
                        text="Самовывоз"
                    />
                    <CustomRadio
                        id={1}
                        active={radioActive}
                        setActive={setRadioActive}
                        text="Через сервис"
                    />
                    <CustomRadio
                        id={2}
                        active={radioActive}
                        setActive={setRadioActive}
                        text="Собственная доставка"
                    />
                </div>
                <div className="DeliveryConditions__inputs">
                    <CustomInput label="Адрес" type={0} />
                    <CustomInput label="Ближайший ориентир" type={0} />
                    <CustomInput label="Доставка" />
                    <CustomInput label="Возврат" />
                </div>
            </div>
        </div>
    )
}
