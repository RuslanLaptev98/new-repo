import React from 'react'
import './Stars.css'
import starsicon from './starsicon.svg'

export default function Stars({ stars, mode }) {
    return (
        <div className="Stars">
            {mode === 1 && <span className="Stars__numbers">{stars}/5</span>}
            <img src={starsicon} alt="" />
        </div>
    )
}
