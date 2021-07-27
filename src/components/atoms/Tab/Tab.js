import React from 'react'
import './Tab.css'

export default function Tab({ text, id, active, setActive }) {
    return (
        <div
            className={id === active ? 'Tab Tab-active' : 'Tab'}
            onClick={() => setActive(id)}
        >
            {text}
        </div>
    )
}
