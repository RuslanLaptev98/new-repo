import React, { useState } from 'react'
import DataInput from '../../atoms/DataInput/DataInput'
import DataName from '../../atoms/DataName/DataName'
import EditIcon from '../../atoms/EditIcon/EditIcon'
import './EditableData.css'

export default function EditableData({ editableData, className }) {
    // false - обычное состояние, true - редактируемое
    const [editable, setEditable] = useState(false)
    const [editableValue, setEditableValue] = useState(editableData.value)
    return (
        <div className={`EditableData ${className}`}>
            <DataName name={editableData.title} />
            <DataInput
                editable={editable}
                setEditable={setEditable}
                data={editableValue}
                setEditableValue={setEditableValue}
            />
            <EditIcon editable={editable} setEditable={setEditable} />
        </div>
    )
}
