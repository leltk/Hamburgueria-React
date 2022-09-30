import styled from "styled-components";

export const StyledCart = styled.div`
    width:90%;
    max-width: 500px;
    margin: 20px auto;
   
    
    h3{
        background-color: var(--color-primary);
        padding: 15px;
        border-radius: 5px 5px 0 0;
    }

    ul{
        display: flex;
        flex-direction: column;
        gap:20px;
        max-height: 300px;
        overflow-y: auto;
        padding: 10px 0;
        background-color: var(--gray-0);

        
    }


 @media (min-width: 1024px){
    width: 20%;
    min-width: 350px;

    margin: 20px 0;
    
    ul::-webkit-scrollbar{
        display: none;
    }
 }
    

`