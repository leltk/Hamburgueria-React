import React from "react";
import { Product } from "../Product";
import { StyledProducts } from "./Products";


export const ProductsList =({products,setCurrentSale,currentSale})=>{
    
    return(


        
        <StyledProducts>
           {products && products.map(product =>
                <Product key={product.id} image={product.img} name={product.name} category={product.category} price={product.price} setCurrentSale={setCurrentSale} currentSale={currentSale} id={product.id} products={products} product={product} ></Product>

            )}

        </StyledProducts>

    )
}