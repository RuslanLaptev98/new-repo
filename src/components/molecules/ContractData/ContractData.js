import React, { useState } from 'react'
import './ContractData.css'
import DataName from '../../atoms/DataName/DataName'
import CustomRadio from '../../atoms/CustomRadio/CustomRadio'
import CustomInput from '../../atoms/CustomInput/CustomInput'
import Button from '../../atoms/Button/Button'
import FileDownload from '../../atoms/FileDownload/FileDownload'
import PassportTitle from '../../atoms/PassportTitle/PassportTitle'
import PassportInput from '../../atoms/PassportInput/PassportInput'

export default function ContractData() {
    const [radioActive, setRadioActive] = useState(0)
    const radios = [
        { id: 0, text: 'Для физ. лиц' },
        { id: 1, text: 'Для юр. лиц' },
    ]

    const inputs = [
        { id: 0, type: 0, label: 'Фамилия' },
        { id: 1, type: 0, label: 'Имя' },
        { id: 2, type: 0, label: 'Отчество' },
        {
            id: 3,
            type: 2,

            label: 'Моб. телефон',
        },
        {
            id: 4,
            type: 0,
            label: 'Логин для входа в личный кабинет www.poproshu.ru',
        },
    ]
    return (
        <div className="ContractData">
            <DataName
                name="данные для договора аренды"
                className="DataName-contract"
            />
            <div className="ContractData__data">
                {/* Радио кнопки */}
                <div className="ContractData__radioGroup">
                    {radios.map((radio) => (
                        <CustomRadio
                            key={radio.id}
                            radio={radio}
                            active={radioActive}
                            setActive={setRadioActive}
                        />
                    ))}
                </div>
                {/* Белая форма инпутов */}
                {radioActive === 0 ? (
                    <div className="ContractData__inputs">
                        {inputs.map((input) => (
                            <CustomInput
                                key={input.id}
                                input={input}
                                setEditableValue={() => null}
                            />
                        ))}
                        {/* Паспорт */}
                        <div className="ContractData__passport">
                            <PassportTitle />
                            <PassportInput />
                        </div>
                        <FileDownload />
                        <Button
                            text="подтвердить паспорт"
                            className="Button-contract"
                        />
                    </div>
                ) : null}
            </div>
        </div>
    )
}
