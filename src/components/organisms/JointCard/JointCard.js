import React, { useState } from 'react'
import './JointCard.css'
import MainCard from '../../molecules/MainCard/MainCard'
import PriceCard from '../../molecules/PriceCard/PriceCard'
import Modal from '../../molecules/Modal/Modal'

export default function JointCard({ card }) {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className="JointCard">
            <MainCard title={card.title} image={card.image} />
            <PriceCard card={card} setModalActive={setModalActive} />
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    )
}
