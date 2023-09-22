import styled from "styled-components";

export const TecnologiasContainer = styled.div`
    margin: 10px auto;
    max-width: 80%;
    height: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(min-width:320px){
    flex-direction: column;
    height: fit-content;
    }
    @media(min-width : 768px){
        flex-direction: row;
    }
`;      