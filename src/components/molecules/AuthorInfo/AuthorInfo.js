import React from 'react'
import './AuthorInfo.css'
import Info from '../../atoms/Info/Info'

export default function AuthorInfo({ author }) {
    return (
        <div className="AuthorInfo">
            <Info text="Товаров:" value={author.productsNumber} />
            <Info text="Отзывов:" value={author.reviewsNumber} />
            <Info text="Условия отмены:" value={author.conditions} />
        </div>
    )
}
