import React, {useState} from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom';

function Categories() {
    
    return (
        <>
        <div className="content">
         <div className="categories-section">
            <div className="all-category">
                <div className="cat">
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
         </div>
         </div>
        </>
    )
}

export default Categories
