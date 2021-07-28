import React, { useState } from 'react'
import './WeekDay.css'

export default function WeekDay({ text }) {
    const [selected, setSelected] = useState(false)
    return (
        <div
            className={selected ? 'WeekDay WeekDay-selected' : 'WeekDay'}
            onClick={() => setSelected(!selected)}
        >
            {text}
        </div>
    )
}
