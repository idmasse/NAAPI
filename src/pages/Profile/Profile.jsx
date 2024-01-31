import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import SavedApods from '../../components/SavedApods/SavedApods'
import * as apodAPI from '../../utilities/apodAPI'
import "./Profile.css"

export default function Profile() {
    const [savedApods, setSavedApods] = useState([])
    const user = getUser()

    useEffect(() => {
        const fetchSavedApods = async () => {
                const savedApodsData = await apodAPI.getSavedApod()
                setSavedApods(savedApodsData);
        }
        fetchSavedApods()
    }, [])

    return (
        <>
            <ProfileInfo user={user} />
            <SavedApods savedApods={savedApods} />
        </>
    )
}
