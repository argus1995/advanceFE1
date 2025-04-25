import '../css/login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import { Link } from 'react-router-dom'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const login = useAuthStore((state) => state.login)
    const error = useAuthStore((state) => state.error)
    const loading = useAuthStore((state) => state.loading)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(formData)
            navigate('/course')
        } catch (err) {
            console.error('Login error:', err)
        }
    }

    return (
        <main className="login-main">
            <div className="login-container">
                <div className="grup-judul">
                    <h3 className="judul">Masuk ke Akun</h3>
                    <p className="sub-judul">Yuk, lanjutin belajarmu di videobelajar.</p>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Email <span>*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>Password <span>*</span></label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <a href="#">Lupa Password?</a>
                    </div>
                    <div className="button-group">
                        <button
                            className="btn"
                            id="btn-masuk"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Logging in ...' : 'Login'}
                        </button>
                        <Link to="/register">
                            <button className="btn" id="btn-daftar">Daftar</button>
                        </Link>
                    </div>
                </form>
                <div className="divider-container">
                    <div className="divider-line"></div>
                </div>
                <button className="btn-google">
                    <img />
                    Masuk dengan Google</button>
            </div>
        </main>
    )
}
