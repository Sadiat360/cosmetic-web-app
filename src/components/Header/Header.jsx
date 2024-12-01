
import './Header.scss';
import logoImage from '../../assets/images/logo.png';
import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa6";
import * as  AiIcons  from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData/SideBarData';

function Header(){
    const [sidebar, setSideBar] = useState(false);

    // const showSideBar = () => setSideBar(!sidebar)
    function handleSideBarClick(){
        setSideBar(!sidebar)
    }

    

    return(
       <header className="header">
         <a  className="header-anchor" href="#"><img className="header-anchor__logo" src= {logoImage} alt="logo" /></a>

         <div className='header-bars'>
           <Link to="#"  className='header-nav__menu'>

           <FaIcons.FaBars onClick={handleSideBarClick} />
         
           </Link>

        </div>

         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu__list">

                <li className='bars-toggle'>
                    <Link to="#" className='header-nav__menu'>
                    <AiIcons.AiOutlineClose />
                    </Link>
                </li>

                {SideBarData.map((data, index) => {
                    return(
                        <li key={index} className={data.className}>
                            <Link to={data.path}>
                               {data.icon}
                         <span>{data.title} </span>
                            </Link>

                        </li>
                    )
                })}
                {/* <li className="header__item"><a href="#" className="header__link">Home</a></li>
                <li className="header__item"><a href="#" className="header__link">    About Us</a></li>
                <li className="header__item"><a href="#" className="header__link">    How it works</a></li>
                <li className="header__item"><a href="#" className="header__link">    LogIn </a></li> */}
            </ul>    

         </nav> 




       </header>
    )
}

export default Header;