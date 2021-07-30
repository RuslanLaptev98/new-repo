import React from 'react'
import './FileDownload.css'
import { AiOutlineCamera } from 'react-icons/ai'

export default function FileDownload() {
    return (
        <div className="FileDownload">
            <p className="ContractData__description FileDownload-description">
                Сделайте селфи с паспортом без бликов.
            </p>
            <p className="ContractData__description FileDownload-description">
                Отдельно фото первой страницы паспорта
            </p>
            <div className="FileDownload__file">
                <div className="FileDownload__camera">
                    <AiOutlineCamera fill="#fff" size="1.6rem" />
                </div>
                <div className="FileDownload__download">Загрузить файл</div>
            </div>
        </div>
    )
}
