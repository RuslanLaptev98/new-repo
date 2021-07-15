import React from 'react'
import './Typography.css'

export default function Typography({ text, textColors }) {
    return (
        <div className="Typography">
            {text.thirdPart ? (
                <>
                    <span className={textColors.firstPart}>
                        {text.firstPart}
                    </span>{' '}
                    <span className={textColors.secondPart}>
                        {text.secondPart}
                    </span>{' '}
                    <span className={textColors.thirdPart}>
                        {text.thirdPart}
                    </span>
                </>
            ) : text.secondPart ? (
                <>
                    <span className={textColors.firstPart}>
                        {text.firstPart}
                    </span>{' '}
                    <span className={textColors.secondPart}>
                        {text.secondPart}
                    </span>
                </>
            ) : (
                <>
                    <span className={textColors.firstPart}>
                        {text.firstPart}
                    </span>
                </>
            )}
        </div>
    )
}
