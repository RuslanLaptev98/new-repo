import React from 'react'
import './SectionTitle.css'

export default function SectionTitle({ title, styles, className }) {
    return (
        <div className={`SectionTitle ${className}`} style={styles}>
            {title}
        </div>
    )
}
