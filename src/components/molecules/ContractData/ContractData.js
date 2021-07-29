import React, { useState } from 'react'
import './ContractData.css'
import DataName from '../../atoms/DataName/DataName'
import CustomRadio from '../../atoms/CustomRadio/CustomRadio'
import CustomInput from '../../atoms/CustomInput/CustomInput'
import shield from './shield.svg'
import Button from '../../atoms/Button/Button'
import camera from './camera.svg'

export default function ContractData() {
    const [radioActive, setRadioActive] = useState(0)
    return (
        <div className="ContractData">
            <DataName
                name="данные для договора аренды"
                styles={{ maxWidth: '185px' }}
            />
            <div className="ContractData__data">
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
                    <CustomInput
                        label="Фамилия"
                        type={0}
                        styles={{ marginRight: 54 }}
                    />
                    <CustomInput
                        label="Имя"
                        type={0}
                        styles={{ marginRight: 54 }}
                    />
                    <CustomInput
                        label="Отчество"
                        type={0}
                        styles={{ marginRight: 54 }}
                    />
                    <CustomInput
                        label="Моб. телефон"
                        type={0}
                        styles={{ marginRight: 54 }}
                    />
                    <CustomInput
                        label="Логин для входа в личный кабинет www.poproshu.ru"
                        type={0}
                        styles={{ marginRight: 54 }}
                    />
                    <div className="ContractData__passport">
                        <div className="ContractData__passporttext">
                            <p className="ContractData__passportTitle">
                                Подтверждение паспорта:
                            </p>
                            <p className="ContractData__passportSubtitle">
                                Делает Вас надежным арендодателем
                            </p>
                            <img
                                src={shield}
                                alt=""
                                style={{
                                    position: 'relative',
                                    top: -35,
                                    left: 200,
                                }}
                            />
                        </div>
                        <div className="ContractData__passportInput">
                            <div style={{ width: '275px' }}>
                                <p className="ContractData__passportInputTitle">
                                    Серия
                                </p>
                                <CustomInput type={0} />
                            </div>
                            <div>
                                <p className="ContractData__passportInputTitle">
                                    Номер
                                </p>
                                <CustomInput
                                    type={0}
                                    styles={{ marginRight: 54 }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ContractData__photo">
                        <p
                            className="ContractData__passportSubtitle"
                            style={{
                                width: '100%',
                                padding: 0,
                                textAlign: 'center',
                                paddingTop: 16,
                            }}
                        >
                            Сделайте селфи с паспортом без бликов.
                        </p>
                        <p
                            className="ContractData__passportSubtitle"
                            style={{
                                width: '100%',
                                padding: 0,
                                textAlign: 'center',
                            }}
                        >
                            Отдельно фото первой страницы паспорта
                        </p>
                        <div className="ContractData__file">
                            <div className="ContractData__camera">
                                <img src={camera} alt="camera" />
                            </div>
                            <div className="ContractData__download">
                                Загрузить файл
                            </div>
                        </div>
                    </div>
                    <Button
                        text="подтвердить паспорт"
                        styles={{
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
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
