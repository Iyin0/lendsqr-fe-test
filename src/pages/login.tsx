import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import PageTransition from "../components/pageTransition";
import lendsqr from '../images/lendsqr.png'
import hero from '../images/pablo.png'
import '../styles/login.scss'

const Login = () => {

    const [showPwd, setShowPwd] = useState(false)
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()

    const login = (e: any) => {
        e.preventDefault()
        if (email && pwd) {
            window.localStorage.setItem('isLoggedIn', 'true')
            navigate('/')
            window.location.reload()
        }
    }

    return (
        <PageTransition>
            <main className="login">
                <div className="hero">
                    <div>
                        <img src={lendsqr} alt="" />
                        <img src={hero} alt="" />
                    </div>
                </div>
                <div className="form">
                    <form>
                        <h1>Welcome!</h1>
                        <p>Enter details to login.</p>
                        <div>
                            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input type={showPwd ? "text" : "password"} placeholder='Password' value={pwd} onChange={(e) => setPwd(e.target.value)} />
                            <button className="shwPwd" onClick={(e) => { e.preventDefault(); setShowPwd(!showPwd) }}>{showPwd ? 'HIDE' : 'SHOW'}</button>
                        </div>
                        <Link to='/'>FORGOT PASSWORD?</Link>
                        <button className="login-btn" onClick={login}>LOG IN</button>
                    </form>
                </div>
            </main >
        </PageTransition >
    );
}

export default Login;