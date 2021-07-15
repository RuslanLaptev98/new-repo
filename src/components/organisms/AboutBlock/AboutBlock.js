import React from 'react'
import './AboutBlock.css'
import Title from '../../atoms/Title/Title'
import TypographyBigger from '../../atoms/TypographyBigger/TypographyBigger'
import Background from '../../atoms/Background/Background'
import LongCard from '../../molecules/LongCard/LongCard'
import SquareCard from '../../molecules/SquareCard/SquareCard'
import SquareImage from '../../atoms/SquareImage/SquareImage'

export default function AboutBlock({
    type,
    title,
    longCards,
    squareCards,
    paragraph,
    sideImages,
    background,
}) {
    return (
        <div className="AboutBlock">
            {type === 'withLongCards' ? (
                <>
                    <Title
                        textAccent={title.titleAccent}
                        textMain={title.titleMain}
                        className={title.titleClassName}
                    />
                    <SquareImage image={sideImages[0]} />
                    <SquareImage image={sideImages[1]} />
                    {longCards.map((longCard, index) => (
                        <LongCard
                            longCard={longCards[index]}
                            longCardPosition={
                                index % 2 === 1
                                    ? 'LongCard-right'
                                    : 'LongCard-left'
                            }
                        />
                    ))}
                    <SquareImage image={sideImages[2]} />
                    <SquareImage image={sideImages[3]} />
                    <Background className={background} />
                </>
            ) : type === 'withSquareCards' ? (
                <>
                    <Title
                        textAccent={title.titleAccent}
                        textMain={title.titleMain}
                        className={title.titleClassName}
                    />
                    <div className="AboutBlock__squarecards">
                        {squareCards.map((squareCard, index) => (
                            <SquareCard squareCard={squareCards[index]} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <Title
                        textAccent={title.titleAccent}
                        textMain={title.titleMain}
                        className={title.titleClassName}
                    />
                    <TypographyBigger
                        text={paragraph.text}
                        textColors={paragraph.textColors}
                    />
                    <Background className={background} />
                </>
            )}
        </div>
    )
}
