import React from 'react'
import Button from '../../atoms/Button/Button'
import './Rent.css'
import CancelConditions from '../../molecules/CancelConditions/CancelConditions'
import RentTime from '../../molecules/RentTime/RentTime'
import DeliveryConditions from '../../molecules/DeliveryConditions/DeliveryConditions'

export default function Rent() {
    return (
        <div className="Rent">
            <CancelConditions />
            <RentTime />
            <DeliveryConditions />
            <Button text="сохранить" />
        </div>
    )
}
