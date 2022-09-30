import React from "react";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./Header";


export const Header =()=>{


    return(

        <StyledHeader>
            <div>
                <img src={require( "./../../images/burguerKenzie.png")} alt="" />
                <InputSearch></InputSearch>
            </div>
           
         
        </StyledHeader>
       

    )
}