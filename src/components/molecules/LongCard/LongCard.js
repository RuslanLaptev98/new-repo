import React from 'react'
import './LongCard.css'
import SquareImage from './../../atoms/SquareImage/SquareImage'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'

export default function LongCard({ longCardPosition, longCard }) {
    return (
        <div className={`LongCard ${longCardPosition}`}>
            <SquareImage image={longCard.image} />
            <CustomTxt txtArr={longCard.text} />
        </div>
    )
}
