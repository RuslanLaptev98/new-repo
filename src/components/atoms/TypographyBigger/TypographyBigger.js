import React from 'react'
import './TypographyBigger.css'

export default function TypographyBigger({ text, textColors }) {
    const renderedText = () => {
        switch (true) {
            case Boolean(text.fifthPart):
                return (
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
                        <br />
                        <span className={textColors.fifthPart}>
                            {text.fifthPart}
                        </span>
                    </>
                )
            case Boolean(text.fourthPart):
                return (
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
                )
            case Boolean(text.thirdPart):
                return (
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
                )
            case Boolean(text.secondPart):
                return (
                    <>
                        <span className={textColors.firstPart}>
                            {text.firstPart}
                        </span>{' '}
                        <span className={textColors.secondPart}>
                            {text.secondPart}
                        </span>
                    </>
                )
            default:
                return (
                    <>
                        <span className={textColors.firstPart}>
                            {text.firstPart}
                        </span>
                    </>
                )
        }
    }
    return <div className="TypographyBigger">{renderedText()}</div>
}
