import { Link } from 'react-router-dom'
import './PostedApods.css'

export default function PostedApods({ postedApods }) {
    return (
        <div className='posted-apods-container'>
            {postedApods.map(apod => (
                 <Link to={`/apods/${apod._id}`} key={apod._id}>
                    <div className="posted-apod-profile">
                        <img src={apod.url} alt={apod.title} />
                    </div>
                </Link>    
            ))}
        </div>
    )
}