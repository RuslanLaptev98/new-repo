import React from 'react'
import './Promote.css'
import maincard_1 from './maincard-images/mc-image-1.svg'
import maincard_2 from './maincard-images/mc-image-2.svg'
import maincard_3 from './maincard-images/mc-image-3.svg'
import maincard_4 from './maincard-images/mc-image-4.svg'

export default function Promote() {
    /* data */
    const promote = [
        {
            title: 'продвинуть в рекомендациях',
            image: maincard_1,
            price: 0,
            discount: 0,
            amount: 0,
            description: [],
        },
        {
            title: 'продвинуть товар в своей категории',
            image: maincard_2,
            price: 0,
            discount: 0,
            amount: 0,
            description: [],
        },
        {
            title: 'отчет',
            image: maincard_3,
            price: 0,
            discount: 0,
            amount: 0,
            description: [],
        },
        {
            title: 'подписка',
            image: maincard_4,
            price: 0,
            discount: 0,
            amount: 0,
            description: [],
        },
    ]

    return <div className="Promote"></div>
}
