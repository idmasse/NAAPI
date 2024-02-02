import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service'
import Post from '../../components/Post/Post'
import * as apodAPI from '../../utilities/apodAPI'
import './Posts.css'

export default function Posts() {
    const [postedApods, setPostedApods] = useState([])
    const user = getUser()


useEffect(() => {
    const fetchPostedApods = async () => {
        const postedApodData = await apodAPI.getPostedApods()
        setPostedApods(postedApodData)
    }
    fetchPostedApods()
}, [])


    return (
        <>
            <h1>Posts</h1>
            <Post user={user} postedApods={postedApods} />
        </>
    )
}