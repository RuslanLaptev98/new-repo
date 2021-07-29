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
    const customCss = { marginRight: 54 } // for inputs
    const inputs = [
        { id: 0, type: 0, styles: customCss, label: 'Фамилия' },
        { id: 1, type: 0, styles: customCss, label: 'Имя' },
        { id: 2, type: 0, styles: customCss, label: 'Отчество' },
        { id: 3, type: 0, styles: customCss, label: 'Моб. телефон' },
        {
            id: 4,
            type: 0,
            styles: customCss,
            label: 'Логин для входа в личный кабинет www.poproshu.ru',
        },
    ]
    const customButtonStyles = {
        // зеленая кнопка
        background: '#3CBF32',
        boxShadow: '0px 14px 40px rgba(60, 191, 50, 0.3)',
        width: 230,
        height: 50,
        padding: 0,
        paddingTop: 16,
        fontSize: 14,
        textAlign: 'center',
        position: 'relative',
        left: 550,
        top: 30,
    }
    return (
        <div className="ContractData">
            <DataName
                name="данные для договора аренды"
                styles={{ maxWidth: 190 }}
            />
            <div className="ContractData__data">
                {/* Радио кнопки */}
                <div className="ContractData__radioGroup">
                    {radios.map((radio, i) => (
                        <CustomRadio
                            key={i}
                            radio={radio}
                            active={radioActive}
                            setActive={setRadioActive}
                        />
                    ))}
                </div>
                {/* Белая форма инпутов */}
                {radioActive === 0 ? (
                    <div className="ContractData__inputs">
                        {inputs.map((input, i) => (
                            <CustomInput key={i} input={input} />
                        ))}
                        {/* Паспорт */}
                        <div className="ContractData__passport">
                            <PassportTitle />
                            <PassportInput />
                        </div>
                        <FileDownload />
                        <Button
                            text="подтвердить паспорт"
                            styles={customButtonStyles}
                        />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}
