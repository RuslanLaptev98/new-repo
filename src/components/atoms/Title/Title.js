import React from 'react'
import './Title.css'

export default function Title({ textAccent, textMain }) {
    return (
        <div className="Title">
            <span className="Title-accent">{textAccent}</span>{' '}
            <span className="Title-main">{textMain}</span>
        </div>
    )
}
