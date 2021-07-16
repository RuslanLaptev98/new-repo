import React from 'react'
import './SquareCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'

export default function SquareCard({ squareCard }) {
    return (
        <div className="SquareCard">
            {!squareCard.background ? (
                <div className="SquareCard__nobg">
                    <CustomTxt txtArr={squareCard.text} />
                    <SquareImage image={squareCard.image} />
                </div>
            ) : (
                <div className="SquareCard__bg">
                    <SquareImage image={squareCard.image} />
                    <CustomTxt txtArr={squareCard.text} />
                </div>
            )}
        </div>
    )
}
