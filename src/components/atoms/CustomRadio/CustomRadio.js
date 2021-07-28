import React from 'react'
import './CustomRadio.css'
import tick from './tick.svg'

export default function CustomRadio({ active, setActive, id, text }) {
    return (
        <div className="CustomRadio" onClick={() => setActive(id)}>
            <div
                className="CustomRadio__tick"
                style={
                    active === id
                        ? {
                              backgroundImage: `url(${tick})`,
                          }
                        : {}
                }
                onClick={() => (active = id)}
            ></div>
            <div
                className={
                    active === id
                        ? 'CustomRadio__text CustomRadio__text-active'
                        : 'CustomRadio__text'
                }
            >
                {text}
            </div>
        </div>
    )
}
