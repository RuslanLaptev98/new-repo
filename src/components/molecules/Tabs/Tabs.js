import React from 'react'
import './Tabs.css'
import Tab from '../../atoms/Tab/Tab'

export default function Tabs({ mode, setMode }) {
    const tabs = [
        { id: 0, title: 'профиль' },
        { id: 1, title: 'личные данные' },
        { id: 2, title: 'двухфакторная аутентификация' },
        { id: 3, title: 'уведомления' },
        { id: 4, title: 'аренда' },
        { id: 5, title: 'способ оплаты' },
    ]
    return (
        <div className="Tabs">
            {tabs.map((tab) => (
                <Tab tab={tab} mode={mode} setMode={setMode} key={tab.id} />
            ))}
        </div>
    )
}
