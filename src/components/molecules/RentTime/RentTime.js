import React, { useState } from 'react'
import './RentTime.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import WeekDay from '../../atoms/WeekDay/WeekDay'
import 'primeflex/primeflex.css'
import { InputMask } from 'primereact/inputmask'

export default function RentTime() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    return (
        <div className="RentTime">
            <SectionTitle
                title="дни и часы для аренды"
                styles={{ paddingTop: '76px' }}
            />
            <div className="Rent__time">
                <div className="Rent__days">
                    <WeekDay text="Пн" />
                    <WeekDay text="Вт" />
                    <WeekDay text="Ср" />
                    <WeekDay text="Чт" />
                    <WeekDay text="Пт" />
                    <WeekDay text="Сб" />
                    <WeekDay text="Вс" />
                </div>
                <div className="Rent__hours">
                    с
                    <InputMask
                        mask="99:99"
                        value={input1}
                        onChange={(e) => setInput1(e.value)}
                    ></InputMask>
                    до
                    <InputMask
                        mask="99:99"
                        value={input2}
                        onChange={(e) => setInput2(e.value)}
                    ></InputMask>
                </div>
            </div>
        </div>
    )
}
