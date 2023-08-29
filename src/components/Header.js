import React from 'react';
import styled from 'styled-components';
import { anchors } from '../data/constants';
import CLBLogo from '../assets/CLB Logo_OnScroll.png';



const Header = () => {

    return (
        <HeaderStyled>
            <InnerContainer>
            <Image src={CLBLogo} />
                <AnchorsContainer>
                
                    {anchors.map((item, index) => {
                        return (
                           <Anchor 
                                key={index}
                                href={item.href}
                            > {item.text}
                            </Anchor>
                               )
                    })}
                        <Drop >ES</ Drop >
                </AnchorsContainer>
            </InnerContainer>

        </HeaderStyled>


    )
}

const HeaderStyled = styled.header((props) =>
    ` width: 100%;
  heigth: 100px;
  background-color: ${props.theme.colors.backgroundOpacity}; 
  display: flex;
  top:0;
  position: fixed;
  justify-content: center;
  z-index: 10;

`)

const InnerContainer = styled.div((props) =>
    `
display: flex;
max-width: 1100px;
justify-content: space-between;
width: 100%;
background-color: none;
`

)

const AnchorsContainer = styled.div((props) =>
    `display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 80px;

`
)

const Anchor = styled.a((props) =>
`
color: white;
font-size: ${props.theme.fontSizes.anchorDesktop};
display: flex;
font-family: ${props.theme.fonts.anchorsFont};
align-items: center;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
margin: 0 20px;
transition: font-size 0.3s;

&:hover{
    font-size: 41px;
    transition: font-size 0.2s;
   }

`
 )

const Drop =styled.h1((props)=>
`
 color: white;
 font-family: 'Bayon' , sans-serif;
 font-size: 28px;

`

)

const Image = styled.img((props) =>
`width: 120px;
height: 80px;
`)



export default Header;