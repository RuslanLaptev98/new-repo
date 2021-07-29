import React from 'react'
import './CustomRadio.css'
import tick from './tick.svg'

export default function CustomRadio({ active, setActive, radio }) {
    return (
        <div className="CustomRadio" onClick={() => setActive(radio.id)}>
            <div
                className="CustomRadio__tick"
                style={
                    active === radio.id
                        ? {
                              backgroundImage: `url(${tick})`,
                          }
                        : {}
                }
                onClick={() => (active = radio.id)}
            ></div>
            <div
                className={
                    active === radio.id
                        ? 'CustomRadio__text CustomRadio__text-active'
                        : 'CustomRadio__text'
                }
            >
                {radio.text}
            </div>
        </div>
    )
}
