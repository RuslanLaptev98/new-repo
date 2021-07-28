import React from 'react'
import './Tabs.css'
import Tab from '../../atoms/Tab/Tab'

export default function Tabs({ mode, setMode }) {
    const tabsTxt = [
        'профиль',
        'личные данные',
        'двухфакторная аутентификация',
        'уведомления',
        'аренда',
        'способ оплаты',
    ]
    return (
        <div className="Tabs">
            {tabsTxt.map((tab, i) => (
                <Tab text={tab} id={i} mode={mode} setMode={setMode} key={i} />
            ))}
        </div>
    )
}
