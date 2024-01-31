import "./ProfileInfo.css"

export default function ProfileInfo({ user }) {
    return (
        <div className="profile-info">
            <img style={{width: '100px' }} src="https://i.ibb.co/KFjB230/pizza-alien.jpg" alt="Profile Photo" />
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            {/* <h4>{user.savedApods.length}</h4> */}
        </div>
    )
}