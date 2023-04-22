import React, { useState } from 'react';
import {Link} from "react-router-dom";
import Logo from "../img/logo.png";
import {useContext} from "react";
import {AuthContext} from "../context/authContext.js";
import Hamburger from 'hamburger-react'
//import Register from '../pages/Register';


const Navbar = () => {
  const {currentUser, logout }=useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to ="/" >
          <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className='hamburger'><Hamburger/></div>
        <div className="links">
          <Link className='link' to="/allposts?art"><h6>ART</h6></Link>
          <Link className='link' to="/allposts?movie"><h6>MOVIES</h6></Link>
          <Link className='link' to="/allposts?science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/allposts?books"><h6>BOOKS</h6></Link>
          <Link className='link' to="/allposts?music"><h6>MUSIC</h6></Link>
          <span>{currentUser?.username}</span>
          <span><Link className='link' to="/allposts">All Posts</Link></span>
          {currentUser? <span className="write">
            <Link className="link" to ="/write">Write</Link>
          </span> : <span><Link className="link" to="/register">Register</Link></span>}
          {currentUser ? <span className ="reg-log" onClick={logout}>Logout</span> : <Link className="reg-log" to="/login">Login</Link>}
        </div>
       
      </div>
    </div>
  )
}

export default Navbar