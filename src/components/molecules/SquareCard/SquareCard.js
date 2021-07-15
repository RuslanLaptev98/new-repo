import React from 'react'
import './SquareCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import Typography from './../../atoms/Typography/Typography'

export default function SquareCard({ squareCard }) {
    return (
        <div className="SquareCard">
            {!squareCard.background ? (
                <div className="SquareCard__nobg">
                    <Typography
                        text={squareCard.text}
                        textColors={squareCard.textColors}
                    />
                    <SquareImage image={squareCard.image} />
                </div>
            ) : (
                <div className="SquareCard__bg">
                    <SquareImage image={squareCard.image} />
                    <Typography
                        text={squareCard.text}
                        textColors={squareCard.textColors}
                    />
                </div>
            )}
        </div>
    )
}
