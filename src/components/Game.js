import React from 'react';
//styled animation
import  styled  from 'styled-components';
import { motion } from 'framer-motion';
//Action
import { useDispatch } from 'react-redux';
import {loadDetails} from '../actions/detailAction';


const Game = ({name, image, id, released}) => {
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        dispatch(loadDetails(id))
        console.log(id)
    } 

    return (
        <StyledGame onClick={loadDetailsHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name}/>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)` 
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0, 0.2);
text-align: center;
border-radius: 1rem;
img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
}
`

export default Game