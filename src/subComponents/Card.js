import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
width: 16rem;
height: 30vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 3rem;
margin-right: 3rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;
margin-bottom: 50px;
&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
  
}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);

`
const Descriprion = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-weight: 500;
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5rem;
display: flex;
flex-wrap: wrap;
${Box}:hover &{
    border-top: 2px solid ${props => props.theme.text}; 
}
`

const Tag = styled.span`
margin-right: 1rem;
font-size: calc(0.8em + 0.3vw);

`

const Footer = styled.footer`
display: flex;
justify-content: space-between;
`
const Link = styled(NavLink)`
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 0.5rem cacl(2rem + 2vw);
border-radius: 0 0 0 50px; 
width: 6em;
height: 2em;
display: flex;
justify-content: center;
align-items: center;

font-size: calc(1em + 0.5vw); 
${Box}:hover &{
    background-color: ${props => props.theme.text}; 
    color: ${props => props.theme.body};
}
` 
const Git = styled(NavLink)`
color: inherit;
text-decoration: none;
fill: ${props => props.theme.body};
${Box}:hover &{
    &>*{
        fill: ${props => props.theme.text};

    }
}    
`  

const Item = {
    hidden:{
        scale: 0
        },
        show:{
            scale:1,
            transition: {
                type: 'spring',
                duration: 0.5
            }
        }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    
    return(
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Descriprion>
                {description}
            </Descriprion>
            <Tags>
                {
                    tags.map((t, id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                <Link to={{pathname: `${demo}`}} target="_blank">
                    Visit
                </Link>
                <Git to={{pathname: `${github}`}} target="_blank">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card;