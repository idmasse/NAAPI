import { useState, useEffect } from "react"
import { getUser } from "../../utilities/users-service"
import * as apodAPI from "../../utilities/apodAPI"
import * as postAPI from "../../utilities/postAPI"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "./Apod.css"

export default function Apod() {
    const [Apod, setApod] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [alreadySaved, setAlreadySaved] = useState("")
    const [alreadyPosted, setAlreadyPosted] = useState("")
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
            setAlreadySaved("You already saved this image!")
            setTimeout(() => {
                setAlreadySaved("")
            }, 2500)
        }
    }

    async function handlePostApod() {
        try {
            const apodToPost = await postAPI.postApod(Apod)
        } catch (error) {
            setAlreadyPosted("You already posted this image!")
            setTimeout(() => {
                setAlreadyPosted("")
            }, 2500)
        }
    }

    return (
        <div>
            <h1>NASA Astronomy Picture of the Day | {Apod.date}</h1>
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                utcOffset={0}
            />
            {Apod && (
                <div>
                    <h2>{Apod.title} </h2>
                    {alreadySaved && <div className="warning">{alreadySaved}</div>}
                    {alreadyPosted && <div className="warning">{alreadyPosted}</div>}
                    <a href={Apod.hdurl} target="_blank" title={Apod.title} rel="noreferrer">
                        <img className="apod-image" src={Apod.url} alt={Apod.title} />
                    </a>
                    <p>{Apod.explanation}</p>
                    {user ? (
                        <>
                            <button onClick={handleSaveApod}>Save</button>
                            <button onClick={handlePostApod}>Post</button>
                            {/* <button onClick={handleShareApod}>Share</button> */}
                        </>
                    ) : (<button>Login</button>)
                    }
                </div>
            )}
        </div>
    )
}
