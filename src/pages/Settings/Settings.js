import React, { useState } from 'react'
import './Settings.css'
import Tabs from '../../components/molecules/Tabs/Tabs'
import PaymentMethod from '../../components/organisms/PaymentMethod/PaymentMethod'
import Rent from '../../components/organisms/Rent/Rent'
import Notifications from '../../components/organisms/Notifications/Notifications'
import Authentication from '../../components/organisms/Authentication/Authentication'
import PersonalData from '../../components/organisms/PersonalData/PersonalData'
import Profile from '../../components/organisms/Profile/Profile'
import ToMain from '../../components/atoms/ToMain/ToMain'

export default function Settings() {
    const renderSwitch = (mode) => {
        switch (mode) {
            case 5:
                return <PaymentMethod />
            case 4:
                return <Rent />
            case 3:
                return <Notifications />
            case 2:
                return <Authentication />
            case 1:
                return <PersonalData />
            default:
                return <Profile />
        }
    }
    const [mode, setMode] = useState(0)
    return (
        <div className="Settings">
            <div className="Settings__title">Настройки</div>
            <Tabs mode={mode} setMode={setMode} />
            {renderSwitch(mode)}
            <ToMain />
        </div>
    )
}
