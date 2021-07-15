import React from 'react'
import './Title.css'

export default function Title({ textAccent, textMain, className }) {
    return (
        <div className={`Title ${className}`}>
            <span className="Title-accent">{textAccent}</span>{' '}
            <span className="Title-main">{textMain}</span>
        </div>
    )
}
