import { Link } from 'react-router-dom'
import logo from "./logo.png"
import './Logo.css'

export default function Logo() {
    return (
        <Link to="/">
            <img className="logo" src={logo} alt='naapi logo' />
        </Link>
    )
}