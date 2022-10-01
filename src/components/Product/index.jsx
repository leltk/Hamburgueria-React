import React from "react";
import { BtnPrimary } from "../../styles/components/Buttons/Buttons";
import { StyledTitle } from "../../styles/typography";
import { StyledProduct } from "./Product";

export const Product=({image,name,category,price,setCurrentSale,currentSale,id,products,product })=>{

    const buy =()=>{

        if(currentSale.find(ele=> ele.id === id) ){
            const arr = currentSale.map(ele => {

                if(ele.id === id){
    
                    ele.quantity ++ 
    
                    return ele
    
                }else{
                    return ele
                }
             })
            setCurrentSale(arr)

        }else{
             setCurrentSale([...currentSale,{...product,quantity:1}])
        }

      


    }



    return (
       <StyledProduct>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div>
                <StyledTitle tag="h3" color="black" fontSize="title-3"  >{name}</StyledTitle>
                <span>{category}</span>
                <p>{`R$ ${price.toFixed(2).replace(".",",")}`}</p>
                <BtnPrimary type="button" onClick={()=> buy()}>Adicionar</BtnPrimary>
            </div>
        </StyledProduct>

    )
}