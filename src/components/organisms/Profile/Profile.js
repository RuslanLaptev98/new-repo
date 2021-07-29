import React from 'react'
import './Profile.css'
import EditableData from '../../molecules/EditableData/EditableData'
import DataName from '../../atoms/DataName/DataName'
import Button from '../../atoms/Button/Button'

export default function Profile() {
    return (
        <div className="Profile">
            <EditableData
                editableData={{ name: 'email', data: 'email@email.com' }}
            />
            <div className="Profile__password">
                <DataName name="пароль" />
            </div>
            <EditableData
                editableData={{ name: 'старый пароль', data: 'password123' }}
            />
            <EditableData
                editableData={{ name: 'новый пароль', data: 'password321' }}
            />
            <EditableData
                editableData={{
                    name: 'подтвердите новый пароль',
                    data: 'password321',
                }}
            />
            <Button text="сохранить" />
        </div>
    )
}
