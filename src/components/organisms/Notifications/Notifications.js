import React from 'react'
import Button from '../../atoms/Button/Button'
import Notification from '../../molecules/Notification/Notification'
import './Notifications.css'

export default function Notifications() {
    const notifications = [
        {
            title: 'Информационная рассылка',
            subtitle: 'Полезные советы, акции и самые важные новости POPROSHU',
            on: true,
        },
        {
            title: 'telegram',
            subtitle: 'Уведомления о новых сообщениях в беседах по аренде',
            on: false,
        },
        {
            title: 'Email уведомления по статусу заявки',
            subtitle: 'Изменения статуса бронирования и важные события аренды',
            on: true,
        },
        {
            title: 'SMS нотификация',
            subtitle:
                'Самые важные события связанные с вашими заявками и профилем',
            on: true,
        },
    ]
    return (
        <div className="Notifications">
            {notifications.map((notification, i) => (
                <Notification notification={notification} key={i} />
            ))}

            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 840, marginTop: 85 }}
            />
        </div>
    )
}
