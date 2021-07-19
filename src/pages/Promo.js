import React from 'react'
import JointCard from '../components/organisms/JointCard/JointCard'
import maincard_1 from '../assets/maincard-images/mc-image-1.svg'
import maincard_2 from '../assets/maincard-images/mc-image-2.svg'
import maincard_3 from '../assets/maincard-images/mc-image-3.svg'
import maincard_4 from '../assets/maincard-images/mc-image-4.svg'

export default function Promo() {
    /* Переменные для цветов и стилей текста */
    const colors = {
        main: 'var(--main-text-color)',
        accent: 'var(--accent-text-color)',
        green: '#3CBF32',
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
        },
        textBold: {
            fontSize: '16px',
            fontWeight: '800',
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
            text: {
                txtArr: [
                    {
                        blockable: [
                            {
                                text: 'Будьте всегда в топе.',
                                color: '#FFB400',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textBold,
                                },
                            },
                            {
                                text: 'Ваш товар прямо на главной',
                                color: '#212429',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                            {
                                text: 'странице в "рекомендациях"',
                                color: '#212429',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                        ],
                    },
                ],
                customCss: {},
            },
            arrow: '',
            button: true,
            timeLeft: '',
        },
        {
            price: {
                current: '78',
                prev: '120',
            },
            sale: true,
            text: {
                txtArr: [
                    {
                        text: 'Количество мест: ',
                        color: '#212429',
                        styles: { ...styles.textNormal },
                    },
                    {
                        text: '3',
                        color: colors.green,
                        styles: { ...styles.textBold },
                    },
                    {
                        blockable: [
                            {
                                text: 'Получите преимущество.',
                                color: '#FFB400',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textBold,
                                },
                            },
                            {
                                text: 'Ваш товар всегда на первых',
                                color: '#212429',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                            {
                                text: 'позициях в категории,',
                                color: '#212429',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                            {
                                text: 'которую вы выбрали.',
                                color: '#212429',
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                        ],
                    },
                ],
            },
            arrow: '',
            button: false,
            timeLeft: {
                txtArr: [
                    {
                        text: '12 : 43 : 27',
                        color: '#3CBF32',
                        styles: {
                            fontSize: '30px',
                            fontWeight: '800',
                            lineHeight: '24px',
                        },
                    },
                ],
                customCss: {
                    marginTop: '0px',
                },
            },
        },
        {
            price: {
                current: '90',
                prev: '',
            },
            sale: false,
            text: {
                txtArr: [
                    {
                        blockable: [
                            {
                                text: 'Увеличивайте свою прибыль.',
                                color: colors.accent,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textBold,
                                },
                            },
                            {
                                text: 'Отчет покажет вам статистику',
                                color: colors.main,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                            {
                                text: 'ваших продаж, заработка.',
                                color: colors.main,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                            {
                                text: 'клики на ваши товары',
                                color: colors.main,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textNormal,
                                },
                            },
                        ],
                    },
                ],
            },
            arrow: 'bottom',
            button: true,
            timeLeft: '',
        },
        {
            price: {
                current: '150',
                prev: '',
            },
            sale: false,
            text: {
                txtArr: [
                    {
                        blockable: [
                            {
                                text: '1. Новый и яркий профиль',
                                color: colors.accent,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textBold,
                                },
                            },
                            {
                                text: 'удвоит ваш доход!',
                                color: colors.accent,
                                styles: {
                                    textAlign: 'left',
                                    ...styles.textBold,
                                },
                            },
                        ],
                    },
                    {
                        text: '2. ',
                        color: colors.accent,
                        styles: { ...styles.textBold },
                    },
                    {
                        text: 'Получите ',
                        color: colors.main,
                        styles: { ...styles.textNormal },
                    },
                    {
                        text: 'новую карточку',
                        color: colors.accent,
                        styles: { ...styles.textBold },
                    },
                    {
                        text: 'товара - ',
                        color: colors.accent,
                        styles: { ...styles.textBold },
                    },
                    {
                        text: 'сделает ваши товары',
                        color: colors.main,
                        styles: { ...styles.textNormal },
                    },
                    {
                        text: 'еще заметнее!',
                        color: colors.accent,
                        styles: { ...styles.textBold },
                    },

                    {
                        text: '3. скидка в 35% ',
                        color: colors.accent,
                        styles: { ...styles.textBold },
                    },
                    {
                        text: 'на услуги',
                        color: colors.main,
                        styles: { ...styles.textNormal },
                    },

                    {
                        text: 'продвижения',
                        color: colors.main,
                        styles: { ...styles.textNormal },
                    },
                ],
                customCss: {
                    width: '263px',
                },
            },
            arrow: 'top',
            button: false,
            timeLeft: {
                txtArr: [
                    {
                        text: '27 дней',
                        color: '#3CBF32',
                        styles: {
                            fontSize: '30px',
                            fontWeight: '800',
                            lineHeight: '24px',
                        },
                    },
                ],
                customCss: {
                    marginTop: '0px',
                },
            },
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
