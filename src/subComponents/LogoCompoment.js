import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.h1`
display: inline-block;
color: ${props => props.theme.text}
font-family: 'Red Hat Mono', monospace;
position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
color: #000000;
@media(max-width: 800px){
    transform: rotate(90deg);
    transform-origin: top left;
    margin-left: 30px; 
}
`
const LogoComponent = (props) => {
    return(
        
            <NavLink  to='/'><Logo>{props.text}</Logo></NavLink>
        
    )
}

export default LogoComponent