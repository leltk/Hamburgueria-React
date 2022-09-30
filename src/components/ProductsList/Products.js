import styled from "styled-components";

export const StyledProducts= styled.ul`
    height: 350px;
    display: flex;
    overflow-x: auto;
    gap: 10px;
    width: 90%;
    margin: 20px 0;

    @media(min-width:1024px){

        
        max-width: 1200px;
        flex-wrap: wrap;
        height: 700px;
    }

    @media (min-width: 1024px){
        width: 80%;
        max-width: 800px;
        justify-content: center;
        ::-webkit-scrollbar{
        display: none;
    }
    }
`