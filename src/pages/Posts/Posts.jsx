import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service'
import Post from '../../components/Post/Post'
import * as postAPI from '../../utilities/postAPI'

export default function Posts() {
    const [postedApods, setPostedApods] = useState([])
    const user = getUser()

    useEffect(() => {
        const fetchPostedApods = async () => {
            const postedApodData = await postAPI.getAllPostedApods()
            setPostedApods(postedApodData)
        }
        fetchPostedApods()
    }, [])

    return <Post user={user} postedApods={postedApods} />
}