import React from 'react';
import styled from 'styled-components';
import Computer from '../assets/computer2.gif'
import verticalLine from '../assets/verticalLine.png'
import Button from './Button';



const Banner=() =>{
return( 
<BannerStyled>
    <MainContainer>
    <TextContainer>
        <Name> CARLOS A. LEDEZMA </Name>
        <LineVertical src={verticalLine}/>
        <ComputerImage src={Computer}/>
    </TextContainer>
    <ButtonContainer>
      <Button text='Informacion'/>
      <Button text='Proyectos'/>
    </ButtonContainer>
    </MainContainer>
    
</BannerStyled>    
);



};



const BannerStyled = styled.div((props)=>

`width: 100%;
 height: 370px;
 background-color: ${props.theme.colors.backgroundBanner};
 top:0;

 @media (min-width: ${props.theme.measures.desktop}){
    height:800px;
  }

`
)

const MainContainer = styled.div((props)=>
`
background-color: ${props.theme.colors.backgroundOpacity};
top: 0;
display: grid;
height: 100%;
width: 100%;
justify-content: center;
max-width: 1440px;




`)

const TextContainer = styled.div((props )=>
`
 display: inline-flex;
 justify-content: space-around;
 max-width: 1440px;
 padding: 5px;
 align-items: center;
 margin-top: 40px;



`)

const Name = styled.h1((props)=>
`
  font-size: ${props.theme.fontSizes.nameMobile};
  text-shadow: -2px 3px 5px black;
  color: white;
  line-heigth:400;
  padding-left: 11px;
  font-family: ${props.theme.fonts.nameFont};
      @media (min-width: ${props.theme.measures.tablet}){
       font-size:36px;
      }
       @media (min-width: ${props.theme.measures.desktop}){
       font-size: 94px;
       width: 510px;

       }
`)

const LineVertical = styled.img((props)=>
`

width: 5px;
height: 110px;

   @media (min-width: ${props.theme.measures.desktop}){
  height: 200px;

  }

`)
const ComputerImage = styled.img((props =>`
height:135px;
width: 185px;

@media (min-width: ${props.theme.measures.desktop}){
  
  height:300px;
  width: 400px;

  }


`))

const ButtonContainer = styled.div((props =>`
display: flex;
justify-content: space-around;
`))


export default Banner;



