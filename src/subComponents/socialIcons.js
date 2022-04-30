import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Telegram, Vk } from "../components/AllSvgs";
import styled from "styled-components";
import { motion } from 'framer-motion'
import { animate } from "tsparticles/Utils";


const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index: 3;
&>*:not(:last-child){
    margin: 0.5rem 0;
}
@media(max-width: 541px){
    left: 1rem;
}
` 
const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.theme.text}

`


const SocialIcons = () => {
    return(
        <Icons>
            <motion.div
            initial ={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring, duration: 1, delay:1.2'}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://github.com/Manowar-rgb"}}>
                    <Github height={25} width={25} fill='currentColor'/>
                </NavLink>
            </motion.div>
            <motion.div
            initial ={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring, duration: 1, delay:1.4'}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://t.me/carnifex_py"}}>
                    <Telegram height={25} width={25} fill='currentColor'/>
                </NavLink>
            </motion.div>
            <motion.div
            initial ={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring, duration: 1, delay:1.6'}}
            >
                <NavLink style={{color: 'inherit'}} target="_blank" to={{pathname:"https://vk.com/x.zibit"}}>
                    <Vk height={25} width={25} fill='currentColor'/>
                </NavLink>
            </motion.div>
            <Line
            initial={
                {
                    height: 0
                }
            }
            animate={{
                height: '8rem'
            }}
            transition={{
                type: 'spring', duration: 1, delay: 0.8
            }}
            />
        </Icons>
    )
}

export default SocialIcons;