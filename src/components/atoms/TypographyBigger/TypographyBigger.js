import React from 'react'
import './TypographyBigger.css'

export default function TypographyBigger({ text, textColors }) {
    return (
        <div className="TypographyBigger">
            {text.fifthPart ? (
                <>
                    <span className={textColors.firstPart}>
                        {text.firstPart}
                    </span>{' '}
                    <span className={textColors.secondPart}>
                        {text.secondPart}
                    </span>{' '}
                    <span className={textColors.thirdPart}>
                        {text.thirdPart}
                    </span>{' '}
                    <span className={textColors.fourthPart}>
                        {text.fourthPart}
                    </span>{' '}
                    <span className={textColors.fifthPart}>
                        {text.fifthPart}
                    </span>
                </>
            ) : text.fourthPart ? (
                <>
                    <span className={textColors.firstPart}>
                        {text.firstPart}
                    </span>{' '}
                    <span className={textColors.secondPart}>
                        {text.secondPart}
                    </span>{' '}
                    <span className={textColors.thirdPart}>
                        {text.thirdPart}
                    </span>{' '}
                    <span className={textColors.fourthPart}>
                        {text.fourthPart}
                    </span>
                </>
            ) : text.thirdPart ? (
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
