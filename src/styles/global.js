import { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`

   :root{

    /* Colors primary */
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secundary:  #EB5757;

    /* Colors grey-scale */
    --gray-100: #333333;
    --gray-50: #828282;
    --gray-20: #E0E0E0;
    --gray-0: #F5F5F5;
    --white: #fff;

    /* feedback pallete */

    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;


   }

   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;

   }
   img{
    max-width: 100%;
    max-height: 100%;
   }

   button{
      background-color: transparent;
      border: none;
      border-radius: 8px;
      padding: 10px;
      font-weight: 600;
   }
`

export default GlobalStyle