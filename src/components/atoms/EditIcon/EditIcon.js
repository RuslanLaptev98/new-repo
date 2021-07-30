import React from 'react'
import './EditIcon.css'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineSave } from 'react-icons/ai'

export default function EditIcon({ editable, setEditable }) {
    return (
        <div
            className={!editable ? 'EditIcon' : 'EditIcon EditIcon-save'}
            onClick={() => {
                setEditable(!editable)
            }}
        >
            {!editable ? (
                <AiFillEdit fill="#fff" size="1.3rem" />
            ) : (
                <AiOutlineSave fill="#fff" size="1.3rem" />
            )}
        </div>
    )
}
