import React from 'react'
import './Login.css'
import spotifylogo from './spotifylogo.jpg'
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className='login'>
            <img src={spotifylogo} alt='spotify logo' />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
