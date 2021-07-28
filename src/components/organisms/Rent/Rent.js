import React from 'react'
import Button from '../../atoms/Button/Button'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import './Rent.css'
import CancelConditions from '../../molecules/CancelConditions/CancelConditions'
import RentTime from '../../molecules/RentTime/RentTime'

export default function Rent() {
    return (
        <div className="Rent">
            <CancelConditions />
            <RentTime />
            <SectionTitle
                title="условия доставки и возврата товара"
                styles={{ paddingTop: '76px', maxWidth: '190px' }}
            />
            <Button text="сохранить" />
        </div>
    )
}
