import styled from "styled-components";
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
export const ContactMeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url("/images/teclado.jpg");
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
`;

export const ContactMeIconsContainer = styled.div`
    height: 300px;
    width: 80%;
    margin: 20px auto;
    align-items: center;
    display: flex;
    
`;

export const IconContainer = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20%;
    margin: 0 auto ;
 
`;
export const WspiconContainer = styled.div`
    display: flex;
    border-radius: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 40px;
    height: 40px;
    background-color: lightgreen;
   
`;

export const WspIcon = styled(BsWhatsapp)`
    color: white;
    font-size: 50px;
    cursor: pointer;
`;

export const EmailContainer = styled.div`
    width: 40px;
    height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: white;
    position: relative;

`;

export const EmailIcon = styled(AiOutlineMail)`
    color: red;
    font-size: 50px;
    position: absolute;
    cursor: pointer;
`;