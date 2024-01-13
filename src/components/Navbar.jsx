import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css"


export const Navbar = () => {
    const [showMenu, setshowMenu] = useState(false);
    const state = useSelector((state) => state.handleCart);
    return (
        <header className='primary-header'>
            <div className="logo">
                <h3>STORE</h3>
            </div>
            <nav className={showMenu ? "mob-menu-list" : "menu-list"}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        
            <div className="icons">
                <NavLink to="/login">
                    <i className="bi bi-person-circle"></i>
                </NavLink>
                <NavLink to="/cart">
                    <i className="bi bi-bag"></i>
                    <span className="black">{state.length}</span>
                </NavLink>
                <div className='mob-menu-btn' onClick={() => setshowMenu(!showMenu)} style={{padding: "0 1rem"}}>
                    <MenuIcon style={{ color: "black"}} />
                </div>
            </div>
        </header>
    )
}

export default Navbar;