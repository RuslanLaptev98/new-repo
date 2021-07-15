import React from 'react'
import './SquareImage.css'

export default function SquareImage({ image }) {
    return <img src={image.src} alt={image.alt} className={image.className} />
}
