import { Link } from 'react-router-dom'
import './SavedApods.css'

export default function SavedApods({ savedApods, deleteApod }) {
    
    const handleDeleteApod = (id) => {
        deleteApod(id)
    }

    return (
        <div className='saved-apods-container'>
            {savedApods.map((apod) => (
                <div className='saved-apod' key={apod._id}>
                    <Link to={`/apods/${apod._id}`} title={apod.title}>
                        <img src={apod.url} alt={apod.title} />
                    </Link>
                        <div className='overlay'>
                            <button title="Delete" onClick={() => handleDeleteApod(apod._id)}>x</button>
                        </div>
                </div>
            ))}
        </div>
    )
}
