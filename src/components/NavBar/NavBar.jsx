import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import Logo from "../../components/Logo/Logo"
import "./NavBar.css"

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar-links">
      <Link to="/">Home</Link>
        
        <Link to="/posts">Posts</Link>

        <Link to="/search">Search</Link>

        <Link to="/profile">Profile</Link>

      </div>
      {/* Hello {user.name}
        &nbsp; | &nbsp; */}
      <Link to="/" onClick={handleLogOut}>Logout</Link>
    </nav>
  )
}