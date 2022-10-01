import React from "react";
import { BtnPrimary } from "../../styles/components/Buttons/Buttons";
import { StyledSearch } from "./StyledSearch";


export const InputSearch =({setFilteredProducts, products, setIsSearch,setSearch})=>{

    const search = (evt)=>{

        if(evt.target.value){
            setIsSearch(true)
            setSearch(evt.target.value)
            
        }else{
            setIsSearch(false)
        }
        
        const item = evt.target.value.toLowerCase().replace("-","").normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().replace(" ","")
        const arr = products.filter(product =>{

            if(product.name.toLowerCase().replace("-","").normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().replace(" ","").includes(item) || product.category.toLowerCase().replace("-","").normalize('NFD').replace(/[\u0300-\u036f]/g, "").trim().replace(" ","").includes(item)){
                    return product
            }

       } )

        setFilteredProducts(arr)
       
    }

    return (

        <StyledSearch>
            
            <input type="text" onChange={ search} placeholder="Digitar Pesquisa" />
            <BtnPrimary>Pesquisar</BtnPrimary>

        </StyledSearch>
    )

}