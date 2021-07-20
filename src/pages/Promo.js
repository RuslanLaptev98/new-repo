import React from 'react'
import JointCard from '../components/organisms/JointCard/JointCard'
import maincard_1 from '../assets/maincard-images/mc-image-1.svg'
import maincard_2 from '../assets/maincard-images/mc-image-2.svg'
import maincard_3 from '../assets/maincard-images/mc-image-3.svg'
import maincard_4 from '../assets/maincard-images/mc-image-4.svg'
import { findAllByText } from '@testing-library/react'

export default function Promo() {
    /* Переменные для цветов и стилей текста */
    const colors = {
        main: 'var(--main-text-color)',
        accent: 'var(--accent-text-color)',
        dynamic: 'var(--dynamic-text-color)',
    }
    const styles = {
        title: {
            fontSize: '30px',
            fontWeight: 'var(--title-font-weight)',
            textTransform: 'uppercase',
        },
        titleParent: {
            paddingLeft: '38px',
            paddingTop: '32px',
        },
        textNormal: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
            textAlign: 'left',
        },
        textBold: {
            fontSize: '16px',
            fontWeight: '800',
            lineHeight: '24px',
            textAlign: 'left',
        },
        time: {
            fontSize: '30px',
            fontWeight: '800',
            lineHeight: '24px',
        },
    }

    /* массив основных карточек */
    const mainCards = [
        {
            title: {
                txtArr: [
                    {
                        text: 'продвинуть в ',
                        color: colors.main,
                        styles: styles.title,
                    },
                    {
                        text: 'рекомендациях',
                        color: colors.accent,
                        styles: styles.title,
                    },
                ],
                customCss: styles.titleParent,
            },
            image: maincard_1,
        },
        {
            title: {
                txtArr: [
                    {
                        text: 'продвинуть товар в ',
                        color: colors.main,
                        styles: styles.title,
                    },
                    {
                        text: 'своей категории',
                        color: colors.accent,
                        styles: styles.title,
                    },
                ],
                customCss: styles.titleParent,
            },
            image: maincard_2,
        },
        {
            title: {
                txtArr: [
                    {
                        text: 'отчет',
                        color: colors.accent,
                        styles: styles.title,
                    },
                ],
                customCss: styles.titleParent,
            },
            image: maincard_3,
        },
        {
            title: {
                txtArr: [
                    {
                        text: 'подписка',
                        color: colors.accent,
                        styles: styles.title,
                    },
                ],
                customCss: styles.titleParent,
            },
            image: maincard_4,
        },
    ]

    /* массив карточек с ценой */
    const priceCards = [
        {
            price: {
                current: '109',
                prev: '169',
            },
            sale: true,
            text: [
                {
                    txtArr: [
                        {
                            blockable: [
                                {
                                    text: 'Будьте всегда в топе.',
                                    color: colors.accent,
                                    styles: styles.textBold,
                                },
                                {
                                    text: 'Ваш товар прямо на главной',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                                {
                                    text: 'странице в "рекомендациях"',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                            ],
                        },
                    ],
                    customCss: {
                        height: '227px',
                    },
                },
            ],
            arrow: '',
            button: true,
            timeLeft: '',
            sizeBig: false,
        },
        {
            price: {
                current: '78',
                prev: '120',
            },
            sale: true,
            text: [
                {
                    txtArr: [
                        {
                            text: 'Количество мест: ',
                            color: colors.main,
                            styles: styles.textNormal,
                        },
                        {
                            text: '3',
                            color: colors.dynamic,
                            styles: styles.textBold,
                        },
                    ],
                },
                {
                    txtArr: [
                        {
                            blockable: [
                                {
                                    text: 'Получите преимущество.',
                                    color: colors.accent,
                                    styles: styles.textBold,
                                },
                                {
                                    text: 'Ваш товар всегда на первых',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                                {
                                    text: 'позициях в категории,',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                                {
                                    text: 'которую вы выбрали.',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                            ],
                        },
                    ],
                },
            ],
            arrow: '',
            button: false,
            timeLeft: {
                txtArr: [
                    {
                        text: '12 : 43 : 27',
                        color: colors.dynamic,
                        styles: styles.time,
                    },
                ],
                customCss: {},
            },
            sizeBig: false,
        },
        {
            price: {
                current: '90',
                prev: '',
            },
            sale: false,
            text: [
                {
                    txtArr: [
                        {
                            blockable: [
                                {
                                    text: 'Увеличивайте свою прибыль.',
                                    color: colors.accent,
                                    styles: styles.textBold,
                                },
                                {
                                    text: 'Отчет покажет вам статистику',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                                {
                                    text: 'ваших продаж, заработка,',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                                {
                                    text: 'клики на ваши товары',
                                    color: colors.main,
                                    styles: styles.textNormal,
                                },
                            ],
                        },
                    ],
                    customCss: {
                        height: '227px',
                    },
                },
            ],
            arrow: 'bottom',
            button: true,
            timeLeft: '',
            sizeBig: false,
        },
        {
            price: {
                current: '150',
                prev: '',
            },
            sale: false,
            text: [
                {
                    txtArr: [
                        {
                            text: '1. Новый и яркий профиль',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                        {
                            text: 'удвоит ваш доход!',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                    ],
                },
                {
                    txtArr: [
                        {
                            text: '2. ',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                        {
                            text: 'Получите ',
                            color: colors.main,
                            styles: styles.textNormal,
                        },
                        {
                            text: 'новую карточку',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                        {
                            text: 'товара - ',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                        {
                            text: 'сделает ваши товары',
                            color: colors.main,
                            styles: styles.textNormal,
                        },
                        {
                            text: 'еще заметнее!',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                    ],
                },
                {
                    txtArr: [
                        {
                            text: '3. скидка в 35% ',
                            color: colors.accent,
                            styles: styles.textBold,
                        },
                        {
                            text: 'на услуги',
                            color: colors.main,
                            styles: styles.textNormal,
                        },

                        {
                            text: 'продвижения',
                            color: colors.main,
                            styles: styles.textNormal,
                        },
                    ],
                },
            ],
            arrow: 'top',
            button: false,
            timeLeft: {
                txtArr: [
                    {
                        text: '27 дней',
                        color: colors.dynamic,
                        styles: styles.time,
                    },
                ],
                customCss: {
                    marginTop: '0px',
                },
            },
            sizeBig: true,
        },
    ]
    return (
        <div className="Promo">
            {mainCards.map((card, i) => (
                <JointCard mainCard={mainCards[i]} priceCard={priceCards[i]} />
            ))}
        </div>
    )
}
