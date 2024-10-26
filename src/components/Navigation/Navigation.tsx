import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation: React.FC = () => {
    return (
        <header>
            <nav className="header">
                <div className="logo">
                    <NavLink to="/">HomeworkMvc</NavLink>
                </div>
                <div className="desktop-menu">
                    <NavLink to="/">Home</NavLink>
                </div>

                <Menu right className="burger-menu">
                    <NavLink to="/">Home</NavLink>
                </Menu>
            </nav>
        </header>
    )
}

export default Navigation
