import React from "react";
import { BtnPrimary } from "../../styles/components/Buttons/Buttons";
import { StyledSearch } from "./StyledSearch";


export const InputSearch =()=>{

    return (

        <StyledSearch>

            <input type="text" placeholder="Digitar Pesquisa" />
            <BtnPrimary>Pesquisar</BtnPrimary>

        </StyledSearch>
    )

}