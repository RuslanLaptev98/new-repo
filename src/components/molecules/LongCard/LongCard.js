import React from 'react'
import './LongCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'

export default function LongCard({ longCardPosition, longCard, index }) {
    return (
        <div className={`LongCard ${longCardPosition} LongCard-${index}`}>
            <SquareImage image={longCard.image} />
            <CustomTxt txtArr={longCard.text} />
        </div>
    )
}
