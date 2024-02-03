import "./ProfileInfo.css"

export default function ProfileInfo({ user }) {
    return (
        <div className="profile-info-container">
            <img style={{ width: '100px' }} src="https://i.ibb.co/KFjB230/pizza-alien.jpg" alt="Profile Photo" />
            <div className="profile-info">
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            </div>
        </div>
    )
}