import React from "react";
import { BtnGray } from "../../styles/components/Buttons/Buttons";
import { StyledTitle } from "../../styles/typography";
import { CartProduct } from "../CartProduct";
import { StyledCart } from "./StyledCart";

export const Cart=({currentSale, setCurrentSale})=>{

   

    return(
        <StyledCart>

            <StyledTitle tag="h3" color="white" fontSize="title-2">Carrinho de compras</StyledTitle>
            <ul>
                { currentSale.length ?
                   currentSale.map(product=>
                        <CartProduct key={product.id} name={product.name} img={product.img} category={product.category} qtd={product.quantity} id={product.id} currentSale={currentSale} setcurrentSale={setCurrentSale}  ></CartProduct> 
                        )

                        : <div>
                                <div className="empty">
                                    <StyledTitle tag={"h3"} fontSize={"title-3"}>Sua sacola está vazia</StyledTitle>
                                    <span>Adicione itens</span>
                                </div>
                        </div>
                }
            </ul>
            
            {
                currentSale.length >0 &&  <div className="total">
                <div>
                    <StyledTitle tag="h4" color="black" fontSize="title-4" >Total</StyledTitle>
                    <span>{ `R$ ${currentSale.reduce((ant,cur)=> ant+(cur.price*cur.quantity),0).toFixed(2).replace(".",",")}` } </span>
                </div>
                 <BtnGray onClick={()=> setCurrentSale([]) }>Remover Todos</BtnGray>
            </div>    
            }
           
        </StyledCart>

    ) 
} 