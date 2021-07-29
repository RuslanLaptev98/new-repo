import React from 'react'
import './EditIcon.css'
import edit from './edit.svg'
import save from './save.svg'

export default function EditIcon({ editable, setEditable }) {
    return (
        <div
            className={!editable ? 'EditIcon' : 'EditIcon EditIcon-save'}
            onClick={() => {
                setEditable(!editable)
            }}
        >
            {!editable ? (
                <img src={edit} alt="edit" />
            ) : (
                <img src={save} alt="save" />
            )}
        </div>
    )
}
