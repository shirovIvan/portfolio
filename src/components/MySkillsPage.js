import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoCompoment'
import SocialIcons from '../subComponents/socialIcons'
import {lightTheme} from './Theme'
import ParticleComponent from '../subComponents/particleComponent'
import { motion } from 'framer-motion'

const Box = styled(motion.div)`
background-color: ${props => props.theme.body}
width: 100vw;
position: relative;
display: flex;
justify-content: space-evenly;
flex-direction: row;
align-items: center;
@media(min-width: 801px){
    margin-top: 140px;
}
@media(max-width: 800px){
    flex-direction: column;
    margin-top: 140px;
}
@media(max-width: 690px){
    flex-direction: column;
    margin-top: 100px;
}
@media(max-width: 601px){
    flex-direction: column;
    margin-top: 80px;
}
margin-bottom: 30px
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 550px;
z-index: 3;
line-height: 1.5;
fontFamily: Red Hat Mono;
flex-direction: column;
justify-content: space-between;
cursor: pointer;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
@media(max-width: 800px){
    width: 300px; 
    margin-top: 50px;
}
@media(max-width: 499px){
    width: 250px; 
    margin-top: 50px;
}
@media(max-width: 450px){
    width: 200px; 
    margin-top: 50px;
}
@media(max-width: 400px){
    width: 180px;
    margin-top: 50px;
}
@media(max-width: 368px){
    width: 165px;  
    margin-top: 50px;
}
@media(max-width: 340px){
    width: 150px;  
    margin-top: 50px;
}
@media(max-width: 326px){
    width: 140px;  
    margin-top: 50px;
}
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);
@media(max-width: 800px){
    font-size: 2em;
}
${Main}:hover &{
    &>*{
        fill: ${props => props.theme.body};
    }
    &*>:first-child{
        margin-right: 1rem;
    }
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 1rem 0 1rem 0;
@media(max-width: 800px){
    font-size: 20px;
}
@media(max-width: 450px){
    font-size: 17px;
}
@media(max-width: 326px){
    font-size: 15px;
}
${Main}:hover &{
    &>*{
        color: ${props => props.theme.body};
    }
}
strong{
    margin-bottom: 1rem;
    text-transform: uppercase;

}
ul{
    margin-left: 2rem;
}
li{
    margin-top: 2rem; 
}
`
const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 1,
            duration: 1,
        }
    }
}
const MySkillsPage = () => {
    const ref = useRef(null);
    return (
        <ThemeProvider theme={lightTheme}>
            <LogoComponent text='На главную'/>
            <SocialIcons/>
            <ParticleComponent theme='light'/>
        <Box ref={ref} variants={container} initial='hidden' animate='show'>
            <Main>
            <Title>Frontend developer</Title>
            <Description><p>Разрабатываю клиентскую сторону пользовательского интерфейса</p></Description>
            <Description>
            <ul>
            <strong>Skills</strong>
                <li>
                    HTML
                </li>
                <li>
                    CSS(SCSS/SASS)
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    React
                </li>
            </ul>
            </Description>
            </Main>
            <Main>
            <Title>Python developer</Title>
            <Description><p>Разрабатываю телеграм ботов. Делаю backend на django, и изучаю computer vision</p></Description>
            <Description>
            <strong>Skills</strong>
            <ul>
                <li>
                    Python
                </li>
                <li>
                    Django
                </li>
                <li>
                    Aiogram
                </li>
                <li>
                    OpenCV
                </li>
            </ul>
            </Description>
            </Main>
        </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage