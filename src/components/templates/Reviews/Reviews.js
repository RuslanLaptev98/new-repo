import React from 'react'
import './Reviews.css'
import SectionTitle from '../../atoms/SectionTitle/SectionTitle'
import Review from '../../organisms/Review/Review'

export default function Reviews({ reviews }) {
    return (
        <div className="Reviews">
            <SectionTitle title="Отзывы" />
            <div className="Reviews__main">
                {reviews.map((review) => (
                    <Review review={review} />
                ))}
            </div>
        </div>
    )
}
