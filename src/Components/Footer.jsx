import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/Footer.css'

function Footer() {
    return (
        <>
        <footer className="footer-section">
            <div className="content">
                <div className="footer-content">
                    <p><Link to="/">Trending</Link></p>
                    <p><Link to="/">World</Link></p>
                    <p><Link to="/">Business</Link></p>
                    <p><Link to="/technology">Technology</Link></p>
                    <p><Link to="/entertainment">Entertainment</Link></p>
                    <p><Link to="/">Sports</Link></p>
                    <p><Link to="/">Science</Link></p>
                    <p><Link to="/">Health</Link></p>
                    <p><Link to="/fashion">Fashion</Link></p>
                    <p><Link to="/">Literature</Link></p>
                </div>
            </div>
        </footer>  
        </>
    )
}

export default Footer
