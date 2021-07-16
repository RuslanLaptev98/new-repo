import React from 'react'
import AboutBlock from '../components/organisms/AboutBlock/AboutBlock'
import longcard_1 from '../assets/longcards/longcard_1.svg'
import longcard_2 from '../assets/longcards/longcard_2.svg'
import longcard_3 from '../assets/longcards/longcard_3.svg'
import longcard_4 from '../assets/longcards/longcard_4.svg'
import longcard_5 from '../assets/longcards/longcard_5.svg'
import longcard_6 from '../assets/longcards/longcard_6.svg'
import longcard_7 from '../assets/longcards/longcard_7.svg'
import squarecard_1 from '../assets/squarecards/money-bag.svg'
import squarecard_2 from '../assets/squarecards/bar-chart.svg'
import squarecard_3 from '../assets/squarecards/hand-shake.svg'
import squarecard_4 from '../assets/squarecards/trolley.svg'
import squarecard_5 from '../assets/squarecards/wallet.svg'
import squarecard_6 from '../assets/squarecards/arrow-forward.svg'
import sideimage_1 from '../assets/sideimages/headphones.svg'
import sideimage_2 from '../assets/sideimages/switch.svg'
import sideimage_3 from '../assets/sideimages/sofa.svg'
import sideimage_4 from '../assets/sideimages/scooter.svg'

