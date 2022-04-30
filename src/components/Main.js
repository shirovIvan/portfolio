import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoCompoment'
import SocialIcons from '../subComponents/socialIcons'
import { NavLink } from "react-router-dom";
import Intro from './intro';
import {motion} from 'framer-motion'
import ParticleComponent from '../subComponents/particleComponent'
    

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;

position: relative;

h2,h3,h4,h5,h6{
    font-family: 'Red Hat Mono', monospace;
    font-weight: 500;
}
`
const Container = styled.div`
padding: 2rem
`

const Contact = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 3;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;
`
const ABOUT = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
@media(max-width: 541px){
    font-size: 12px;
}
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
position: absolute;
top: 50%;
right: 1rem;
transform: translate(40%, -50%) rotate(90deg);
z-index: 2;
@media(max-width: 541px){
    font-size: 12px;
}
`
const WORK = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 3; 
@media(max-width: 541px){
    font-size: 12px;
}
`


const Main = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)
    return (
        <MainContainer>
            <ParticleComponent theme='light'/>
            <Container>
            <LogoComponent text='Широв Иван'/>
            <SocialIcons/>
            <Contact target="_blank" to={{pathname:"mailto:shirov.ivan101@gmail.com"}}>
                <motion.h2
                initial={{
                    y: -200,
                    transition: {type:'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                    y: 0,
                    transition: {type:'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Моя почта
                </motion.h2>
            </Contact>
            <SKILLS to="/skills">
                    <motion.h2
                    initial={{
                        y: -200,
                        transition: {type:'spring', duration: 1.5, delay: 1}
                    }}
                    animate={{
                        y: 0,
                        transition: {type:'spring', duration: 1.5, delay: 1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Что умею?
                    </motion.h2>
                    </SKILLS>
            <BottomBar>
                <WORK to="/work">
                <motion.h2
                initial={{
                    y: 200,
                    transition: {type:'spring', duration: 1.5, delay: 1}
                }}
                animate={{
                    y: 0,
                    transition: {type:'spring', duration: 1.5, delay: 1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                    Портфолио
                </motion.h2>
                </WORK>
                    <ABOUT to="/about">
                    <motion.h2
                    initial={{
                         y: 200,
                        transition: {type:'spring', duration: 1.5, delay: 1}
                     }}
                    animate={{
                        y: 0,
                        transition: {type:'spring', duration: 1.5, delay: 1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Обо мне
                    </motion.h2>
                    </ABOUT>
            </BottomBar>
            
            </Container>
            <Intro/>
        </MainContainer>
    )
}

export default Main