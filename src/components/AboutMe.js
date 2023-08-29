import React from "react";
import styled from "styled-components";
import userPrograming from '../assets/userPrograming.png'


const AboutMe = ({info})=>{
    return(
            <AboutContainer>
                <AboutImage src={userPrograming}/>
                <AboutMeText>{info}</AboutMeText>
            </AboutContainer>


    )
}

const AboutContainer = styled.div((props)=>
`
    display: inline-table;
    width: 100%;
    max-width: 1440px;
    heigth: 400px;
    background-color: rgba(0,0,0,0.9);
    justify-content: space-around;
    text-align: center;
`)

const AboutImage = styled.img((props)=>
`
 heigth: 200px;
 width: 250px;


`)

const AboutMeText = styled.p((props)=>
`
        color: white;
        width: 315px;
        height: 100%;
        display: inline-block;
        font-family: ${props.theme.fonts.nameFont};

`)

export default AboutMe;
