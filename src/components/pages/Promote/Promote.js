import React from 'react'
import './Promote.css'
import PromoteBlock from '../../organisms/PromoteBlock/PromoteBlock'
import image from './main-card-image.svg'

export default function Promote() {
    const promoteData = [
        {
            id: 0,
            title: 'продвинуть в рекомендациях',
            image: image,
            price: 169,
            discount: 0.65,
            amount: 2,
            description: [
                'Будьте всегда в топе.',
                'Ваш товар прямо на главной странице в "рекомендациях"',
            ],
        },
        {
            id: 1,
            title: 'продвинуть товар в своей категории',
            image: image,
            price: 120,
            discount: 0.65,
            amount: 3,
            description: [
                'Получите преимущество.',
                'Ваш товар всегда на первых позициях в категории, которую вы выбрали.',
            ],
        },
        {
            id: 2,
            title: 'отчет',
            image: image,
            price: 90,
            discount: 1,
            description: [
                'Увеличивайте свою прибыль.',
                'Отчет покажет вам статистику ваших продаж, заработка, клики на ваши товары',
            ],
        },
        {
            id: 3,
            title: 'подписка',
            image: image,
            price: 150,
            discount: 1,
            description: [
                '1. Новый и яркий профиль удвоит ваш доход!',
                '2. Получите новую карточку товара - сделает ваши товары еще заметнее!',
                '3. скидка в 35% на услуги продвижения',
            ],
        },
    ]
    return (
        <div className="Promote">
            {promoteData.map((data) => (
                <PromoteBlock key={data.id} data={data} />
            ))}
        </div>
    )
}
