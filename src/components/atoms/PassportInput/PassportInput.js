import React, { useState } from 'react'
import './PassportInput.css'
import { InputMask } from 'primereact/inputmask'

export default function PassportInput() {
    const [seria, setSeria] = useState('')
    const [nomer, setNomer] = useState('')
    return (
        <div className="PassportInput">
            <div style={{ width: '275px' }}>
                <p className="PassportInput__title">Серия</p>
                <InputMask
                    mask="9 9 9 9"
                    value={seria}
                    onChange={(e) => setSeria(e.value)}
                    placeholder="X X X X"
                ></InputMask>
            </div>
            <div>
                <p className="PassportInput__title">Номер</p>
                <InputMask
                    mask="9 9 9 9 9 9"
                    value={nomer}
                    onChange={(e) => setNomer(e.value)}
                    placeholder="X X X X X X"
                ></InputMask>
            </div>
        </div>
    )
}
