import React from 'react'
import './PersonalData.css'
import Button from '../../atoms/Button/Button'
import EditableData from '../../molecules/EditableData/EditableData'

export default function PersonalData() {
    return (
        <div className="PersonalData">
            <EditableData
                editableData={{ name: 'Адрес', data: 'Москва, Тверская 90' }}
            />
            <Button text="сохранить" />
        </div>
    )
}
