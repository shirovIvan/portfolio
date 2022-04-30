import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoCompoment'
import SocialIcons from '../subComponents/socialIcons'
import {lightTheme} from './Theme'
import ParticleComponent from '../subComponents/particleComponent'
import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import { motion } from 'framer-motion'
import { NavLink } from "react-router-dom";
import { Github } from "../components/AllSvgs";


const Box = styled.div`
margin-top: 200px;
margin-bottom: 20px;
@media(max-width: 800px){
    margin-top: 70px;
}
`
const Main = styled(motion.ul)`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-left: 70px;
`
const Card_item = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
width: 300px;
height: 300px;
z-index: 3;
line-height: 1.5;
fontFamily: Red Hat Mono;
backdrop-filter: blur(8px);
flex-direction: column;
justify-content: space-between;
margin: 30px 30px 0 0;
`
const Title = styled.h2`
margin: 30px 0 0 0;


`
const Description = styled.h3`
margin: 15px 0 0 0;
`
const Tags = styled.h3`
font-weight: normal;
font-style: italic;
margin: 15px 0 0 0;
`
const Link = styled.a`
display: flex;
justify-content: center;
align-items: center;
height: 50px;
width: 150px;
text-decoration: none;
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
margin: 30px 0 0 0;
transition: all 0.5s;
&:hover{
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
}
`

const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition:{
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const WorkPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <ParticleComponent theme='light'/> 
            <LogoComponent text='На главную'/>
            <SocialIcons theme='light'/>
            <Box>
                <Main>
                    <Card_item variants={container} initial='hidden' animate='show'>
                        <Title>CubeSpace</Title><br/>
                        <Description>Небольшой лендинг</Description>
                        <Tags>#html, #js, #css</Tags><br/>
                        <Link href='https://manowar-rgb.github.io/cubespace/' target="_blank">
                            Visit
                        </Link><br/>
                    </Card_item>
                    <Card_item variants={container} initial='hidden' animate='show'>
                        <Title>MySkills</Title><br/>
                        <Description>Рекламный лендинг</Description>
                        <Tags>#html, #css</Tags><br/>
                        <Link href='https://manowar-rgb.github.io/mySkills/' target="_blank">
                            Visit
                        </Link><br/>
                    </Card_item>
                    <Card_item variants={container} initial='hidden' animate='show'>
                        <Title>Marvel</Title><br/>
                        <Description>React app</Description>
                        <Tags>#React, #api, #scss</Tags><br/>
                        <Link href='https://github.com/Manowar-rgb/Marvel' target="_blank">
                            Visit
                        </Link><br/>
                    </Card_item>
                    <Card_item variants={container} initial='hidden' animate='show'>
                        <Title>Portfolio-site</Title><br/>
                        <Description>React app</Description><br/>
                        <Tags>#React, #css, #js</Tags><br/>
                        <Link href='/' target="_blank">
                            Visit
                        </Link><br/>
                    </Card_item>
                </Main>
            </Box>
        </ThemeProvider>
    )
}

export default WorkPage