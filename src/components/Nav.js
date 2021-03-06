import React, { useState } from 'react';
//Style and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logo from '../img/logo.svg';
import {fadeIn} from '../animation';

import { useDispatch } from 'react-redux';
import { fetchSearch } from '../actions/gamesAction';


const Nav = () => {
    const [valueInput, setValueInput] = useState("")
    const pageSize = 9
    const inputHandler = (e) => {
        setValueInput(e.target.value)
    }
    const dispatch = useDispatch();
    const submitHandler = (e)  =>{
        e.preventDefault()
       dispatch(fetchSearch(valueInput, pageSize))
       setValueInput("")
    }
    const clearSearch = () => {
        dispatch({type: "CLEAR_SEARCHED"})
    }

    return(
        <StyledNav variants = {fadeIn} initial = "hidden" animate = "show">
            {valueInput}
            <Logo onClick={clearSearch}>
                <img src= {logo} alt="logo" />
                <h1>Ignite</h1>
            </Logo>
            <input 
                onChange={inputHandler} 
                value = {valueInput} 
                type="text"
            />
            <button 
                type="submit" 
                onClick = {submitHandler}
            >Search</button>
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
    @media screen and (max-width:450px){
        padding: 0rem 0rem;
        input{
            width: 60%;
            font-size:1rem;
            margin-top:0rem;
        }
        button{
            font-size:1rem;
        }
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
