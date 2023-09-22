import styled from "styled-components";
import { ButtonGlobal } from "../../styles/GlobalStyles";


export const AllProyectsWrapper = styled.div`
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(min-width:320px){
        height: 100%;
       
    }
`;
export const AllProyectsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    height: 550px;
    @media(min-width:320px){
        margin-top: 50px;
        height: fit-content;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    @media(min-width:1024px){
        flex-direction: row;
    }
`;
export const ButtonPageContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    width: 300px;
`;

export const ButtonPageDown = styled(ButtonGlobal)`
    width: 100px;
    display: ${props => props.hidden ? "none" : "flex"} ;
`;
export const ButtonPageUp = styled(ButtonGlobal)`
    width: 100px;
    display: ${props =>props.hidden ? "flex" : "none"};
`;

