import React, { useState } from 'react'
import './Verification.css'
import SquareButton from '../../atoms/SquareButton/SquareButton'
import { InputMask } from 'primereact/inputmask'

export default function Verification({ ver }) {
    const [verification, setVerification] = useState('')
    return (
        <div className="Verification">
            {ver.title.map((t) => (
                <div className="Verification__text">{t}</div>
            ))}

            <div className="Verification__content">
                <InputMask
                    mask={ver.inputMask.mask}
                    value={verification}
                    onChange={(e) => setVerification(e.value)}
                    placeholder={ver.inputMask.placeholder}
                />
                <SquareButton text={ver.buttonTxt} />
            </div>
        </div>
    )
}
