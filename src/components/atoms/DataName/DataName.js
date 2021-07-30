import React from 'react'
import './DataName.css'

export default function DataName({ name, className }) {
    return <div className={`DataName ${className}`}>{name}</div>
}
