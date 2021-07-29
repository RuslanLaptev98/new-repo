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
    const customStyles = {
        paddingLeft: 40,
        paddingTop: 35,
        paddingBottom: 35,
    }
    return (
        <div className="Profile">
            <EditableData
                editableData={{ title: 'email', value: 'email@email.com' }}
                styles={customStyles}
            />
            <div className="Profile__password">
                <DataName name="пароль" />
            </div>
            <div className="Profile__changePassword">
                {dataset.map((data, i) => (
                    <EditableData
                        key={i}
                        editableData={data}
                        styles={customStyles}
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
