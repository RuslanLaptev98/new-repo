import React from 'react'
import './Verification.css'
import CustomInput from '../../atoms/CustomInput/CustomInput'
import SquareButton from '../../atoms/SquareButton/SquareButton'

export default function Verification({ text, buttonTxt }) {
    return (
        <div className="Verification">
            {text.map((t) => (
                <div className="Verification__text">{t}</div>
            ))}

            <div className="Verification__content">
                <CustomInput
                    type={0}
                    styles={{
                        width: '330px',
                        height: '46px',
                        margin: '0px',
                    }}
                />
                <SquareButton text={buttonTxt} />
            </div>
        </div>
    )
}
