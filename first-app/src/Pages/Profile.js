import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/Components/Navbar.css';
import './Profile.css';

function Profile() {
  return (
    <div>
      <header> 
        <nav> 
            <Link to ="/" className="back" ><img className ='back' src={require('../Assets/icons8-back-48.png')} alt=''></img></Link>
            <h4 className='nav-title'>Settings</h4>
        </nav>
      </header>
      <div className='profile-wrapper'>
        <img className="profile-img" alt="" src={require('../Assets/avatar1.png')}></img>
        <h4 className='profile-name'>Fellycia Angelo</h4>
      </div>
      <div className='settings-menu'>
        <img className='settings-menu-icons' alt='' src={require('../Assets/icons8-male-user-64.png')}></img>
        <li className='settings-name'><h4>Account</h4></li>
      </div>
      <div className='settings-menu'>
        <img className='settings-menu-icons' alt='' src={require('../Assets/icons8-male-user-64.png')}></img>
        <li className='settings-name'><h4>Account</h4></li>
      </div>
      <div className='settings-menu'>
        <img className='settings-menu-icons' alt='' src={require('../Assets/icons8-male-user-64.png')}></img>
        <li className='settings-name'><h4>Account</h4></li>
      </div>
      <div className='settings-menu'>
        <img className='settings-menu-icons' alt='' src={require('../Assets/icons8-male-user-64.png')}></img>
        <li className='settings-name'><h4>Account</h4></li>
      </div>
    </div>
   );
}

export default Profile;