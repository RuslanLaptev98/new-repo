import React from 'react'
import './Verification.css'
import CustomInput from '../../atoms/CustomInput/CustomInput'
import SquareButton from '../../atoms/SquareButton/SquareButton'

export default function Verification({ ver }) {
    return (
        <div className="Verification">
            {ver.text.map((t) => (
                <div className="Verification__text">{t}</div>
            ))}

            <div className="Verification__content">
                <CustomInput
                    type={0}
                    styles={{
                        width: '330px',
                        height: '46px',
                    }}
                />
                <SquareButton text={ver.buttonTxt} />
            </div>
        </div>
    )
}
