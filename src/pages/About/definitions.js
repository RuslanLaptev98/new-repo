import { AiOutlineArrowRight } from 'react-icons/ai'
import imageBarChart from './definitions-images/bar-chart.svg'
import imageHandShake from './definitions-images/hand-shake.svg'
import imageMoneyBag from './definitions-images/money-bag.svg'
import imageTrolley from './definitions-images/trolley.svg'
import imageWallet from './definitions-images/wallet.svg'

export const aboutCardLong = {
    title: [
        {
            text: 'Почему именно мы  ',
            color: '#FFB400',
        },
        {
            text: 'и никто другой',
            color: '#212429',
        },
    ],
    aboutCard: [
        {
            id: 1,
            txtArr: [
                {
                    text: 'Комиссия 10% ',
                    color: '#FFB400',
                },
                {
                    text: 'с каждой сделки, меньше вы не найдёте!',
                    color: '#212429',
                },
            ],
        },
        {
            id: 2,
            txtArr: [
                {
                    text: 'Удобный ',
                    color: '#FFB400',
                },
                {
                    text: 'и практичный дизайн',
                    color: '#212429',
                },
            ],
        },
        {
            id: 3,
            txtArr: [
                {
                    text: 'Сдавайте и арендуйте в ',
                    color: '#212429',
                },
                {
                    text: '4 клика!',
                    color: '#FFB400',
                },
            ],
        },
        {
            id: 4,
            txtArr: [
                {
                    text: 'Онлайн договор ',
                    color: '#FFB400',
                },
                {
                    text: 'аренды прямо на сайте ',
                    color: '#212429',
                },
            ],
        },
        {
            id: 5,
            txtArr: [
                {
                    text: 'Аренда осуществляется через ',
                    color: '#212429',
                },
                {
                    text: 'безопасную сделку',
                    color: '#FFB400',
                },
                {
                    blockable: [
                        {
                            text: 'Холдинг средств на сайте вплоть до конца сроков аренды',
                            color: '#212429',
                        },
                    ],
                },
            ],
        },
        {
            id: 6,
            txtArr: [
                {
                    text: 'Инструменты для ',
                    color: '#212429',
                },
                {
                    text: 'продвижения ',
                    color: '#FFB400',
                },
                {
                    text: 'ваших товаров',
                    color: '#212429',
                },
            ],
        },
        {
            id: 7,
            txtArr: [
                {
                    blockable: [
                        {
                            text: 'Новым пользователям',
                            color: '#212429',
                        },
                    ],
                },
                {
                    text: 'бесплатный месяц подписки ',
                    color: '#FFB400',
                },
                {
                    text: 'на сервисе',
                    color: '#212429',
                },
            ],
        },
    ],
}
export const aboutCardBox = {
    title: [
        {
            text: 'Зачем сдавать \\ брать ',
            color: '#FFB400',
        },
        {
            text: 'вещи в аренду',
            color: '#212429',
        },
    ],
    aboutCard: [
        {
            id: 1,
            image: imageMoneyBag,
            txtArr: [
                {
                    text: 'Не переплачивайте за товары, ',
                    color: '#FFB400',
                },
                {
                    text: 'которыми воспользуетесь один раз',
                    color: '#212429',
                },
            ],
        },
        {
            id: 2,
            image: imageBarChart,
            txtArr: [
                {
                    text: 'Пробуйте и тестируйте ',
                    color: '#FFB400',
                },
                {
                    text: 'перед покупкой',
                    color: '#212429',
                },
            ],
        },
        {
            id: 3,
            image: imageHandShake,
            txtArr: [
                {
                    text: 'Аренда – это всегда ',
                    color: '#212429',
                },
                {
                    text: 'выгодно',
                    color: '#FFB400',
                },
            ],
        },
        {
            id: 4,
            image: imageTrolley,
            txtArr: [
                {
                    text: 'Освободите место ',
                    color: '#FFB400',
                },
                {
                    text: 'в квартире от хлама, которым давно не пользуетесь',
                    color: '#212429',
                },
            ],
        },
        {
            id: 5,
            image: imageWallet,
            txtArr: [
                {
                    text: 'Зарабатывайте ',
                    color: '#FFB400',
                },
                {
                    text: 'не выходя из дома',
                    color: '#212429',
                },
            ],
        },
        {
            id: 6,
            nobg: true,
            image: <AiOutlineArrowRight fill="#FFB400" size="2rem" />,
            txtArr: [
                {
                    text: 'Попробовать бесплатно',
                    color: '#FFB400',
                },
            ],
        },
    ],
}
export const aboutServiceCreation = {
    paragraph: [
        {
            text: 'При создании Попрошу мы учли все минусы нынешних сайтов и создали тот сервис, который собрал в себе все только необходимое для ',
            color: '#212429',
        },
        {
            text: 'быстрой и безопасной аренды, ',
            color: '#FFB400',
        },
        {
            text: 'а также для ',
            color: '#212429',
        },
        {
            text: 'эффективного продвижения. ',
            color: '#FFB400',
        },
        {
            blockable: [
                {
                    text: 'Единый сервис аренды вещей скоро по всей России',
                    color: '#212429',
                },
            ],
        },
    ],
    title: [
        {
            text: 'о создании  ',
            color: '#FFB400',
        },
        {
            text: 'сервиса',
            color: '#212429',
        },
    ],
}
