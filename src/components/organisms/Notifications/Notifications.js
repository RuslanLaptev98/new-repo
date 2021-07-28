import React from 'react'
import Button from '../../atoms/Button/Button'
import Notification from '../../molecules/Notification/Notification'
import './Notifications.css'

export default function Notifications() {
    const notifications = [
        {
            title: 'Информационная рассылка',
            subtitle: 'Полезные советы, акции и самые важные новости POPROSHU',
            toggle: true,
        },
        {
            title: 'telegram',
            subtitle: 'Уведомления о новых сообщениях в беседах по аренде',
            toggle: false,
        },
        {
            title: 'Email уведомления по статусу заявки',
            subtitle: 'Изменения статуса бронирования и важные события аренды',
            toggle: true,
        },
        {
            title: 'SMS нотификация',
            subtitle:
                'Самые важные события связанные с вашими заявками и профилем',
            toggle: true,
        },
    ]
    return (
        <div className="Notifications">
            {notifications.map((notification, i) => (
                <Notification notification={notification} key={i} />
            ))}

            <Button text="сохранить" />
        </div>
    )
}
