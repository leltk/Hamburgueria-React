import styled from "styled-components";

export const StyledSearch = styled.div`
        display: flex;
        border: 2px solid var(--gray-20);
        border-radius: 8px;
        padding:5px;
        gap: 5px;
        width: 95%;
        max-width: 550px;
        background-color: var(--white);
        
       

    input{
        border: none;
        padding: 5px;
        width: 95%;
        height: 40px;
        
        
     
    }

    input[type="text"]::-webkit-input-placeholder{
        color: var(--gray-20);
    }

   
    @media(min-width:1024px){
        max-width: 300px;
    }
 
`