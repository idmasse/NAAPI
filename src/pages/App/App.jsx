import './App.css';
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import Apod from "../Apod/Apod";
import Posts from '../Posts/Posts';
import SearchArchive from '../SearchArchive/SearchArchive';

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<Apod />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/search" element={<SearchArchive />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
