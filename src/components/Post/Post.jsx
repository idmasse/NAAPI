import { Link } from 'react-router-dom'
import './Post.css'

export default function Post({ user, postedApods }) {
  return (
    <div className="post-container">
      {postedApods.map((apod, index) => (
        <div key={index} className="posted-apod">
          <div className="title-container">
            <h2>{apod.user.name}</h2>
            <h3>{apod.title}</h3>
          </div>
          <Link to={`/apods/${apod._id}`} key={apod._id}>
            <img className="post-image" src={apod.url} alt={apod.title} />
          </Link>
        </div>
      ))}
    </div>
  )
}
