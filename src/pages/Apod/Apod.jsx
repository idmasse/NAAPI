import { useState, useEffect } from "react"
import { getUser } from '../../utilities/users-service'
import * as apodAPI from '../../utilities/apodAPI'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./Apod.css"

export default function Apod() {
    const [Apod, setApod] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const user = getUser()

    useEffect(() => {
        const fetchApod = async () => {
            const apodData = await apodAPI.fetchApod(selectedDate)
            setApod(apodData)
        }
        fetchApod()
    }, [selectedDate])

    async function handleSaveApod() {
        const apodToSave = await apodAPI.saveApod(Apod)
    }

    return (
        <div>
            <h1>NASA Astronomy Picture of the Day | {Apod.date}</h1>
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
            {Apod && (
                <div>
                    <h2>{Apod.title} </h2>
                    <a href={Apod.hdurl} target="_blank" title={Apod.title} rel="noreferrer">
                        <img className="apod-image" src={Apod.url} alt={Apod.title} />
                    </a>
                    <p>{Apod.explanation}</p>
                    {/* <p>Media credit: {Apod.copyright}</p> */}
                    {user ? (
                        <button onClick={handleSaveApod}>Save</button>
                    ) : (
                        <button>Login</button>
                    )
                    }
                </div>
            )}
        </div>
    );
}