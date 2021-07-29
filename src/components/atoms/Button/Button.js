import React from 'react'
import './Button.css'

export default function Button({ text, styles }) {
    return (
        <div className="Button" style={styles}>
            {text}
        </div>
    )
}
