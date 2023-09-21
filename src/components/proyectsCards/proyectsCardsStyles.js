import styled from "styled-components";

export const ProyectCardContainer = styled.div`
    display: flex;
    font-family: var(--font);
    flex-direction: column;
    margin-left: 5px;
    width: 250px;
    height: 400px;
    gap: 10px;
    backdrop-filter: blur(10px);
    color: white;
    
`;
export const ProyectImg = styled.img`
    margin: 0 auto;
    width: 150px;
    height: 150px;
`;
export const ProyectTitle = styled.h3`
     text-align: center;
     font-size: 20px;
`;
export const ProyectdateParagraph = styled.p`
    font-size: 12px;
    text-align: right;
    margin-right: 10px;
`;
export const ProyectStackParagraph = styled.p`
    border-bottom: 1px solid white;
    width: fit-content;
    font-size: 15px;
`;
export const ProyectDescriptionPg = styled.p`
    font-size: 15px;
    font-weight:bold;
`;
export const ButtonLink = styled.a`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    color: white;
    width: fit-content;
    background-color: var(--bg-button);
    height:30px;
    font-size: 20px;
    text-decoration: none;
        border-style: none;
        border-bottom: none;
    cursor: pointer;
    transition:1s ease all;
    &:hover{
        color: gray;
    }
   
   
`;
