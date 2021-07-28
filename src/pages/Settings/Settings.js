import React, { useState } from 'react'
import './Settings.css'
import Tabs from '../../components/molecules/Tabs/Tabs'
import PaymentMethod from '../../components/organisms/PaymentMethod/PaymentMethod'
import Rent from '../../components/organisms/Rent/Rent'

export default function Settings() {
    const renderSwitch = (mode) => {
        switch (mode) {
            case 5:
                return <PaymentMethod />
            case 4:
                return <Rent />
            case 3:
                return <></>
            case 2:
                return <></>
            case 1:
                return <></>
            default:
                return <></>
        }
    }
    const [mode, setMode] = useState(0)
    return (
        <div className="Settings">
            <div className="Settings__title">Настройки</div>
            <Tabs mode={mode} setMode={setMode} />
            {renderSwitch(mode)}
        </div>
    )
}
