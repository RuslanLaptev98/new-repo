import React from 'react'
import './Promote.css'
import maincard_1 from './maincard-images/mc-image-1.svg'
import maincard_2 from './maincard-images/mc-image-2.svg'
import maincard_3 from './maincard-images/mc-image-3.svg'
import maincard_4 from './maincard-images/mc-image-4.svg'
import JointCard from '../../components/organisms/JointCard/JointCard'

export default function Promote() {
    /* data */
    const promote = [
        {
            title: 'продвинуть в рекомендациях',
            image: maincard_1,
            price: 169,
            discount: 0.65,
            amount: 2,
            description: [
                'Будьте всегда в топе.',
                'Ваш товар прямо на главной странице в "рекомендациях"',
            ],
        },
        {
            title: 'продвинуть товар в своей категории',
            image: maincard_2,
            price: 120,
            discount: 0.65,
            amount: 3,
            description: [
                'Получите преимущество.',
                'Ваш товар всегда на первых позициях в категории, которую вы выбрали.',
            ],
        },
        {
            title: 'отчет',
            image: maincard_3,
            price: 90,
            description: [
                'Увеличивайте свою прибыль.',
                'Отчет покажет вам статистику ваших продаж, заработка, клики на ваши товары',
            ],
        },
        {
            title: 'подписка',
            image: maincard_4,
            price: 150,
            description: [
                '1. Новый и яркий профиль удвоит ваш доход!',
                '2. Получите новую карточку товара - сделает ваши товары еще заметнее!',
                '3. скидка в 35% на услуги продвижения',
            ],
        },
    ]

    return (
        <div className="Promote">
            {promote.map((card, i) => (
                <JointCard key={i} card={card} />
            ))}
        </div>
    )
}
