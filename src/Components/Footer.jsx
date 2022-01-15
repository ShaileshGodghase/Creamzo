import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Footer.css'

function Footer() {
    return (
        <>
        <footer className="footer-section">
            <div className="content">
                <div className="footer-content">
                    <p><Link to="/">Creamzo</Link></p>
                    <p><Link to="/contact">Contact Us</Link></p>
                    <p><Link to="/about">About Us</Link></p>
                    <p><Link to="/terms">Terms</Link></p>
                    <p><Link to="/joinus">Join Us</Link></p>
                </div>
            </div>
        </footer>  
        </>
    )
}

export default Footer
