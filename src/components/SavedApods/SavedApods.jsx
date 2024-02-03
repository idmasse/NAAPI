import { Link } from 'react-router-dom';
import './SavedApods.css'

export default function SavedApods({ savedApods }) {
    return (
        <div className='saved-apods-container'>
            {savedApods.map(apod => (
                <Link to={`/apods/${apod._id}`} key={apod._id} className='saved-apod-link'>
                    <div className='saved-apod'>
                        <img src={apod.url} alt={apod.title} />
                    </div>
                </Link>
            ))}
        </div>
    )
}
