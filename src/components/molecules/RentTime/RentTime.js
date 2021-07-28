import React from 'react'
import './RentTime.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import WeekDay from '../../atoms/WeekDay/WeekDay'

export default function RentTime() {
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
                <div className="Rent__hours"></div>
            </div>
        </div>
    )
}
