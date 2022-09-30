import styled from "styled-components";

export const StyledCartProduct=styled.li`
    display: flex;
    max-width: 500px;
    

    figure{
        min-width: 80px;
        height: 100px;
    }
    
    >div{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 10px;
        width: 100%;
        max-width: 100%;
        
       
        padding: 0 5px;

    }

    span{
        font-size: 12px;
        color: var(--gray-50);
    }
    .cartProductTitle{
        display: flex;
        justify-content:space-between;
        min-width: 210px;
        max-width: 400px;
        padding: 0 10px 0 0;
        
        


        & h4{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            width: 100px;
            box-sizing:border-box
            

           
        }

        & span{
            justify-self: flex-end;
        }
    
    }

    @media (min-width:360px) {
        .cartProductTitle h4{
            width: unset;
        }
    }
`