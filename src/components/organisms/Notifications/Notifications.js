import React from 'react'
import Button from '../../atoms/Button/Button'
import Notification from '../../molecules/Notification/Notification'
import './Notifications.css'

export default function Notifications() {
    const notifications = [
        {
            id: 0,
            title: 'Информационная рассылка',
            description:
                'Полезные советы, акции и самые важные новости POPROSHU',
            active: true,
        },
        {
            id: 1,
            title: 'telegram',
            description: 'Уведомления о новых сообщениях в беседах по аренде',
            active: false,
        },
        {
            id: 2,
            title: 'Email уведомления по статусу заявки',
            description:
                'Изменения статуса бронирования и важные события аренды',
            active: true,
        },
        {
            id: 3,
            title: 'SMS нотификация',
            description:
                'Самые важные события связанные с вашими заявками и профилем',
            active: true,
        },
    ]
    return (
        <div className="Notifications">
            {notifications.map((notification) => (
                <Notification
                    notification={notification}
                    key={notification.id}
                />
            ))}

            <Button
                text="сохранить"
                styles={{ position: 'relative', left: 840, marginTop: 85 }}
            />
        </div>
    )
}
