import React from 'react'
import './CardImage.css'

export default function CardImage({ image }) {
    const img = {
        backgroundImage: `url(${image})`,
    }
    return <div className="CardImage" style={img}></div>
}
