import React from 'react'
import './Tab.css'

export default function Tab({ tab, mode, setMode }) {
    return (
        <div
            className={tab.id === mode ? 'Tab Tab-active' : 'Tab'}
            onClick={() => setMode(tab.id)}
        >
            {tab.title}
        </div>
    )
}
