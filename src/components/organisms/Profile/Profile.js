import React from 'react'
import './Profile.css'
import EditableData from '../../molecules/EditableData/EditableData'
import DataName from '../../atoms/DataName/DataName'
import Button from '../../atoms/Button/Button'

export default function Profile() {
    return (
        <div className="Profile">
            <EditableData />
            <div className="Profile__password">
                <DataName name="пароль" />
            </div>
            <EditableData />
            <EditableData />
            <EditableData />
            <Button text="сохранить" />
        </div>
    )
}
