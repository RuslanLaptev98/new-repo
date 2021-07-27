import React from 'react'
import './Settings.css'
import Tabs from '../../components/molecules/Tabs/Tabs'
import PaymentMethod from '../../components/organisms/PaymentMethod/PaymentMethod'

export default function Settings() {
    return (
        <div className="Settings">
            <div className="Settings__title">Настройки</div>
            <Tabs />
            <PaymentMethod />
        </div>
    )
}
