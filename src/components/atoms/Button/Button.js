import React from 'react'
import './Button.css'

export default function Button({ text, styles, className }) {
    return (
        <div className={`Button ${className}`} style={styles}>
            {text}
        </div>
    )
}
