import React, {useState} from "react";
import * as FaIcons from "react-icons/fa6";
import * as  AiIcons  from "react-icons/ai";
import * as  IoIcons  from "react-icons/io";
import * as MdIcons from "react-icons/md";
import { NavLink , Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import './SideBar.scss';

function SideBar({openSidebar, handleCloseSidebarClick}) {

    const[isOpen, setIsOpen] = useState(false);

    function toggleSideBar(){
        setIsOpen(!isOpen);
    }
    

 const SideBarLists = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <MdIcons.MdPermContactCalendar />,
        className: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus />,
        className: 'nav-text'
    },
    {
        title: 'Comments',
        path: '/comments',
        icon: <FaIcons.FaComment />,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text'
    }
];
console.log(SideBarLists);



   return (

   
      <nav className="header-nav">
        <ul className="header-nav__list">
            <li className="header-nav__item">
                Home
            </li>
            <li className="header-nav__item">
              Products
            </li>
        </ul>
      </nav>
   
   )
   
   
};
export default SideBar;

