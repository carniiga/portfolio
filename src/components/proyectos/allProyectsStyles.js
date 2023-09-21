import styled from "styled-components";
import { ButtonGlobal } from "../../styles/GlobalStyles";


export const AllProyectsWrapper = styled.div`

    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const AllProyectsContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;
    height: 550px;
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

