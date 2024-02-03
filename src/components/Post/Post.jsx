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
            <img className="post-image" src={apod.url} alt={apod.title} />
          </div>
        ))}
      </div>
    )
  }
