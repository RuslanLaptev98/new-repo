import React, { useState } from 'react'
import DataInput from '../../atoms/DataInput/DataInput'
import DataName from '../../atoms/DataName/DataName'
import EditIcon from '../../atoms/EditIcon/EditIcon'
import './EditableData.css'

export default function EditableData({ editableData, styles }) {
    // false - обычное состояние, true - редактируемое
    const [editable, setEditable] = useState(false)
    return (
        <div className="EditableData" style={styles}>
            <DataName name={editableData.title} />
            <DataInput
                editable={editable}
                setEditable={setEditable}
                data={editableData.value}
            />
            <EditIcon editable={editable} setEditable={setEditable} />
        </div>
    )
}
