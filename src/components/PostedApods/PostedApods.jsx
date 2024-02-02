import './PostedApods.css'

export default function PostedApods({ postedApods }) {
    return (
        <div className='posted-apods-container'>
            {postedApods.map(apod => (
                <div key={apod._id}>
                    {/* <div>{apod.title}</div>
                    <div>{apod.date}</div> */}
                    <img style={{ width: '250px', height: '250px', borderRadius: '20px' }} src={apod.url} alt={apod.title} />
                </div>
            ))}
        </div>

    )
}