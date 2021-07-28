import React from 'react'
import './Tab.css'

export default function Tab({ text, id, mode, setMode }) {
    return (
        <div
            className={id === mode ? 'Tab Tab-active' : 'Tab'}
            onClick={() => setMode(id)}
        >
            {text}
        </div>
    )
}
