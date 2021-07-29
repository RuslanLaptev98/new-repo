import React from 'react'
import './PersonalData.css'
import Button from '../../atoms/Button/Button'
import EditableData from '../../molecules/EditableData/EditableData'
import ContractData from '../../molecules/ContractData/ContractData'

export default function PersonalData() {
    return (
        <div className="PersonalData">
            <EditableData
                editableData={{ name: 'Адрес', data: 'Москва, Тверская 90' }}
            />
            <ContractData />
            <Button text="сохранить" />
        </div>
    )
}
