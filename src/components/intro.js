import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
top: 50%;
transform: translate(-50%, -50%);
width: 55vw;
height: 40vh;
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
border: 2px solid #000;

`
const Text = styled.div`
font-size: calc(0.63em + 1vw);
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    text-align: center;   
}
`

const Intro = () => {
    return(
    <Box
    initial={{height: '0vh'}}
    animate={{height: '40vh'}}
    transition={{type: 'spring', duration: 2, delay: 0}}
    >
            <Text>
                <h1>Привет, я Frontend developer</h1>
            </Text>
    </Box>
    )
}

export default Intro;