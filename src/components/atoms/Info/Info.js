import React from 'react'
import './Info.css'

export default function Info({ text, value }) {
    return (
        <div className="Info">
            {text} <span className="Info__value">{value}</span>
        </div>
    )
}
