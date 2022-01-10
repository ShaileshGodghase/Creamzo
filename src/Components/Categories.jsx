import React from 'react'
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
                    <p><Link to="world">World</Link></p>
                    <p><Link to="business">Business</Link></p>
                    <p><Link to="technology">Technology</Link></p>
                    <p><Link to="entertainment">Entertainment</Link></p>
                    <p><Link to="sports">Sports</Link></p>
                    <p><Link to="science">Science</Link></p>
                    <p><Link to="health">Health</Link></p>
                    <p><Link to="fashion">Fashion</Link></p>
                    <p><Link to="literature">Literature</Link></p>
                </div>
            </div>
         </div>
         </div>
        </>
    )
}

export default Categories
