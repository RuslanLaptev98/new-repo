import React from 'react'

export default function TypographyBigger({
    textFirstPart,
    textFirstPartColor,
    textSecondPart,
    textSecondPartColor,
    textThirdPart,
    textThirdPartColor,
    textFourthPart,
    textFourthPartColor,
    textFifthPart,
    textFifthPartColor,
}) {
    return (
        <div className="TypographyBigger">
            {textFifthPart ? (
                <>
                    <span className={textFirstPartColor}>{textFirstPart}</span>{' '}
                    <span className={textSecondPartColor}>
                        {textSecondPart}
                    </span>{' '}
                    <span className={textThirdPartColor}>{textThirdPart}</span>{' '}
                    <span className={textFourthPartColor}>
                        {textFourthPart}
                    </span>{' '}
                    <span className={textFifthPartColor}>{textFifthPart}</span>
                </>
            ) : textFourthPart ? (
                <>
                    <span className={textFirstPartColor}>{textFirstPart}</span>{' '}
                    <span className={textSecondPartColor}>
                        {textSecondPart}
                    </span>{' '}
                    <span className={textThirdPartColor}>{textThirdPart}</span>{' '}
                    <span className={textFourthPartColor}>
                        {textFourthPart}
                    </span>
                </>
            ) : textThirdPart ? (
                <>
                    <span className={textFirstPartColor}>{textFirstPart}</span>{' '}
                    <span className={textSecondPartColor}>
                        {textSecondPart}
                    </span>{' '}
                    <span className={textThirdPartColor}>{textThirdPart}</span>
                </>
            ) : textSecondPart ? (
                <>
                    <span className={textFirstPartColor}>{textFirstPart}</span>{' '}
                    <span className={textSecondPartColor}>
                        {textSecondPart}
                    </span>
                </>
            ) : (
                <>
                    <span className={textFirstPartColor}>{textFirstPart}</span>
                </>
            )}
        </div>
    )
}
