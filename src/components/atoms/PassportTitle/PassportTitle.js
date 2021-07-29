import React from 'react'
import './PassportTitle.css'
import shield from './shield.svg'

export default function PassportTitle() {
    return (
        <div className="PassportTitle">
            <p className="PassportTitle__title">Подтверждение паспорта:</p>
            <p className="ContractData__description">
                Делает Вас надежным арендодателем
            </p>
            <img
                src={shield}
                alt=""
                style={{
                    position: 'relative',
                    top: -35,
                    left: 200,
                }}
            />
        </div>
    )
}
