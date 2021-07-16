import React from 'react'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'
import './Title.css'

export default function Title({ title }) {
    return (
        <div className="Title">
            <CustomTxt txtArr={title.txtArr} customCss={title.customCss} />
        </div>
    )
}
