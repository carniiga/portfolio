import React   from 'react'
import {  BurgerMenuIcon, LogoContainer, LogoNavbar, NavbarContainer, NavbarItemLi, NavbarItemLink, NavbarItemsContainer } from './navbarStyles'
import { useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as menuActions from "../../redux/toggleMenuReducer/toggleMenuActions"


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const hidden = useSelector(state => state.toggleMenuReducer.menuIsHidden)



  return (
    <>
    <NavbarContainer>
        <LogoContainer onClick={() => navigate("/")}>
         <LogoNavbar  src='/images/Portfolio.png'></LogoNavbar>
        </LogoContainer>
        <BurgerMenuIcon onClick={() => dispatch(menuActions.toggleMenu())}/>
        <NavbarItemsContainer hidden = {hidden}>
                <NavbarItemLink href='/images/Cv Agustin Fernandez.pdf' download >Curriculum Vitae</NavbarItemLink>
                {location.pathname === "/contactMe" ? (null) : (<NavbarItemLi to="/contactMe" target = "_blank">Contacto</NavbarItemLi>)}
        </NavbarItemsContainer>
        
        
    </NavbarContainer>
    </>
  )
}

export default Navbar;