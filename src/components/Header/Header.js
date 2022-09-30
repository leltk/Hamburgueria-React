import styled from "styled-components";


export const StyledHeader = styled.header`

    width:100% ;
   
    background-color: var(--gray-0);
    width: 100%;
    
    >div{
        display: flex;
        flex-direction: column;
        gap:10px;
        align-items: center;
        width: 90%;
        padding: 10px;
        max-width: 1560px;
        margin: 0 auto;
    }


    img{
        max-width: 200px;
    }


    @media(min-width: 1024px){
       >div{
           flex-direction: row;
           justify-content: space-between;
           padding: 10px 30px;


       }
    }
`