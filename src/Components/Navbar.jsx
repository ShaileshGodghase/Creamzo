import React, {useState} from 'react'
import '../Css/Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../Logo.png';

function Navbar() {
    const [menuState, setmenuState] = useState(false)
    
    function menuCloseHandler(){
        setmenuState(false)
    }
    function menuClickHandler(){
        setmenuState(true)
    }
    return (
        <>
        <nav className={menuState ? `Navbar show`:`Navbar`}>
            <div className="content">
                <div className="logo">
                    <Link to="/" onClick={menuCloseHandler}>
                        <img src={Logo} alt="Creamzo" />
                    </Link>
                </div>
                <ul className="menu-list">
                    <div className="icon cancel-btn" onClick={menuCloseHandler}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div>
                    <Link to="/" onClick={menuCloseHandler}>
                        <img className="nav-categories" src={Logo} style={{margin: "0 auto"}} alt="Creamzo" />
                    </Link>
                    </div>
                    <div className="search">
                        <form action="/">
                            <div className="input-container">
                                <button><i className="fa fa-search input-icon"></i></button>
                                <input className="input-field" type="text" placeholder="Search for News.." name="usrnm" />
                            </div>
                        </form>
                    </div>
                    <div className="join-us">
                        <button>JOIN US</button>
                    </div>
                </ul>
                <div style={{width:"100px"}}></div>
                <div className={menuState ? "icon menu-btn hide":"icon menu-btn"} onClick={menuClickHandler}>
                    <i className="fas fa-bars"></i>
                </div>  
            </div>
        </nav>        
        </>
    )
}

export default Navbar