export default function About() {
    /* Переменные для цветов и стилей текста */
    const colors = {
        main: 'var(--main-text-color)',
        accent: 'var(--accent-text-color)',
    }
    const styles = {
        longCard: {
            fontSize: 'var(--text-font-size)',
            fontWeight: 'var(--text-font-weight)',
        },
        squareCard: {
            lineHeight: '30px',
            fontSize: 'var(--text-font-size)',
            fontWeight: 'var(--text-font-weight)',
        },
    }
    /* Изображения первого блока */
    const sideImages = [
        {
            src: sideimage_1,
            alt: 'headphones',
            className:
                'SquareImage-sideimage SquareImage-sideimage-left SquareImage-sideimage-top',
        },
        {
            src: sideimage_2,
            alt: 'switchblades',
            className:
                'SquareImage-sideimage SquareImage-sideimage-right SquareImage-sideimage-top',
        },
        {
            src: sideimage_3,
            alt: 'sofa',
            className:
                'SquareImage-sideimage SquareImage-sideimage-left SquareImage-sideimage-bottom',
        },
        {
            src: sideimage_4,
            alt: 'scooter',
            className:
                'SquareImage-sideimage SquareImage-sideimage-right SquareImage-sideimage-bottom',
        },
    ]

    /* Массив тайтлов */
    const titles = [
        {
            titleAccent: 'почему именно мы',
            titleMain: 'и никто другой',
            titleClassName: 'Title-first',
        },
        {
            titleAccent: `зачем сдавать \\ брать`,
            titleMain: 'вещи в аренду',
            titleClassName: 'Title-second',
        },
        {
            titleAccent: 'о создании',
            titleMain: 'сервиса',
            titleClassName: 'Title-third',
        },
    ]

    /* Массив длинных карточек */
    const longCards = [
        {
            image: {
                src: longcard_1,
                alt: '1',
                className: 'SquareImage-longcard-left',
            },
            text: [
                {
                    text: 'Комиссия 10%',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    text: 'с каждой сделки, меньше вы не найдёте!',
                    color: colors.main,
                    styles: styles.longCard,
                },
            ],
        },
        {
            image: {
                src: longcard_2,
                alt: '2',
                className: 'SquareImage-longcard-right',
            },
            text: [
                {
                    text: 'Удобный',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    text: 'и практичный дизайн',
                    color: colors.main,
                    styles: styles.longCard,
                },
            ],
        },
        {
            image: {
                src: longcard_3,
                alt: '3',
                className: 'SquareImage-longcard-left',
            },
            text: [
                {
                    text: 'Сдавайте и арендуйте в',
                    color: colors.main,
                    styles: styles.longCard,
                },
                {
                    text: '4 клика!',
                    color: colors.accent,
                    styles: styles.longCard,
                },
            ],
        },
        {
            image: {
                src: longcard_4,
                alt: '4',
                className: 'SquareImage-longcard-right',
            },
            text: [
                {
                    text: 'Онлайн договор',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    text: 'аренды прямо на сайте',
                    color: colors.main,
                    styles: styles.longCard,
                },
            ],
        },
        {
            image: {
                src: longcard_5,
                alt: '5',
                className: 'SquareImage-longcard-left',
            },
            text: [
                {
                    text: 'Аренда осуществляется через',
                    color: colors.main,
                    styles: styles.longCard,
                },
                {
                    text: 'безопасную сделку',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    blockable: [
                        {
                            text: 'Холдинг средств на сайте вплоть до конца сроков аренды',
                            color: colors.main,
                            styles: {
                                fontSize: 'var(--smallertext-font-size)',
                                fontWeight: 'var(--smallertext-font-weight)',
                            },
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: longcard_6,
                alt: '6',
                className: 'SquareImage-longcard-right',
            },
            text: [
                {
                    text: 'Инструменты для',
                    color: colors.main,
                    styles: styles.longCard,
                },
                {
                    text: 'продвижения',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    text: 'ваших товаров',
                    color: colors.main,
                    styles: styles.longCard,
                },
            ],
        },
        {
            image: {
                src: longcard_7,
                alt: '7',
                className: 'SquareImage-longcard-left',
            },
            text: [
                {
                    blockable: [
                        {
                            text: 'Новым пользователям',
                            color: colors.main,
                            styles: styles.longCard,
                        },
                    ],
                },
                {
                    text: 'бесплатный месяц подписки',
                    color: colors.accent,
                    styles: styles.longCard,
                },
                {
                    text: 'на сервисе',
                    color: colors.main,
                    styles: styles.longCard,
                },
            ],
        },
    ]

    /* Массив квадратных карточек */
    const squareCards = [
        {
            image: {
                src: squarecard_1,
                alt: 'money bag',
                className: 'SquareImage-squarecard-top',
            },
            background: true,
            text: [
                {
                    blockable: [
                        {
                            text: 'Не переплачивайте за товары,',
                            color: colors.accent,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'которыми воспользуетесь',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'один раз',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: squarecard_2,
                alt: 'bar chart',
                className: 'SquareImage-squarecard-top',
            },
            background: true,
            text: [
                {
                    blockable: [
                        {
                            text: 'Пробуйте и тестируйте',
                            color: colors.accent,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'вещи перед покупкой',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: squarecard_3,
                alt: 'hand shake',
                className: 'SquareImage-squarecard-top',
            },
            background: true,
            text: [
                {
                    blockable: [
                        {
                            text: 'Аренда - это всегда',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'выгодно',
                            color: colors.accent,
                            styles: styles.squareCard,
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: squarecard_4,
                alt: 'trolley',
                className: 'SquareImage-squarecard-top',
            },
            background: true,
            text: [
                {
                    text: 'Освободите место',
                    color: colors.accent,
                    styles: styles.squareCard,
                },
                {
                    text: 'в квартире',
                    color: colors.main,
                    styles: styles.squareCard,
                },
                {
                    blockable: [
                        {
                            text: 'от хлама, которым давно',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'не пользуетесь',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: squarecard_5,
                alt: 'wallet',
                className: 'SquareImage-squarecard-top',
            },
            background: true,
            text: [
                {
                    blockable: [
                        {
                            text: 'Зарабатывайте',
                            color: colors.accent,
                            styles: styles.squareCard,
                        },
                        {
                            text: 'не выходя из дома',
                            color: colors.main,
                            styles: styles.squareCard,
                        },
                    ],
                },
            ],
        },
        {
            image: {
                src: squarecard_6,
                alt: 'right-arrow',
                className: 'SquareImage-squarecard-bottom',
            },
            background: false,
            text: [
                {
                    text: 'Попробовать бесплатно',
                    color: colors.accent,
                    styles: styles.squareCard,
                },
            ],
        },
    ]

    return (
        <div className="About">
            <AboutBlock
                type={0}
                title={titles[0]}
                sideImages={sideImages}
                background="Background-big"
                longCards={longCards}
            />
            <AboutBlock type={1} title={titles[1]} squareCards={squareCards} />
            <AboutBlock
                type={2}
                title={titles[2]}
                background="Background-small"
            />
        </div>
    )
}
