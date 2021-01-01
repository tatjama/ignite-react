import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';

const Nav = () => {
    return(
        <StyledNav>
            <Logo>
                <img src= {logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <input type="text"/>
            <button>Search</button>
        </StyledNav>
    )
}

const StyledNav = styled(motion.div)` 
    padding: 3rem 5rem;
    text-align: center;
    input{
        width: 30%;
        border: none;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
        padding: 0.5rem;
        margin-top: 1rem;
        font-size: 1.5rem;
    }
    button{
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        cursor: pointer;
        background-color: #ff7676;
        color: white;
    }
`
const Logo = styled(motion.div)` 
        display: flex;
        justify-content: center;
        padding: 1rem;
        cursor: pointer;
        img{
            width: 2rem;
            height: 2rem;
        }
`

export default Nav;
