import React from 'react'
import './Modal.css'

export default function Modal({ active, setActive }) {
    return (
        <div
            className={active ? 'Modal Modal-active' : 'Modal'}
            onClick={() => setActive(false)}
        >
            <div
                className="Modal__content"
                onClick={(e) => e.stopPropagation()}
            ></div>
        </div>
    )
}
