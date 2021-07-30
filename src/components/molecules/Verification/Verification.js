import React, { useState } from 'react'
import './Verification.css'
import SquareButton from '../../atoms/SquareButton/SquareButton'
import { InputMask } from 'primereact/inputmask'

export default function Verification({ ver, maskType }) {
    const [verification, setVerification] = useState('')
    let mask
    maskType === 0
        ? (mask = {
              placeholder: 'X (XXX) XXX-XX-XX',
              mask: '9 (999) 999 - 99 - 99',
          })
        : (mask = { placeholder: 'X X X X X X', mask: '9 9 9 9 9 9' })

    return (
        <div className="Verification">
            {ver.title.map((t) => (
                <div className="Verification__text">{t}</div>
            ))}

            <div className="Verification__content">
                <InputMask
                    mask={mask.mask}
                    value={verification}
                    onChange={(e) => setVerification(e.value)}
                    placeholder={mask.placeholder}
                />
                <SquareButton text={ver.buttonTxt} />
            </div>
        </div>
    )
}
