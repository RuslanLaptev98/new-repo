import React from 'react'
import './Typography.css'

export default function Typography({ text, textColors }) {
    const renderedText = () => {
        switch (true) {
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
    return <div className="Typography">{renderedText()}</div>
}
