import React from 'react'
import './MainCard.css'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'
import LongImage from '../../atoms/LongImage/LongImage'

export default function MainCard({ title, image }) {
    return (
        <div className="MainCard">
            <CustomTxt txtArr={title.txtArr} customCss={title.customCss} />
            <LongImage image={image} />
        </div>
    )
}
