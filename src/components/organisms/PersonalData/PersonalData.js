import React from 'react'
import './PersonalData.css'
import Button from '../../atoms/Button/Button'
import EditableData from '../../molecules/EditableData/EditableData'
import ContractData from '../../molecules/ContractData/ContractData'

export default function PersonalData() {
    return (
        <div className="PersonalData">
            <EditableData
                editableData={{ title: 'Адрес', value: 'Москва, Тверская 90' }}
                className="EditableData-personal"
            />
            <ContractData />
            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 840 }}
            />
        </div>
    )
}
