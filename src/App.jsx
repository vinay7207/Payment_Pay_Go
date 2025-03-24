import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';

import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
    const [isNavVisible, setNavVisible] = useState(false);
    const navigate = useNavigate(); // Using useNavigate hook

const toggleNav = () => {
    console.log('Toggle button clicked'); 
    setNavVisible(!isNavVisible);
    console.log('Navigation visibility:', !isNavVisible); // Added log for visibility state
};


    const handleTitleClick = () => {
        navigate('/'); // Navigate to the root path
    };

    return (
        <>
            <div style={{ justifyContent: 'space-between' }}>
                <nav>
                    <div className="navbar-brand" onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
                        Pay & Go {/* Making the title clickable without Link */}
                    </div>
                    <button className="toggle-button" onClick={toggleNav}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </button>
                    <ul id="nav-list" className={isNavVisible ? 'show' : ''}>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </ul>
                    
                    
                </nav>
                <div className="Content_main">
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h1>Get the Best Deals!</h1>
                    <h2 style={{ fontSize: '3em', fontFamily: 'Arial, sans-serif', background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>PAY & GO</h2>
                </div>
                <Routes>
                    <Route path="/" element={<div></div>} /> {/* Empty page for root path */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>

            <div style={{ flex: 1, textAlign: 'left' }} className='right_side'>
                    <div style={{ flex: 1, textAlign: 'left', marginLeft: '100px' }}>

                    <h2>Explore Our Services</h2>
                    <p>Paytm offers a variety of services including mobile recharges, bill payments, and more.</p>
                    <p>Pay anyone directly from your bank account. Pay anyone, everywhere. Make contactless & secure payments in-stores or online using Paytm UPI or Directly from your Bank Account. Plus, send & receive money from anyone.</p>
                </div>
            </div>
            {/* Removed direct rendering of Login and Signup components */}
            </div>
            <div className="footer">
            <p>&copy; 2023 Paytm. All rights reserved.</p>
        </div>
        
       </div>
        </>
    );
}

export default App;
