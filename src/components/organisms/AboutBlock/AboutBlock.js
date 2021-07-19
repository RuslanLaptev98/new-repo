import React from 'react'
import './AboutBlock.css'
import Title from '../../molecules/Title/Title'
import Background from '../../atoms/Background/Background'
import LongCard from '../../molecules/LongCard/LongCard'
import SquareCard from '../../molecules/SquareCard/SquareCard'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'

export default function AboutBlock({
    type,
    title,
    longCards,
    squareCards,
    background,
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
                    {longCards.map((longCard, index) => (
                        <LongCard
                            longCard={longCards[index]}
                            longCardPosition={
                                index % 2 === 1
                                    ? 'LongCard-right'
                                    : 'LongCard-left'
                            }
                            index={index}
                        />
                    ))}
                    <div className="AboutBlock__background">
                        <Background className={background} />
                    </div>
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
                <div className="AboutBlock-third">
                    {/* Третий блок с параграфом */}
                    <Title title={title} />
                    <CustomTxt
                        txtArr={paragraph.txtArr}
                        customCss={paragraph.customCss}
                    />
                    <div className="AboutBlock__background">
                        <Background className={background} />
                    </div>
                </div>
            )}
        </div>
    )
}
