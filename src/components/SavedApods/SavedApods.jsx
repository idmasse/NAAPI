import './SavedApods.css'

export default function SavedApods({ savedApods }) {
    return (
        <div className='saved-apods-container'>

            {savedApods.map(apod => (
      
                    <div key={apod._id} className='saved-apod'>
                        {/* <div>{apod.title}</div>
                        <div>{apod.date}</div> */}
                        <img src={apod.url} alt={apod.title} />
                    </div>
   
            ))}
        </div>
    )
}