import React from 'react'
import CustomTxt from '../../Atoms/CustomTxt/CustomTxt'
import './AboutCardBox.css'

export default function AboutCardBox({ card }) {
    return (
        <div className="AboutCardBox">
            <img src={card.image} alt="" />
            <div className="AboutCardBox__description">
                <CustomTxt
                    txtArr={card.txtArr}
                    customCss={{
                        fontWeight: '800',
                        fontSize: '18px',
                        lineHeight: '30px',
                        maxWidth: '307px',
                        margin: 'auto',
                        textAlign: 'center',
                    }}
                />
            </div>
            {card.nobg && (
                <div className="AboutCardBox__arrowIcon">{card.image}</div>
            )}
        </div>
    )
}
