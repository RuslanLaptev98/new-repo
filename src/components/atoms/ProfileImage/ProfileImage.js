import React from 'react'
import './ProfileImage.css'

export default function ProfileImage({ image, mode }) {
    return (
        <div
            className={
                mode === 1 ? 'ProfileImage' : 'ProfileImage ProfileImage-small'
            }
            styles={{ backgroundImage: image }}
        ></div>
    )
}
