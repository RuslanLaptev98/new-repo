import React from 'react'
import './ReviewerProfile.css'
import ProfileImage from '../../atoms/ProfileImage/ProfileImage'
import Name from '../../atoms/Name/Name'
import Subtitle from '../../atoms/Subtitle/Subtitle'

export default function ReviewerProfile({ review }) {
    return (
        <div className="ReviewerProfile">
            <ProfileImage image={review.image} />
            <div className="ReviewerProfile__info">
                <Name name={review.name} />
                <Subtitle text={review.product} />
            </div>
        </div>
    )
}
