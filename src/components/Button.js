import React from "react";
import styled  from "styled-components";

const Button = ({text}) =>{
    return(
        <Btn>
          {text}
        </Btn>

    )

}

const Btn = styled.div((props)=>
`
    height: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    color: white;
    font-family: ${props.theme.fonts.anchorsFont};
    background-color: ${props.theme.colors.sapGreen};

   &: hover{
    background-color: #80934a;
    transition: easy-in-out 0.7s;
   }

    @media (min-width: ${props.theme.measures.desktop}){

        font-size: 36px;
        height:86px;
        width: 348px;
      
        }

`)



export default Button;