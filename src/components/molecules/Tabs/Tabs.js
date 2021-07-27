import React, { useState } from 'react'
import './Tabs.css'
import Tab from '../../atoms/Tab/Tab'

export default function Tabs() {
    const [active, setActive] = useState(0)
    return (
        <div className="Tabs">
            <Tab text="профиль" id={0} active={active} setActive={setActive} />
            <Tab
                text="личные данные"
                id={1}
                active={active}
                setActive={setActive}
            />
            <Tab
                text="двухфакторная идентификация"
                id={2}
                active={active}
                setActive={setActive}
            />
            <Tab
                text="уведомления"
                id={3}
                active={active}
                setActive={setActive}
            />
            <Tab text="аренда" id={4} active={active} setActive={setActive} />
            <Tab
                text="способ оплаты"
                id={5}
                active={active}
                setActive={setActive}
            />
        </div>
    )
}
