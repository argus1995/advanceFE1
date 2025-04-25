import { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import useAuthStore from '../store/authStore'

export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const toggleMenu = function () {
        setIsActive(!isActive)
    }

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const user = useAuthStore((state) => state.user)
    const logout = useAuthStore((state) => state.logout)

    return (
        <header>
            <div className="header-container">
                <Link to="/"><img src="/logo.png" alt="Logo Video Belajar" className="logo" /></Link>

                <div className={`nav-avatar-container ${isActive ? "active" : ""}`}>
                    <nav>
                        {isAuthenticated ? (
                            <>
                                <Link to="/course">Course</Link>
                                <button onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}
                    </nav>
                    <img src="/avatar.png" className="avatar" alt="" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
            </div>
        </header>
    )
}