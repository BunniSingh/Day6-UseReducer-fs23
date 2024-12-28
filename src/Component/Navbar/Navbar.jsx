import React from 'react'
import style from './Navbar.module.css'
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({numbar}) => {
  return (
    <nav className={style.navbar}>
        <div className={style.logo}>
            <h1>Your Cart</h1>
        </div>
        <div className={style.numberOfItem}>
            <div className={style.number}>{numbar}</div>
            <FaCartPlus className={style.icon}/>
        </div>
    </nav>
  )
}

export default Navbar