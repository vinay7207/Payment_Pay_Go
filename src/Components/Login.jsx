import React, { useState } from 'react';

import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Signup from './Signup'; // Importing Signup component
import './loginStyles.css'; // Importing the login styles

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    autoComplete="username"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />



                <div className="link-container">
                    <a href="#">Forgot Password?</a>  <Link to="/signup" className="register-link">Sign Up</Link>
                </div>


                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    console.log('Logged in:', { username, password });
                }}>Login</button>

            </form>

        </div>
    );
}

export default Login;
