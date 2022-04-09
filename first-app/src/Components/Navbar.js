import React from "react";
// import back_icon from '../Assets/icons8-back-48.png';
// import menu_icon from '../Assets/icons8-menu-64.png';
import './Navbar.css';

const Navbar = () => {
    const[showMenu, setShowMenu] = React.useState("state")
    // const onClick = () => setShowMenu(true)
    
    return (
        <header> 
            <nav> 
                <img className ='back' src={require('../Assets/icons8-back-48.png')} alt=''></img>
                <img className ='menu' src={require('../Assets/icons8-menu-64.png')} alt='' onClick={() =>setShowMenu(!showMenu)}></img>
                { showMenu ?  <MenuBar /> :null}
            </nav>
        </header>
        
    )
}

const MenuBar = () => {
    const[showMenu, setShowMenu] = React.useState(true)
    return (
        
    <div className="menu-bar">
         <img className ='menu' src={require('../Assets/icons8-menu-64.png')} alt='' onClick={() =>setShowMenu(!showMenu)}></img>
         { showMenu ?  <MenuBar /> :null}
        <li className="menu-list"><a href="">Menu</a></li>
        <li className="menu-list"><a href="">Menu</a></li>
        <li className="menu-list"><a href="">Menu</a></li>
        <li className="menu-list"><a href="">Menu</a></li>
        <li className="menu-list"><a href="">Menu</a></li>
    </div>
    )
}

export default Navbar