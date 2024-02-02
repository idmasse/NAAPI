import { useState, useEffect } from "react"
import { getUser } from "../../utilities/users-service"
import * as apodAPI from "../../utilities/apodAPI"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./Apod.css"

export default function Apod() {
    const [Apod, setApod] = useState([])
    const initialDate = new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
    )
    const [selectedDate, setSelectedDate] = useState(initialDate)
    const [alreadySaved, setalreadySaved] = useState("")
    const user = getUser()

    useEffect(() => {
        const fetchApod = async () => {
            const apodData = await apodAPI.fetchApod(selectedDate)
            setApod(apodData)
        }
        fetchApod()
    }, [selectedDate])

    async function handleSaveApod() {
        try {
            const apodToSave = await apodAPI.saveApod(Apod)
        } catch (error) {
            setalreadySaved("This image has already been saved.")
            setTimeout(() => {
                setalreadySaved("")
            }, 2500)
        }
    }

    // async function handlePostApod() {
    //     const apodToPost = await apodAPI.postApod(Apod)
    // }

    return (
        <div>
            <h1>NASA Astronomy Picture of the Day | {Apod.date}</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
            />
            {Apod && (
                <div>
                    <h2>{Apod.title} </h2>
                    {alreadySaved && <div className="warning">{alreadySaved}</div>}
                    <a href={Apod.hdurl} target="_blank" title={Apod.title} rel="noreferrer">
                        <img className="apod-image" src={Apod.url} alt={Apod.title} />
                    </a>
                    <p>{Apod.explanation}</p>
                    { user ? (
                            <>
                                <button onClick={handleSaveApod}>Save</button>
                                {/* <button onClick={handlePostApod}>Post</button> */}
                                {/* <button onClick={handleShareApod}>Share</button> */}
                            </>
                        ) : ( <button>Login</button> )
                    }
                </div>
            )}
        </div>
    )
}
