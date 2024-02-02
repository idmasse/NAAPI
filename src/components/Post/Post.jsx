import './Post.css'

export default function Post({ user, postedApods }) {
    return (
        <div>
            {user && postedApods.map((apod, index) => (
                <div key={index} className="posted-apod">
                    <h2>{apod.user.name}</h2>
                    <h3>{apod.title}</h3>
                    <img className="post-image" src={apod.url} alt={apod.title} />
                </div>
            ))}
        </div>
    )
}
