
import './Header.scss';
import logoImage from '../../assets/images/logo.png';
// import React, { useState } from 'react';
// import * as FaIcons from "react-icons/fa6";
import * as  AiIcons  from "react-icons/ai";
import * as PiIcons from "react-icons/pi";
// import { NavLink } from 'react-router-dom';
import  SideBar from '../../component/SideBar/SideBar';

function Header(){


    

    return(
     
         <header className="header">

           <a  className="header-anchor" href="#"><img className="header-anchor__logo" src= {logoImage} alt="logo" /></a>
           
          <SideBar />

          {/* <div className='toggleNavbar'>
          <PiIcons.PiDotsNineBold />
          </div> */}
      
      
      

       </header>
   
       
    )
}

export default Header;