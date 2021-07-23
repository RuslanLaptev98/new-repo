import React from 'react'
import './ReviewContent.css'
import TimeSince from '../../atoms/TimeSince/TimeSince'
import Stars from '../../atoms/Stars/Stars'
import ReviewText from '../../atoms/ReviewText/ReviewText'

export default function ReviewContent({ review }) {
    return (
        <div className="ReviewContent">
            <TimeSince lastOnline={review.time} />
            <Stars stars={review.stars} />
            <ReviewText text={review.text} />
        </div>
    )
}
