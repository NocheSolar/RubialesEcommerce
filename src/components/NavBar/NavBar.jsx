import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='navbar'>
            <h1 className='nombreMarca'>Nebula Tecnologia</h1>
            <ul className='navbtn'>
                <a href=""> <button>Inicio</button></a>
                <a href=""><button>Auriculares</button></a>
                <a href=""><button>Teclados</button></a>
                <a href=""><button>Mouses</button></a>
                <a href=""><button>Combos</button></a>
                <a href=""><button>Contacto</button></a>
            </ul>
        </div>
    );
}

export default NavBar;