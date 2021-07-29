import React, { useState } from 'react'
import DataInput from '../../atoms/DataInput/DataInput'
import DataName from '../../atoms/DataName/DataName'
import EditIcon from '../../atoms/EditIcon/EditIcon'
import './EditableData.css'

export default function EditableData() {
    // false - обычное состояние, true - редактируемое
    const [editable, setEditable] = useState(false)
    return (
        <div className="EditableData">
            <DataName name="Адрес" />
            <DataInput
                editable={editable}
                setEditable={setEditable}
                data="Москва, Тверская 90"
            />
            <EditIcon editable={editable} setEditable={setEditable} />
        </div>
    )
}
