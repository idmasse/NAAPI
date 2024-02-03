import { useState } from "react"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import Logo from "../../components/Logo/Logo"
import AuthPage from '../AuthPage/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import Apod from "../Apod/Apod"
import Posts from '../Posts/Posts'
import SearchArchive from '../SearchArchive/SearchArchive'
import Profile from '../Profile/Profile'
import ApodDetail from '../../components/ApodDetail/ApodDetail'
import './App.css'
import '../../components/NavBar/NavBar.css'
import '../../components/Logo/Logo.css'

export default function App() {
  const [user, setUser] = useState(getUser())
  const navigate = useNavigate()

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Apod />} />
              <Route path="/login" element={<Apod />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/search" element={<SearchArchive />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="apods/:id" element={<ApodDetail />} />
            </Routes>
          </>
          :
          <>
            <nav className="navbar">
              <Logo />
              <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/login">Login</Link>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Apod />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/login" element={<AuthPage setUser={setUser} navigate={navigate} />} />
            </Routes>
          </>
      }
    </main>
  )
}

