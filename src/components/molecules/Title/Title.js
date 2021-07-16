import React from 'react'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'
import SquareImage from '../../atoms/SquareImage/SquareImage'
import './Title.css'

export default function Title({ title }) {
    return (
        <div className="Title">
            <CustomTxt txtArr={title.txtArr} customCss={title.customCss} />
            {title.imageLeft ? (
                <>
                    <SquareImage image={title.imageLeft} />
                    <SquareImage image={title.imageRight} />
                </>
            ) : (
                <></>
            )}
        </div>
    )
}
