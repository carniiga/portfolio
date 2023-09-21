import { createGlobalStyle} from "styled-components";
import styled from "styled-components";


export const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
   
}
body {
    color: white ;
    transition: all ease 1s;
}
:root {
        --font : 'Roboto', sans-serif;
        --bg-button : #FC6B00
    }

`
export const ButtonGlobal  = styled.button`
 background-color: var(--bg-button);
    margin: 40px  auto;
    border-style: none;
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height : 40px;
    transition: 2s;
    cursor: pointer;
    border-radius: 20px;
    width: 200px;
    &:hover{
        color: white;
        background-color: #EA7728;
    }
`;