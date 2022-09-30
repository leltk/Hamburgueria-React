import React from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledCartProduct } from "./StyledCartProduct";

export const CartProduct =({setcurrentSale,currentSale,img,name,category,id})=>{


    return(

        <StyledCartProduct>
            <figure><img src={img} alt={name} /></figure>
            <div>
                 <div className="cartProductTitle">
                     <StyledTitle tag={'h4'} fontSize="title-4">{name}</StyledTitle>
                     <span className="remove"> Remover</span>
                </div>
                <span>{category}</span>  
            </div>
           
            
        </StyledCartProduct>
    )
}