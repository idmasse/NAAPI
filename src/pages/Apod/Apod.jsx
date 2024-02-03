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
    // const [selectedDate, setSelectedDate] = useState(getFormattedDate())
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
        <div className="apod-container">
            <div className="content-container">
                <div className="text-container">
                    <span className="napod">Nasa Astronomy Photo of the Day</span>
                    <DatePicker
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        dateFormat="yyyy/MM/dd"
                        minDate={new Date('1995-11-27')}
                        maxDate={new Date()}
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        utcOffset={0} />
                    {alreadySaved && <div className="warning">{alreadySaved}</div>}
                    {alreadyPosted && <div className="warning">{alreadyPosted}</div>}
                </div>
                <div className="image-container">
                    <a href={Apod.hdurl} target="_blank" title={Apod.title} rel="noreferrer">
                        <img className="apod-image" src={Apod.url} alt={Apod.title} />
                    </a>
                    <div className="image-overlay">
                        <div className="mobile-content">
                            <h2 className="apod-title">{Apod.title}</h2>
                            <p className="apod-explanation">{Apod.explanation}</p>
                            {user ? (
                                <div className="button-container">
                                    <button className="save-button" onClick={handleSaveApod}>Save</button>
                                    <button className="post-button" onClick={handlePostApod}>Post</button>
                                </div>
                            ) : (
                                <button>Login</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
