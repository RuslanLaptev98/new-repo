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
}) {
    return (
        <div className="AboutBlock">
            <Title textAccent={title.titleAccent} textMain={title.titleMain} />

            {type === 'withLongCards' ? (
                <>
                    <SquareImage image={sideImages[0]} />
                    <SquareImage image={sideImages[1]} />
                    <LongCard longCard={longCards[0]} />
                    <LongCard longCard={longCards[1]} />
                    <LongCard longCard={longCards[2]} />
                    <LongCard longCard={longCards[3]} />
                    <LongCard longCard={longCards[4]} />
                    <LongCard longCard={longCards[5]} />
                    <LongCard longCard={longCards[6]} />
                    <SquareImage image={sideImages[2]} />
                    <SquareImage image={sideImages[3]} />
                </>
            ) : type === 'withSquareCards' ? (
                <>
                    <SquareCard squareCard={squareCards[0]} />
                    <SquareCard squareCard={squareCards[1]} />
                    <SquareCard squareCard={squareCards[2]} />
                    <SquareCard squareCard={squareCards[3]} />
                    <SquareCard squareCard={squareCards[4]} />
                    <SquareCard squareCard={squareCards[5]} />
                </>
            ) : (
                <TypographyBigger
                    text={paragraph.text}
                    textColors={paragraph.textColors}
                />
            )}

            <Background />
        </div>
    )
}
