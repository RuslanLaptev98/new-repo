import React from 'react'
import './PriceCard.css'
import background from '../../../assets/pricecard-images/pc-background.svg'
import backgroundbig from '../../../assets/pricecard-images/pc-background-big.svg'
import header from '../../../assets/pricecard-images/pc-green-rectangle.svg'
import sale from '../../../assets/pricecard-images/pc-sale.svg'
import saleShadow from '../../../assets/pricecard-images/pc-sale-shadow.svg'
import topArrow from '../../../assets/pricecard-images/pc-arrow-top.svg'
import bottomArrow from '../../../assets/pricecard-images/pc-arrow-bottom.svg'
import crossline from '../../../assets/pricecard-images/cross-line.svg'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'
import PayButton from '../../atoms/PayButton/PayButton'

function CardBackground({ saleUI, sizeBig }) {
    return (
        <>
            {/* Зеленый хэдер */}
            <img src={header} alt="" className="PriceCard__headerimg" />
            {/* Белый бэкграунд */}
            {sizeBig ? (
                <img
                    src={backgroundbig}
                    alt=""
                    className="PriceCard__backgroundimg"
                />
            ) : (
                <img
                    src={background}
                    alt=""
                    className="PriceCard__backgroundimg"
                />
            )}

            {/* Скидка */}
            {saleUI && (
                <>
                    <img src={sale} alt="" className="PriceCard__salefront" />
                    <img
                        src={saleShadow}
                        alt=""
                        className="PriceCard__saleshadow"
                    />
                </>
            )}
        </>
    )
}

export default function PriceCard({
    price,
    text,
    arrow,
    button,
    timeLeft,
    saleUI,
    sizeBig,
}) {
    const handleSize = () => {
        return sizeBig ? { height: '654px' } : {}
    }
    return (
        <div className="PriceCard" style={handleSize()}>
            <CardBackground saleUI={saleUI} sizeBig={sizeBig} />

            {/* Цена */}
            <div className="PriceCard__price">
                <span className="PriceCard__price-number">{price.current}</span>{' '}
                ₽/день
            </div>
            {price.prev && (
                <div className="PriceCard__prevprice">
                    <span className="PriceCard__prevprice-number">
                        {price.prev}
                    </span>{' '}
                    ₽/день
                    <img
                        src={crossline}
                        alt=""
                        className="PriceCard__crossline"
                    />
                </div>
            )}

            <div className="PriceCard__text">
                {/* Текст */}
                {text.map((t) => (
                    <CustomTxt
                        txtArr={t.txtArr}
                        customCss={{
                            width: '265px',
                            marginBottom: '15px',
                            ...t.customCss,
                        }}
                    />
                ))}
                {/* Стрелка */}
                {arrow === 'top' ? (
                    <img src={topArrow} alt="" className="PriceCard__arrow" />
                ) : arrow === 'bottom' ? (
                    <img
                        src={bottomArrow}
                        alt=""
                        className="PriceCard__arrow"
                    />
                ) : (
                    <></>
                )}
            </div>

            {/* Кнопка */}
            {button && <PayButton />}

            {/* Осталось */}
            {timeLeft && (
                <div
                    className="PriceCard__timeleft"
                    styles={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#212429',
                        lineHeight: '24px',
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            left: '-50%',
                        }}
                    >
                        Осталось
                    </div>

                    <CustomTxt
                        txtArr={timeLeft.txtArr}
                        customCss={{
                            position: 'relative',
                            left: '-50%',
                            marginTop: '16px',
                            paddingLeft: '0px',
                        }}
                    />
                </div>
            )}
        </div>
    )
}
