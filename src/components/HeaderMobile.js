import React, {useState} from "react";
import styled from 'styled-components';
import CLBLogo from '../assets/CLB Logo_OnScroll.png'
import HamburguerButton from "./HambuguerBtn";
import DropdownMenu from "./DropdownMenu";




const HeaderMobile = ()=>{

    const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

const closeMenu = () => {
    setIsOpen(false);
};
    return(
        <MainContainer>
            <HamburguerButton isOpen={isOpen} onClick={toggleMenu} />
            <DropdownMenu isOpen={isOpen} onClose={closeMenu} />
            <Image src={CLBLogo}/>

            
        </MainContainer>
        
)


}

const MainContainer = styled.div((props)=>
` 
width:100%;
top: 0;
heigth: 50px;
background-color: rgba(0,0,0,0.6);
display: flex;
align-items: center;
position: fixed;
justify-content: space-between;

`

)

const Image = styled.img((props)=>

`  width: 100px;
    heigth:80px;

`)






export default HeaderMobile