import styled,{css} from "styled-components";
import { BaseTitle } from "./components/typograhy";

export const StyledTitle = styled(BaseTitle)`

    font-weight: 700;
    color: ${({color})=>{
        if(color === "black"){
            return "var(--gray-100);"

        }else if(color ==="gray"){
            return "var(--gray-50);"
        }
        else if(color === "white"){
            return "var(--white);"
        }
    }}

    ${({fontSize})=> {

        if(fontSize === "title-1"){
            return css`
                font-size; 26px;
            `

        }else if (fontSize ==="title-2"){
            return css`
                font-size: 22px;
            `
        }else if (fontSize ==="title-3"){
            return css`
                font-size: 18px;
            `
        }else if (fontSize ==="title-4"){
            return css`
            font-size: 14px;
            `
        }

    }  
}

`


    
