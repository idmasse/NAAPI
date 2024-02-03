import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apodAPI from '../../utilities/apodAPI'
import './ApodDetail.css'

export default function ApodDetail() {
    const { id } = useParams()
    const [apod, setApod] = useState(null)

    useEffect(() => {
        async function fetchApodDetail() {
            const apodData = await apodAPI.getApodDetail(id)
            setApod(apodData)
        }
        fetchApodDetail()
    }, [id])

    return (
        <div>
            {apod && (
                <div className='apod-detail-container'>
                    <div className='apod-detail-title'>
                        <h2>{apod.title} | {apod.date}</h2>
                    </div>
                    <div className='apod-detail-image-container'>
                        <img className='apod-detail-image' src={apod.url} alt={apod.title} />
                        <div className='apod-detail-overlay'>
                            <div className='apod-detail-explanation'>
                                <p>{apod.explanation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
