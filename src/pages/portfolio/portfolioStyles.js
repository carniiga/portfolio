import styled from "styled-components";

export const PortFolioContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-image: url("images/teclado.jpg");
    background-size:cover;
    justify-content: space-around;
    @media(min-width:1024px){
        height: 100%;
    }
`;