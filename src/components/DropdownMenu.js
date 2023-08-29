import React from 'react';
import styled from 'styled-components';
import { anchors } from '../data/constants';


const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const AnchorsContainer = styled.div((props) =>
    `display: inline-block;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 100%;
 top: 20%;
 position: relative;
 

`
)

const Anchor = styled.a((props) =>
    `
color: white;
font-size: ${props.theme.fontSizes.anchorMobile};
font-family: ${props.theme.fonts.anchorsFont};
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
margin: 0 20px;
justify-content: center;

transition: font-size 0.3s;

&:hover{
    font-size: 41px;
    transition: font-size 0.1s;
   }

`
 )

const DropdownMenu = ({ isOpen, onClose }) => {
  return (
    <MenuWrapper isOpen={isOpen}>
         <AnchorsContainer>
                
                {anchors.map((item, index) => {
                    return (

                        <Anchor
                            key={index}
                            href={item.href}
                        > {item.text}</Anchor>
                           )
                })}
                    
            </AnchorsContainer>
    </MenuWrapper>
  );
};

export default DropdownMenu;