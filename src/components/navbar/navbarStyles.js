import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
export const NavbarContainer = styled.div`
    backdrop-filter: blur(5px);
    height: 150px;
    width: 100%;
    display: flex;
    align-items: center;
    font-family: var(--font);
    justify-content: space-between;
    color: white;
    @media(min-width :320px){
        height: 200px;
    }
    @media(min-width : 1024px){
        height: 150px;
    }
    
`;
export const LogoContainer = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    
`;
export const LogoNavbar = styled.img`
    border-radius: 50%;
    margin: 10px 0 0 50px;
    height: 150px;
    width: 150px;
`;
export const NavbarItemsContainer = styled.ul`
    height: 100px;
    width: 300px;
    margin-right: 50px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    @media(min-width :320px){
        flex-direction: column;
        width: 180px;
        height: 250px;
        margin : 120px 0 0 0;
        display: ${props => props.hidden ? "none" : "flex"};
        background-color: black;
    }
    @media(min-width :1024px){
        flex-direction: row;
        width: 300px;
        display: flex;
        margin: 0;
        height: 100px;
        background: none;
    }
  
`;


export const NavbarItemLink= styled.a`
    font-family: "roboto slab" , sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    transition: 1s;
    color: white;
    cursor: pointer;
   
`
export const NavbarItemLi= styled(Link)`
    font-family: "roboto slab" , sans-serif;
    list-style: none;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    transition: 1s;
    color: white;
    cursor: pointer;
   
`

export const BurgerMenuIcon = styled(GiHamburgerMenu)`
    color: white;
    cursor: pointer;
    font-size: 20px;
    display: none;
    @media(min-width : 320px){
        display: flex;
        font-size: 30px;
        margin-right: 20px;
    }
    @media(min-width : 425px){
        margin-left: 70px;
    }
    @media(min-width : 768px){
        margin-left: 400px;
    }
    @media(min-width : 1024px){
        display: none;
    }
   
   
`;