import React from 'react'
import './Review.css'
import ReviewerProfile from '../../molecules/ReviewerProfile/ReviewerProfile'
import ReviewContent from '../../molecules/ReviewContent/ReviewContent'

export default function Review({ review }) {
    return (
        <div className="Review">
            <ReviewerProfile review={review} />
            <ReviewContent review={review} />
        </div>
    )
}
