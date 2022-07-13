import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavElements';
import '../../App.css'

const Navbar = () => {
    const [showMenuMovil, setShowMenuMovil] = useState(false);
  return (
    <>
    <Nav>
        <NavLink to="/">
            <div className='logo'>
            <img src={require('../../assets/images/logo.png')} alt="logo" />
            </div>
        </NavLink>
        <Bars onClick={()=>setShowMenuMovil(!showMenuMovil)}/>
        <NavMenu open={showMenuMovil}>
            <div className='menu-movil'>
            <NavLink to="/about" activeStyle onClick={showMenuMovil}>
                Sobre el sitio
            </NavLink>
            </div>
            <div className='menu-movil'>
            <NavLink to="/how-to-start" activeStyle onClick={showMenuMovil}>
                Cómo empezar
            </NavLink>
            </div>
            <div className='menu-movil'>
            <NavLink to="/contact" activeStyle onClick={showMenuMovil}>
                Contacto
            </NavLink>
            </div>
            <div className='menu-movil'>
            <NavLink to="/register" activeStyle onClick={showMenuMovil}>
                Registrate
            </NavLink>
            </div>
            <div className='menu-movil'>
                <NavBtn>
                    <NavBtnLink to="/login" onClick={showMenuMovil}>Iniciar sesión</NavBtnLink>
                </NavBtn>
            </div>

        </NavMenu>
    </Nav>
    </>
  );
};

export default Navbar