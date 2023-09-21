import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    backdrop-filter: blur(5px);
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    justify-content: space-between;
    color: white;
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