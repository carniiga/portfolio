import styled from "styled-components";
export const BarsContainer = styled.div`    
    margin-top: 5px;
    height: 100px;
`;
export const BarsSwichContainer = styled.div`
    width: 80px;
    height: 30px;
    border: 1px solid grey;
    background-color: ${props => props.isClicked ? "#9eee85" : "#E7EAEC"};
    border-radius: 50px ;
    display: flex;
    align-items: center;
    text-align: center;
    transition: all ease 1s;
   
`;
export const CircleSwich = styled.div`
    margin: 0 3px 0 3px;
    height: 22px ;
    width: 22px;
    background-color: ${props => props.isClicked ? "white" : "green"};
    transform: ${props => props.isClicked ?  "translateX(49px)" : "translateX(0)"};
    transition: all  ease 1s ;
    border-radius: 100px;
    cursor: pointer;
`;
export const BarsSwichNavbar = styled.div`
`;