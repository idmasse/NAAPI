import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service'
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'
import SavedApods from '../../components/SavedApods/SavedApods'
import PostedApods from '../../components/PostedApods/PostedApods'
import * as apodAPI from '../../utilities/apodAPI'
import * as postAPI from '../../utilities/postAPI'

export default function Profile() {
    const [savedApods, setSavedApods] = useState([])
    const [postedApods, setPostedApods] = useState([])
    const user = getUser()

    useEffect(() => {
        const fetchSavedApods = async () => {
            const savedApodsData = await apodAPI.getSavedApod()
            setSavedApods(savedApodsData)
        }
        fetchSavedApods()

        const fetchPostedApods = async () => {
            const postedApodsData = await postAPI.getPostedApods()
            setPostedApods(postedApodsData)
        }
        fetchPostedApods()
    }, [])

    const deleteApod = async(id) => {
        await apodAPI.deleteSavedApod(id)
        setSavedApods(savedApods.filter((apod) => apod._id !== id))
    }

    return (
        <>
            <ProfileInfo user={user} />
            <h3 style={{textAlign:"center", color:"#fff"}}>Saved APODs</h3>
            <SavedApods savedApods={savedApods} deleteApod={deleteApod}/>
            <h3 style={{textAlign:"center", color:"#fff"}}>Posted APODs</h3>
            <PostedApods postedApods={postedApods} deleteApod={deleteApod} />
        </>
    )
}
