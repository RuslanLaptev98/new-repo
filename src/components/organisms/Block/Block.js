import React from 'react'
import Title from './../../atoms/Title/Title'

export default function Block({ type, titleAccent, titleMain }) {
    return (
        <div className="Block">
            <Title textAccent={titleAccent} textMain={titleMain} />
            {type === 'withLongCards' ? (
                <>with long cards</>
            ) : type === 'withSquareCards' ? (
                <>with square cards</>
            ) : (
                <>with bigger text</>
            )}
        </div>
    )
}
