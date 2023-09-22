import styled from "styled-components";

export const AboutMeContainer = styled.div`
    max-width: 50%;
    margin: 60px auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
export const AboutMeTitle = styled.h2`
    margin: 30px;
    /* text-shadow: 2px 2px 8px #FF0000; */
    text-shadow: 2px 2px 8px #FF0000;
    font-size: 50px;
    color: orange;
    text-align: center;
    @media(min-width:320px){
        margin-right: 50px;
    }
`;
export const AboutMeImg = styled.img`
    margin-top: 50px;
    height: 500px;
    width: 500px;
    @media(min-width :320px){
        height: 300px;
        width: 300px;
    }
`;
export const ParagraphColor = styled.span`
    color: #1D9Bf0;
    font-weight: 500;
    border-bottom:  0.5px solid ;

`;
export const AboutMePhContainer = styled.div`
    margin-top: 30px;
    min-width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    @media(min-width:320px){
        height: fit-content;
        width: 300px;
    }
    @media(min-width:768px){
        width: 500px;
    }
    @media(min-width:1024px){
        width: 700px;
        
    }

    
   
`;

export const AboutMeDesctTitleContainer = styled.div`
    min-width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;
export const AboutMeDescTitle = styled.h3`
    justify-content: center;
    @media(min-width:1024px){
        font-size: 20px;
    }
`;
export const AboutDescParagraphContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    padding: 5px;
    display: flex;
    
`;
export const AboutDescParagraph = styled.p`
    @media(min-width:1024px){
        font-size: 18px;
    }
`;