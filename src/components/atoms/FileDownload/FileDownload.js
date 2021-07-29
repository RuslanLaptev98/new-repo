import React from 'react'
import './FileDownload.css'
import camera from './camera.svg'

export default function FileDownload() {
    return (
        <div className="FileDownload">
            <p
                className="ContractData__description"
                style={{
                    width: '100%',
                    padding: 0,
                    textAlign: 'center',
                    paddingTop: 16,
                }}
            >
                Сделайте селфи с паспортом без бликов.
            </p>
            <p
                className="ContractData__description"
                style={{
                    width: '100%',
                    padding: 0,
                    textAlign: 'center',
                }}
            >
                Отдельно фото первой страницы паспорта
            </p>
            <div className="FileDownload__file">
                <div className="FileDownload__camera">
                    <img src={camera} alt="camera" />
                </div>
                <div className="FileDownload__download">Загрузить файл</div>
            </div>
        </div>
    )
}
