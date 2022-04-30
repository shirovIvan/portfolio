import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import LogoComponent from '../subComponents/LogoCompoment'
import SocialIcons from '../subComponents/socialIcons'
import {lightTheme} from './Theme'
import ParticleComponent from '../subComponents/particleComponent'
import astonaut from '../assets/Images/spaceman.png'
import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

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

const Box = styled.div`
background-color: ${props => props.theme.body}
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
`
const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
padding: 2rem;
height: 500px;
width: 50vw;
z-index: 3;
line-height: 1.5;
display: flex;
justify-content: center;
align-items: center;
font-size: calc(0.6rem + 1vw);
backdrop-filter: blur(4px);
text-align: center;
fontFamily: Red Hat Mono;
@media(max-width: 1024px){
    font-size: 25px;
}
@media(max-width: 690px){
    font-size: 20px;
}
`

const AboutPage = () => {
    const ref = useRef(null);
    return (
        <ThemeProvider theme={lightTheme}>
            <Box >
            <LogoComponent text='На главную'/>
            <SocialIcons theme='light'/>
            <ParticleComponent theme='light'/>
            <Main ref={ref} variants={container} initial='hidden' animate='show'>
                Я занимаюсь разработкой веб-сайтов и веб-приложений.<br/><br/>
                Также я занимаюсь разработкой телеграм ботов.<br/><br/>
                В свободное время изучаю computer vision.

            </Main>
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage