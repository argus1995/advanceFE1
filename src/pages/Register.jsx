import '../css/register.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../store/authStore'

export default function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })
    const register = useAuthStore((state) => state.register)
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
            await register(formData)
            navigate('/course')
        } catch (err) {
            console.error('Registration error:', err)
        }
    }

    return (
        <main className="register-main">
            <div className="register-container">
                <div className="grup-judul">
                    <h3 className="judul">Pendaftaran Akun</h3>
                    <p className="sub-judul">Yuk, daftarkan akunmu sekarang juga!</p>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <div className="input-group">
                            <label>Nama <span>*</span></label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                    </div>
                    <div className="button-group">
                        <button
                            className="btn"
                            id="btn-daftar"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Registering ...' : 'Register'}
                        </button>
                    </div>
                </form>
                <div className="divider-container">
                    <div className="divider-line"></div>
                </div>
                <button className="btn-google">
                    <img src="./images/google.png" alt="" />
                    Masuk dengan Google</button>
            </div>
        </main>
    )
}
