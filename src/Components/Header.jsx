import React, {useState} from 'react'
import '../Css/Header.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';

function Header(){
    return (
        <nav className='wrapper'>
           <div className="content">
                <div className="navbar">
                    <Link to="/"><img src={Logo} alt="Creamzo" /></Link>
                    <div className="search-wrapper">
                        <div className="search-bar">
                             <form action="/">
                                 <button className='search-icon'><i className="fa fa-search"></i></button>
                                 <input className="search-field" placeholder='Search News..' type="text" />
                             </form>
                        </div>
                    </div>
                    <div className="search-join-us">
                        <button>JOIN US</button>
                    </div>
               </div>
           </div>
        </nav>
    )
}

export default Header;