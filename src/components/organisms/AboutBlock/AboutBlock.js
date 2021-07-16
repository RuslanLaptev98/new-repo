import React from 'react'
import './AboutBlock.css'
import Title from '../../molecules/Title/Title'
import Background from '../../atoms/Background/Background'
import LongCard from '../../molecules/LongCard/LongCard'
import SquareCard from '../../molecules/SquareCard/SquareCard'
import SquareImage from '../../atoms/SquareImage/SquareImage'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'

export default function AboutBlock({
    type,
    title,
    sideImages,
    background,
    longCards,
    squareCards,
}) {
    /* Параграф для третьего блока */
    const paragraph = {
        txtArr: [
            {
                text: 'При создании Попрошу мы учли все минусы нынешних сайтов и создали тот сервис, который собрал в себе все только необходимое для',
                color: 'var(--main-text-color)',
                styles: {},
            },
            {
                text: 'быстрой и безопасной аренды,',
                color: 'var(--accent-text-color)',
                styles: {},
            },
            {
                text: 'а также для',
                color: 'var(--main-text-color)',
                styles: {},
            },
            {
                text: 'эффективного продвижения.',
                color: 'var(--accent-text-color)',
                styles: {},
            },
            {
                blockable: [
                    {
                        text: 'Единый сервис аренды вещей скоро по всей России',
                        color: 'var(--main-text-color)',
                        styles: {},
                    },
                ],
            },
        ],
        customCss: {
            fontSize: 'var(--biggertext-font-size)',
            fontWeight: 'var(--biggertext-font-weight)',
            textAlign: 'center',
            lineHeight: '30px',
            margin: 'auto',
            maxWidth: '957px',
        },
    }

    return (
        <div className="AboutBlock">
            {type === 0 ? (
                <>
                    {/* Первый блок с длинными карточками */}
                    <Title title={title} />
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
            ) : type === 1 ? (
                <>
                    {/* Второй блок с квадратными карточками */}
                    <Title title={title} />
                    <div className="AboutBlock__squarecards">
                        {squareCards.map((squareCard, index) => (
                            <SquareCard squareCard={squareCards[index]} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    {/* Третий блок с параграфом */}
                    <Title title={title} />
                    <CustomTxt
                        txtArr={paragraph.txtArr}
                        customCss={paragraph.customCss}
                    />
                    <Background className={background} />
                </>
            )}
        </div>
    )
}
