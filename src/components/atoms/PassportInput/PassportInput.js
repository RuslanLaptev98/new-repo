import React from 'react'
import './PassportInput.css'
import CustomInput from '../../atoms/CustomInput/CustomInput'

export default function PassportInput() {
    return (
        <div className="PassportInput">
            <div style={{ width: '275px' }}>
                <p className="PassportInput__title">Серия</p>
                <CustomInput input={{ type: 0 }} />
            </div>
            <div>
                <p className="PassportInput__title">Номер</p>
                <CustomInput
                    input={{
                        type: 0,
                        styles: { marginRight: 54 },
                    }}
                />
            </div>
        </div>
    )
}
