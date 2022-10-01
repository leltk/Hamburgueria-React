import React from "react";
import { StyledTitle } from "../../styles/typography";
import { StyledCartProduct } from "./StyledCartProduct";

export const CartProduct =({setcurrentSale,currentSale,img,name,category,id,qtd})=>{
    

    const remove = ()=>{
        const arr = currentSale.filter(ele=> ele.id !== id)
        setcurrentSale([...arr])
    }

  

    const minus =()=>{
      
       
        const arr = currentSale.map(ele => {

            if(ele.id === id && qtd >1){

                ele.quantity --

                return ele

            }else{
                return ele
            }
         })
        

         setcurrentSale(arr)
        

        }
    

    const plus =()=>{

      
        const arr = currentSale.map(ele => {

            if(ele.id === id){

                ele.quantity ++ 

                return ele

            }else{
                return ele
            }
         })

         setcurrentSale(arr)
        
    }

    return(

        <StyledCartProduct>
            <figure><img src={img} alt={name} /></figure>
            <div>
                 <div className="cartProductTitle">
                     <StyledTitle tag={'h4'} fontSize="title-4">{name}</StyledTitle>
                     <button onClick={remove}><span className="remove"> Remover</span></button>
                </div>
                <span>{category}</span>  
                <div className="btnQtd"><button type="button" onClick={minus}>-</button><span >{qtd} </span><button type="button" onClick={plus}>+</button> </div>
            </div>
           
            
        </StyledCartProduct>
    )
}