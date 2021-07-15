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
                        className="Title-first"
                    />
                    <SquareImage image={sideImages[0]} />
                    <SquareImage image={sideImages[1]} />
                    <LongCard
                        longCard={longCards[0]}
                        longCardPosition={'LongCard-left'}
                    />
                    <LongCard
                        longCard={longCards[1]}
                        longCardPosition={'LongCard-right'}
                    />
                    <LongCard
                        longCard={longCards[2]}
                        longCardPosition={'LongCard-left'}
                    />
                    <LongCard
                        longCard={longCards[3]}
                        longCardPosition={'LongCard-right'}
                    />
                    <LongCard
                        longCard={longCards[4]}
                        longCardPosition={'LongCard-left'}
                    />
                    <LongCard
                        longCard={longCards[5]}
                        longCardPosition={'LongCard-right'}
                    />
                    <LongCard
                        longCard={longCards[6]}
                        longCardPosition={'LongCard-left'}
                    />
                    <SquareImage image={sideImages[2]} />
                    <SquareImage image={sideImages[3]} />
                    <Background className={background} />
                </>
            ) : type === 'withSquareCards' ? (
                <>
                    <Title
                        textAccent={title.titleAccent}
                        textMain={title.titleMain}
                        className="Title-second"
                    />
                    <div className="AboutBlock-squarecards">
                        <SquareCard squareCard={squareCards[0]} />
                        <SquareCard squareCard={squareCards[1]} />
                        <SquareCard squareCard={squareCards[2]} />
                        <SquareCard squareCard={squareCards[3]} />
                        <SquareCard squareCard={squareCards[4]} />
                        <SquareCard squareCard={squareCards[5]} />
                    </div>
                </>
            ) : (
                <>
                    <Title
                        textAccent={title.titleAccent}
                        textMain={title.titleMain}
                        className="Title-third"
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
