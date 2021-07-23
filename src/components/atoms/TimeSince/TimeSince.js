import React from 'react'
import './TimeSince.css'

export default function TimeSince({ lastOnline, registration }) {
    return (
        <div className="TimeSince">
            {lastOnline} {registration}
        </div>
    )
}
