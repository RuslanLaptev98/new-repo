import React from 'react'
import './Profile.css'
import EditableData from '../../molecules/EditableData/EditableData'
import DataName from '../../atoms/DataName/DataName'
import Button from '../../atoms/Button/Button'

export default function Profile() {
    const dataset = [
        { id: 0, title: 'старый пароль', value: 'password123' },
        { id: 1, title: 'новый пароль', value: 'password321' },
        { id: 2, title: 'подтвердите новый пароль', value: 'password321' },
    ]
    return (
        <div className="Profile">
            <EditableData
                editableData={{ title: 'email', value: 'email@email.com' }}
                className={'EditableData-profile'}
            />
            <div className="Profile__password">
                <DataName name="пароль" />
            </div>
            <div className="Profile__changePassword">
                {dataset.map((data) => (
                    <EditableData
                        key={data.id}
                        editableData={data}
                        className={'EditableData-profile'}
                    />
                ))}
            </div>

            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 880, marginTop: 30 }}
            />
        </div>
    )
}
