import './SavedApods.css'

export default function SavedApods({ savedApods }) {
    return (
        <div className='saved-apods-container'>
            {savedApods.map(apod => (
                <div key={apod._id}>
                    {/* <div>{apod.title}</div>
                    <div>{apod.date}</div> */}
                    <img style={{ width: '250px', height: '250px', borderRadius: '20px' }} src={apod.url} alt={apod.title} />
                </div>
            ))}
        </div>

    )
}