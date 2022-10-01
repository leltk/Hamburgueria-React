import styled from "styled-components";

export const BtnPrimary= styled.button`

    background-color: var(--color-primary);
    color: var(--white);
    transition: .4s;

    &:hover{

        background-color: var(--gray-20);
        color: var(--gray-50);
        transition: .4

    }

`
export const BtnGray = styled.button`
    
    background-color: var(--gray-20);
    color: var(--gray-50);
    width: 100%;
    padding: 20px;

  
    
`