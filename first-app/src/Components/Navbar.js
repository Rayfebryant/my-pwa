import {Link} from "react-router-dom";
import React from "react";
import './Navbar.css';
// import back_icon from '../Assets/icons8-back-48.png';
// import menu_icon from '../Assets/icons8-menu-64.png';


function Navbar () {
    return (
        <header> 
            <nav> 
                <Link to ="/" className ="back"><img className ='back' src={require('../Assets/icons8-back-48.png')} alt=''></img></Link>
                <Link to="/profile" className ='settings'><img  className="settings" src={require('../Assets/icons8-settings-64.png')} alt=''></img></Link>
            </nav>
        </header>
         
    )
}

export default Navbar;