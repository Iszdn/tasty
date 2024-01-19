import React, { useState } from 'react'
import "./index.scss"
import { NavLink } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
    const [open, setOpen] = useState(false)
    function handleOpen() {
        setOpen(!open)
    }
  return (
    <nav id='navbar'>
        <div className="container">
<div className="nav">
    
        <div className="tasty">
            Tasty
        </div>
        <div className="navigations">
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/wish"><span><GoHeart /></span></NavLink>
                </li>
                <li>
                    <NavLink to="/basket"><span><AiOutlineShoppingCart /></span></NavLink>
                </li>
            </ul>
        </div>
        <div className="bar" onClick={()=>handleOpen()}>
        <FaBars />Menu
        </div>
    </div>
</div>

<div className={`navigations-media ${open ? "active-nav" : " "}`}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/add">Admin</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/wish">Wishlist</NavLink>
                </li>
                <li>
                    <NavLink to="/basket">Basket</NavLink>
                </li>
            </ul>
      
</div>
    </nav>
  )
}

export default Navbar