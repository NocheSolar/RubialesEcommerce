import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import { useCartContext } from "../Context/CartContextProvider";
import CartWidget from '../CartWidget/index';

function NavBar() {
    const { totalCount } = useCartContext();
    return (
        <div className='navbar'>
            <Link to='/'>
            <div className='nombreLogo'>
                <h1 className='nombreMarca'>Nebula Tecnologia</h1>
                {totalCount() > 0 && <CartWidget />}
            </div>
            </Link>
            <ul className='navbtn'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/category/Auriculares'>Auriculares</NavLink></li>
                <li><NavLink to='/category/Teclados'>Teclados</NavLink></li>
                <li><NavLink to='/category/Mouses'>Mouses</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;