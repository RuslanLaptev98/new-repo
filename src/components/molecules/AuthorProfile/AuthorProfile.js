import React from 'react'
import './AuthorProfile.css'
import ProfileImage from '../../atoms/ProfileImage/ProfileImage'
import Name from '../../atoms/Name/Name'
import TimeSince from '../../atoms/TimeSince/TimeSince'
import Stars from '../../atoms/Stars/Stars'
import Icon from '../../atoms/Icon/Icon'

export default function AuthorProfile({ author }) {
    return (
        <div className="AuthorProfile">
            <ProfileImage image={author.image} />
            <Name name={author.name} />
            <TimeSince
                lastOnline={author.lastOnline}
                registration={author.registration}
            />
            <Stars stars={author.stars} mode={1} />
            <Icon />
        </div>
    )
}
