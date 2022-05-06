import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget';

function NavBar(props) {
    return (
        <div className='navbar'>
            <div className='nombreLogo'>
                <h1 className='nombreMarca'>Nebula Tecnologia</h1>
                <CartWidget/>
            </div>
            <ul className='navbtn'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/category/auriculares'>Auriculares</NavLink></li>
                <li><NavLink to='/category/teclados'>Teclados</NavLink></li>
                <li><NavLink to='/category/mouses'>Mouses</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar;