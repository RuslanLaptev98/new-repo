import React from 'react'
import './TimeSince.css'

export default function TimeSince({ lastOnline, registration, mode }) {
    return (
        <div className="TimeSince">
            {mode === 1 ? (
                <>
                    <div className="TimeSince__item">
                        Был в сети {lastOnline} минут назад
                    </div>
                    <div className="TimeSince__item">-</div>
                    <div className="TimeSince__item">
                        На сервисе с {registration}
                    </div>
                </>
            ) : (
                <div className="TimeSince__item">{lastOnline} дней назад</div>
            )}
        </div>
    )
}
