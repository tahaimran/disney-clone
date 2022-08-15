import React from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
      <div className='logo'><img src={logo} alt="" srcset="" /></div>
      <Link to='/dashboard'><div><button  className='loginBtn'>Login</button></div></Link>
    </div>
  )
}

export default Header