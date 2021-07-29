import React from 'react'
import './DataName.css'

export default function DataName({ name, styles }) {
    return (
        <div className="DataName" style={styles}>
            {name}
        </div>
    )
}
