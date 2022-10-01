import React from "react";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./Header";


export const Header =( {setFilteredProducts,products,setIsSearch,setSearch})=>{


    return(

        <StyledHeader>
            <div>
                <img src={require( "./../../images/burguerKenzie.png")} alt="" />
                <InputSearch setFilteredProducts={setFilteredProducts} setIsSearch={setIsSearch} products={products} setSearch={setSearch}></InputSearch>
            </div>
           
         
        </StyledHeader>
       

    )
}