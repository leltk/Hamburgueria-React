import styled from "styled-components";

export const StyledProduct= styled.li`

    
    display: flex;
    flex-direction: column;
    border: 2px solid var(--gray-20);
    border-radius: 5px;
    width: 300px;
    min-width: 300px;
    max-height: 320px;
    

    figure{
        width: 100%;
        height: 150px;
        background-color: var(--gray-0);
        border-radius: 5px 5px 0 0;
        display: flex;
        justify-content: center;
       

    }
    
    div{
        margin-top: 20px;
        margin-left: 10px;

        display: flex;
        flex-direction: column;
        gap:10px;
        padding: 0 0 20px 0;


        span{
            font-size: 14px;
            color: var(--gray-50);
        }

        p{
            font-size: 16px;
            color: var(--color-primary);
        }

        button{
            width: 90px;
        }
    }
   

   @media(min-width: 1024px){
        min-width: 250px;
        max-width: 250px;
       
   }
`

