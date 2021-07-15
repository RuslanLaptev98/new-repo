import React from 'react'
import './LongCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import Typography from './../../atoms/Typography/Typography'
import TypographySmaller from './../../atoms/TypographySmaller/TypographySmaller'

export default function LongCard({ longCard }) {
    return (
        <div className="LongCard">
            <SquareImage image={longCard.image} />
            <Typography text={longCard.text} textColors={longCard.textColors} />
            <TypographySmaller text={longCard.smallerText} />
        </div>
    )
}
