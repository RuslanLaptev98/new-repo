import React from 'react'
import './PassportTitle.css'
import { BsShieldLockFill } from 'react-icons/bs'

export default function PassportTitle() {
    return (
        <div className="PassportTitle">
            <p className="PassportTitle__title">Подтверждение паспорта:</p>
            <p className="ContractData__description">
                Делает Вас надежным арендодателем
            </p>
            <BsShieldLockFill fill="#3cbf32" size="1.7rem" />
        </div>
    )
}
