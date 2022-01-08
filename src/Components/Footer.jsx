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
                    <p><Link to="/">Contact Us</Link></p>
                    <p><Link to="/">About Us</Link></p>
                    <p><Link to="/technology">Terms</Link></p>
                    <p><Link to="/entertainment">Join Us</Link></p>
                </div>
            </div>
        </footer>  
        </>
    )
}

export default Footer
