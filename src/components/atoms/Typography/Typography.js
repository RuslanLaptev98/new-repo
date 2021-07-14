import React from 'react'
export default function Typography({
    textFirstPart,
    textFirstPartColor,
    textSecondPart,
    textSecondPartColor,
    textThirdPart,
    textThirdPartColor,
}) {
    return (
        <div className="Typography">
            {textThirdPart ? (
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
