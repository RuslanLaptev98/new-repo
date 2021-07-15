import React from 'react'
import './SquareCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import Typography from './../../atoms/Typography/Typography'

export default function SquareCard({ squareCard }) {
    return (
        <div className="SquareCard">
            <SquareImage image={squareCard.image} />
            <Typography
                text={squareCard.text}
                textColors={squareCard.textColors}
            />
        </div>
    )
}
