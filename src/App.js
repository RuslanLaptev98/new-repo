import AboutBlock from './components/organisms/AboutBlock/AboutBlock'
import longcard_1 from './assets/longcards/longcard_1.svg'
import longcard_2 from './assets/longcards/longcard_2.svg'
import longcard_3 from './assets/longcards/longcard_3.svg'
import longcard_4 from './assets/longcards/longcard_4.svg'
import longcard_5 from './assets/longcards/longcard_5.svg'
import longcard_6 from './assets/longcards/longcard_6.svg'
import longcard_7 from './assets/longcards/longcard_7.svg'
import squarecard_1 from './assets/squarecards/money-bag.svg'
import squarecard_2 from './assets/squarecards/bar-chart.svg'
import squarecard_3 from './assets/squarecards/hand-shake.svg'
import squarecard_4 from './assets/squarecards/trolley.svg'
import squarecard_5 from './assets/squarecards/wallet.svg'
import squarecard_6 from './assets/squarecards/arrow-forward.svg'
import sideimage_1 from './assets/sideimages/headphones.svg'
import sideimage_2 from './assets/sideimages/switch.svg'
import sideimage_3 from './assets/sideimages/sofa.svg'
import sideimage_4 from './assets/sideimages/scooter.svg'

function App() {
    /* Контент первого блока */
    const sideImages = [
        {
            src: sideimage_1,
            alt: 'headphones',
            className:
                'SquareImage__sideimage SquareImage__sideimage-left SquareImage__sideimage-top',
        },
        {
            src: sideimage_2,
            alt: 'switchblades',
            className:
                'SquareImage__sideimage SquareImage__sideimage-right SquareImage__sideimage-top',
        },
        {
            src: sideimage_3,
            alt: 'sofa',
            className:
                'SquareImage__sideimage SquareImage__sideimage-left SquareImage__sideimage-bottom',
        },
        {
            src: sideimage_4,
            alt: 'scooter',
            className:
                'SquareImage__sideimage SquareImage__sideimage-right SquareImage__sideimage-bottom',
        },
    ]
    const longCards = [
        {
            image: {
                src: longcard_1,
                alt: '1',
                className: 'SquareImage__longcard SquareImage__longcard-left',
            },
            text: {
                firstPart: 'Комиссия 10%',
                secondPart: 'с каждой сделки, меньше вы не найдёте!',
                thirdPart: '',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
                thirdPart: '',
            },
            smallerText: '',
            zIndex: 2,
        },
        {
            image: {
                src: longcard_2,
                alt: '2',
                className: 'SquareImage__longcard SquareImage__longcard-right',
            },
            text: {
                firstPart: 'Удобный',
                secondPart: 'и практичный дизайн',
                thirdPart: '',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
                thirdPart: '',
            },
            smallerText: '',
            zIndex: 3,
        },
        {
            image: {
                src: longcard_3,
                alt: '3',
                className: 'SquareImage__longcard SquareImage__longcard-left',
            },
            text: {
                firstPart: 'Сдавайте и арендуйте в',
                secondPart: '4 клика!',
                thirdPart: '',
            },
            textColors: {
                firstPart: 'Typography-main',
                secondPart: 'Typography-accent',
                thirdPart: '',
            },
            smallerText: '',
            zIndex: 4,
        },
        {
            image: {
                src: longcard_4,
                alt: '4',
                className: 'SquareImage__longcard SquareImage__longcard-right',
            },
            text: {
                firstPart: 'Онлайн договор',
                secondPart: 'аренды прямо на сайте',
                thirdPart: '',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
                thirdPart: '',
            },
            smallerText: '',
            zIndex: 5,
        },
        {
            image: {
                src: longcard_5,
                alt: '5',
                className: 'SquareImage__longcard SquareImage__longcard-left',
            },
            text: {
                firstPart: 'Аренда осуществляется через',
                secondPart: 'безопасную сделку',
                thirdPart: '',
            },
            textColors: {
                firstPart: 'Typography-main',
                secondPart: 'Typography-accent',
                thirdPart: '',
            },
            smallerText:
                'Холдинг средств на сайте вплоть до конца сроков аренды',
            zIndex: 6,
        },
        {
            image: {
                src: longcard_6,
                alt: '6',
                className: 'SquareImage__longcard SquareImage__longcard-right',
            },
            text: {
                firstPart: 'Инструменты для',
                secondPart: 'продвижения',
                thirdPart: 'ваших товаров',
            },
            textColors: {
                firstPart: 'Typography-main',
                secondPart: 'Typography-accent',
                thirdPart: 'Typography-main',
            },
            smallerText: '',
            zIndex: 7,
        },
        {
            image: {
                src: longcard_7,
                alt: '7',
                className: 'SquareImage__longcard SquareImage__longcard-left',
            },
            text: {
                firstPart: 'Новым пользователям',
                secondPart: `бесплатный месяц подписки`,
                thirdPart: 'на сервисе',
            },
            textColors: {
                firstPart: 'Typography-main',
                secondPart: 'Typography-accent',
                thirdPart: 'Typography-main',
            },
            smallerText: '',
            zIndex: 8,
        },
    ]

    /* Контент второго блока */
    const squareCards = [
        {
            image: {
                src: squarecard_1,
                alt: 'money bag',
                className: 'SquareImage__squarecard-top',
            },
            text: {
                firstPart: 'Не переплачивайте за товары,',
                secondPart: 'которыми воспользуетесь один раз',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
            },
            background: true,
        },
        {
            image: {
                src: squarecard_2,
                alt: 'bar chart',
                className: 'SquareImage__squarecard-top',
            },
            text: {
                firstPart: 'Пробуйте и тестируйте',
                secondPart: 'вещи перед покупкой',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
            },
            background: true,
        },
        {
            image: {
                src: squarecard_3,
                alt: 'hand shake',
                className: 'SquareImage__squarecard-top',
            },
            text: {
                firstPart: 'Аренда – это всегда',
                secondPart: 'выгодно',
            },
            textColors: {
                firstPart: 'Typography-main',
                secondPart: 'Typography-accent',
            },
            background: true,
        },
        {
            image: {
                src: squarecard_4,
                alt: 'trolley',
                className: 'SquareImage__squarecard-top',
            },
            text: {
                firstPart: 'Освободите место',
                secondPart: 'в квартире от хлама, которым давно не пользуйтесь',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
            },
            background: true,
        },
        {
            image: {
                src: squarecard_5,
                alt: 'wallet',
                className: 'SquareImage__squarecard-top',
            },
            text: {
                firstPart: 'Зарабатывайте',
                secondPart: 'не выходя из дома',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: 'Typography-main',
            },
            background: true,
        },
        {
            image: {
                src: squarecard_6,
                alt: 'right-arrow',
                className: 'SquareImage__squarecard-bottom',
            },
            text: {
                firstPart: 'Попробовать бесплатно',
                secondPart: '',
            },
            textColors: {
                firstPart: 'Typography-accent',
                secondPart: '',
            },
            background: false,
        },
    ]

    /* Контент третьего блока */
    const paragraph = {
        text: {
            firstPart:
                'При создании Попрошу мы учли все минусы нынешних сайтов и создали тот сервис, который собрал в себе все только необходимое для',
            secondPart: 'быстрой и безопасной аренды,',
            thirdPart: 'а также для',
            fourthPart: 'эффективного продвижения.',
            fifthPart: 'Единый сервис аренды вещей скоро по всей России',
        },
        textColors: {
            firstPart: 'TypographyBigger-main',
            secondPart: 'TypographyBigger-accent',
            thirdPart: 'TypographyBigger-main',
            fourthPart: 'TypographyBigger-accent',
            fifthPart: 'TypographyBigger-main',
        },
    }

    return (
        <div className="App">
            <AboutBlock
                type="withLongCards"
                title={{
                    titleAccent: 'почему именно мы',
                    titleMain: 'и никто другой',
                }}
                longCards={longCards}
                sideImages={sideImages}
                background="Background-big"
            />
            <AboutBlock
                type="withSquareCards"
                title={{
                    titleAccent: `зачем сдавать \\ брать`,
                    titleMain: 'вещи в аренду',
                }}
                squareCards={squareCards}
            />
            <AboutBlock
                type="withBiggerText"
                title={{
                    titleAccent: 'о создании',
                    titleMain: 'сервиса',
                }}
                paragraph={paragraph}
                background="Background-small"
            />
        </div>
    )
}

export default App
