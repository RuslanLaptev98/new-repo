import React, { useState } from 'react'
import './RentTime.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import WeekDay from '../../atoms/WeekDay/WeekDay'
import 'primeflex/primeflex.css'
import { InputMask } from 'primereact/inputmask'

export default function RentTime() {
    const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    return (
        <div className="RentTime">
            <SectionTitle
                title="дни и часы для аренды"
                styles={{ paddingTop: '76px' }}
            />
            <div className="RentTime__time">
                <div className="RentTime__days">
                    {weekdays.map((day, i) => (
                        <WeekDay key={i} text={day} />
                    ))}
                </div>
                <div className="RentTime__hours">
                    с
                    <InputMask
                        mask="99 : 99"
                        value={input1}
                        onChange={(e) => setInput1(e.value)}
                        placeholder="XX : XX"
                    ></InputMask>
                    до
                    <InputMask
                        mask="99 : 99"
                        value={input2}
                        onChange={(e) => setInput2(e.value)}
                        placeholder="XX : XX"
                    ></InputMask>
                </div>
            </div>
        </div>
    )
}
