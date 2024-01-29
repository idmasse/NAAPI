import { useState, useEffect } from "react";
import "./Apod.css"

export default function Apod() {
    const [Apod, setApod] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchApod = async () => {
            try {
                const res = await fetch('/api/apod')
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`)
                }
                const apodData = await res.json()
                setApod(apodData)
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchApod()
    }, [])

    return (
        <div>
            <h1>NASA Astronomy Picture of the Day</h1>
            {isLoading && <span className="loader"></span>}
            {error && <p>Error: {error}</p>}
            {Apod && (
                <div>
                    <h2>{Apod.title} {Apod.date}</h2>
                    <img className="apod-image" src={Apod.hdurl} alt={Apod.title} />
                    <p>{Apod.explanation}</p>
                </div>
            )}
        </div>
    );
}