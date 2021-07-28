import React from 'react'
import './SectionTitle.css'

export default function SectionTitle({ title, styles }) {
    return (
        <div className="SectionTitle" style={styles}>
            {title}
        </div>
    )
}
