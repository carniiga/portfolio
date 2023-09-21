import styled from "styled-components";


export const HomeContainer = styled.div`
    width: 100vw;
    height : 100vh;
    display: flex;
    font-family: var(--font);
    flex-direction: column;
    background-image : url("images/teclado.jpg");
    background-size : cover;
    justify-content: space-around;
`;
export const HeroButtonsContainer = styled.button`
    background-color: var(--bg-button);
    margin: 20px auto;
    border-style: none;
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height : 50px;
    transition: 2s;
    cursor: pointer;
    border-radius: 20px;
    width: 200px;
    &:hover{
        color: white;
        background-color: #EA7728;
    }
    
`;
export const HomeParagraph = styled.p`
    color: white;
    font-size: 16px;
`;
export const HomeDescription = styled.div`
    margin: 20px auto;
    height: fit-content;
    width: 500px;
    display: flex;
    flex-direction:column;

`;
export const HomeTitle = styled.h3`
    font-family: var(--font);
    font-size: 20px;
    margin: 10px auto;
`;


