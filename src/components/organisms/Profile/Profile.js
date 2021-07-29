import React from 'react'
import './Profile.css'
import EditableData from '../../molecules/EditableData/EditableData'
import DataName from '../../atoms/DataName/DataName'
import Button from '../../atoms/Button/Button'

export default function Profile() {
    const dataset = [
        { name: 'старый пароль', data: 'password123' },
        { name: 'новый пароль', data: 'password321' },
        {
            name: 'подтвердите новый пароль',
            data: 'password321',
        },
    ]
    const customStyles = {
        paddingLeft: 40,
        paddingTop: 35,
        paddingBottom: 35,
    }
    return (
        <div className="Profile">
            <EditableData
                editableData={{ name: 'email', data: 'email@email.com' }}
                styles={customStyles}
            />
            <div className="Profile__password">
                <DataName name="пароль" />
            </div>
            {dataset.map((data, i) => (
                <EditableData
                    key={i}
                    editableData={data}
                    styles={customStyles}
                />
            ))}

            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 880, marginTop: 30 }}
            />
        </div>
    )
}
