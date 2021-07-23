import React from 'react'
import './AuthorHeader.css'
import AuthorProfile from '../../molecules/AuthorProfile/AuthorProfile'
import AuthorInfo from '../../molecules/AuthorInfo/AuthorInfo'

export default function AuthorHeader({ author }) {
    return (
        <div className="AuthorHeader">
            <AuthorProfile author={author} />
            <AuthorInfo author={author} />
        </div>
    )
}
