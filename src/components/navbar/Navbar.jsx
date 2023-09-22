import React   from 'react'


import {  LogoContainer, LogoNavbar, NavbarContainer, NavbarItemLi, NavbarItemLink, NavbarItemsContainer } from './navbarStyles'
import { useLocation, useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()




  return (
    <>
    <NavbarContainer>
        <LogoContainer onClick={() => navigate("/")}>
         <LogoNavbar  src='/images/Portfolio.png'></LogoNavbar>
        </LogoContainer>
        <NavbarItemsContainer>
                <NavbarItemLink href='/images/cv Agustin Fernandez.pdf' download >Curriculum Vitae</NavbarItemLink>
                {location.pathname === "/contactMe" ? (null) : (<NavbarItemLi to="/contactMe" target = "_blank">Contacto</NavbarItemLi>)}
        </NavbarItemsContainer>
        
        
    </NavbarContainer>
    </>
  )
}

export default Navbar;