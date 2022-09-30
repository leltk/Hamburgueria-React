import React from "react";
import { StyledTitle } from "../../styles/typography";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./StyledCart";

export const Cart=({currentSale})=>{


    return(
        <StyledCart>

            <StyledTitle tag="h3" color="white" fontSize="title-2">Carrinho de compras</StyledTitle>
            <ul>
                {
                    currentSale.map(product=>
                        <CartProduct key={product.id} name={product.name} img={product.img} category={product.category} id={product.id}  ></CartProduct> 
                        )
                }
            </ul>

        </StyledCart>

    ) 
} 