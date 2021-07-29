import React, { useState } from 'react'
import './ContractData.css'
import DataName from '../../atoms/DataName/DataName'
import CustomRadio from '../../atoms/CustomRadio/CustomRadio'
import CustomInput from '../../atoms/CustomInput/CustomInput'

export default function ContractData() {
    const [radioActive, setRadioActive] = useState(0)
    return (
        <div className="ContractData">
            <DataName name="данные для договора аренды" />
            <div className="ContractData__radioGroup">
                <CustomRadio
                    id={0}
                    active={radioActive}
                    setActive={setRadioActive}
                    text="Для физ. лиц"
                />
                <CustomRadio
                    id={1}
                    active={radioActive}
                    setActive={setRadioActive}
                    text="Для юр. лиц"
                />
            </div>
            <div className="ContractData__inputs">
                <CustomInput label="Фамилия" type={0} />
                <CustomInput label="Имя" type={0} />
                <CustomInput label="Отчество" type={0} />
                <CustomInput label="Моб. телефон" type={0} />
                <CustomInput
                    label="Логин для входа в личный кабинет www.poproshu.ru"
                    type={0}
                />
            </div>
        </div>
    )
}
