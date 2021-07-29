import React from 'react'
import './DataInput.css'
import CustomInput from '../CustomInput/CustomInput'

export default function DataInput({ editable, setEditable, data }) {
    return (
        <div className="DataInput">
            {!editable ? (
                <div
                    className="DataInput-data"
                    onClick={() => setEditable(!editable)}
                >
                    {data}
                </div>
            ) : (
                <div className="DataInput-input">
                    <CustomInput input={{ type: 0 }} />
                </div>
            )}
        </div>
    )
}
