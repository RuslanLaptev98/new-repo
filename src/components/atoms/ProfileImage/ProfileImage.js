import React from 'react'
import './ProfileImage.css'

export default function ProfileImage({ image }) {
    return (
        <div className="ProfileImage" styles={{ backgroundImage: image }}></div>
    )
}
