import React, { useState } from 'react';
import { Route,Routes,Link } from 'react-router-dom';

import './signupStyles.css'; // Importing the signup styles
import Login from './Login';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registered:', { username, email, password });
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Signup</h1>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <div className="Login">Already User<Link to="/login">Login</Link></div>
                <button type="submit">Signup</button>
            </form>
            {/* Removed Routes from here */}
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default Signup;
