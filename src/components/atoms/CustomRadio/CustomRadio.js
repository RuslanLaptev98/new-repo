import React from 'react'
import './CustomRadio.css'
import { TiTick } from 'react-icons/ti'

export default function CustomRadio({ active, setActive, radio }) {
    return (
        <div className="CustomRadio" onClick={() => setActive(radio.id)}>
            <div
                className={
                    active === radio.id
                        ? `CustomRadio__tick CustomRadio__tick-active`
                        : 'CustomRadio__tick'
                }
                onClick={() => (active = radio.id)}
            >
                {active === radio.id ? <TiTick fill="#fff" /> : null}
            </div>
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
