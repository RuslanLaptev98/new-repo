import React from 'react'
import './PriceCard.css'
import background from '../../../assets/pricecard-images/pc-background.svg'
import header from '../../../assets/pricecard-images/pc-green-rectangle.svg'
import sale from '../../../assets/pricecard-images/pc-sale.svg'
import saleShadow from '../../../assets/pricecard-images/pc-sale-shadow.svg'
import topArrow from '../../../assets/pricecard-images/pc-arrow-top.svg'
import bottomArrow from '../../../assets/pricecard-images/pc-arrow-bottom.svg'
import crossline from '../../../assets/pricecard-images/cross-line.svg'
import CustomTxt from '../../atoms/CustomTxt/CustomTxt'
import PayButton from '../../atoms/PayButton/PayButton'

export default function PriceCard({
    price,
    text,
    arrow,
    button,
    timeLeft,
    saleUI,
}) {
    return (
        <div className="PriceCard">
            {/* Зеленый хэдер */}
            <img src={header} alt="" className="PriceCard__headerimg" />
            {/* Белый бэкграунд */}
            <img src={background} alt="" className="PriceCard__backgroundimg" />
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

            {/* Текст */}
            <CustomTxt txtArr={text.txtArr} customCss={text.customCss} />

            {/* Стрелка */}
            {arrow === 'top' ? (
                <img src={topArrow} alt="" className="PriceCard__arrow" />
            ) : arrow === 'bottom' ? (
                <img src={bottomArrow} alt="" className="PriceCard__arrow" />
            ) : (
                <></>
            )}

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
                    Осталось
                    <CustomTxt txtArr={timeLeft.txtArr} />
                </div>
            )}
        </div>
    )
}
