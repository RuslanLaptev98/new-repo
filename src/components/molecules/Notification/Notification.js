import React, { useState, useEffect } from 'react'
import './Notification.css'

export default function Notification({ notification }) {
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        setToggle(notification.on)
    }, [])
    return (
        <div className="Notification">
            <div className="Notification__content">
                <div className="Notification__title">{notification.title}</div>
                <div className="Notification__subtitle">
                    {notification.subtitle}
                </div>
            </div>
            <div
                className={
                    toggle
                        ? 'Notification__toggle Notification__toggle-active'
                        : 'Notification__toggle'
                }
                onClick={() => setToggle(!toggle)}
            >
                <div className="Notification__togglecircle"></div>
            </div>
        </div>
    )
}
