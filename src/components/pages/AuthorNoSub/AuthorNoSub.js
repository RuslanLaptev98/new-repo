import React from 'react'
import './AuthorNoSub.css'
import AuthorHeader from '../../organisms/AuthorHeader/AuthorHeader'
import Products from '../../organisms/Products/Products'
import Reviews from '../../templates/Reviews/Reviews'

export default function AuthorNoSub() {
    const data = {
        author: {
            image: '',
            name: 'Алексей Коротников',
            lastOnline: 15 /* Date? */,
            registration: '12.05.2021' /* Date */,
            stars: 5,
            productsNumber: 1,
            reviewsNumber: 3,
            conditions: 'Гибкие',
        },
        products: [
            {
                image: '',
                name: 'Ford mustang 2020 Sportcar',
                pledge: 0,
                price: 0,
            },
        ],
        reviews: [
            {
                image: '',
                name: 'Светлана Иванова',
                product: 'Lamborghini HURACÁN EVO RWD',
                time: 10 /* Date */,
                stars: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci, eget phasell ullamcorper non. Aliquam quam non, nec facilisis. Magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci.',
            },
            {
                image: '',
                name: 'Светлана Иванова',
                product: 'Lamborghini HURACÁN EVO RWD',
                time: '10 дней назад' /* Date */,
                stars: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci, eget phasell ullamcorper non. Aliquam quam non, nec facilisis. Magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci.',
            },
            {
                image: '',
                name: 'Светлана Иванова',
                product: 'Lamborghini HURACÁN EVO RWD',
                time: '10 дней назад' /* Date */,
                stars: 5,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci, eget phasell ullamcorper non. Aliquam quam non, nec facilisis. Magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla orci.',
            },
        ],
    }

    return (
        <div className="AuthorNoSub">
            <AuthorHeader author={data.author} />
            <Products products={data.products} />
            <Reviews reviews={data.reviews} />
        </div>
    )
}
