import React from 'react'
import CustomTxt from '../../Atoms/CustomTxt/CustomTxt'
import './AboutCardLong.css'

export default function AboutCardLong({ card, position }) {
    const posArr = ['AboutCardLong__number']
    const posArr2 = ['AboutCardLong']
    if (position === 0) {
        posArr.push('AboutCardLong__number-left')
        posArr2.push('AboutCardLong-left')
    } else {
        posArr.push('AboutCardLong__number-right')
        posArr2.push('AboutCardLong-right')
    }
    return (
        <li className={posArr2.join(' ')}>
            <div className="AboutCardLong__content">
                <CustomTxt
                    txtArr={card.txtArr}
                    customCss={{
                        textAlign: 'center',
                        transform: `rotate(${
                            position === 0 ? '-1deg' : '1deg'
                        })`,
                        fontSize: '18px',
                        fontWeight: '800',
                    }}
                />
                <span className={posArr.join(' ')}>{card.id}</span>
            </div>
        </li>
    )
}
