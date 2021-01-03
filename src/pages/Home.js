import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//Components and pages
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
//styled animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import {fadeIn} from '../animation';

import { useLocation } from 'react-router-dom';


const Home = () => {
    const [pageSize, setPageSize] = useState(10)
    //get current location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2];
    //Fetch game
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames(pageSize))
    },[dispatch, pageSize])

   const { popular, upcoming, newGames, searched } = useSelector((state) => state.games
   )
   const selectHandler = (e) => {
    setPageSize(e.target.value)
   }
   
    return (
        <GameList variants = {fadeIn} initial = "hidden" animate = "show">   
         
        <AnimateSharedLayout to = "crossfade">     
         
            <AnimatePresence>{pathId && <GameDetails pathId={pathId}/>}</AnimatePresence>
               {(searched.length !== 0) && <><h2>Searched games</h2>
                <Games>
                    {searched.map((game) => {
                        return (
                            <Game 
                                name = {game.name} 
                                image = {game.background_image} 
                                released = {game.released} 
                                id = {game.id} 
                                key = {game.id}
                            />
                        )
                    })}
                </Games></>}
                <h2>Upcoming games</h2>
                <label htmlFor="page_size"> Choose page size</label>
                <select id="page_size" onChange = {selectHandler} value = {pageSize}>
                    <option value = "5">5</option>
                    <option value = "10">10</option>
                    <option value = "15">15</option>
                    <option value = "20">20</option>
                </select>
                <Games>
                    {upcoming.map((game) => {
                        return (
                            <Game 
                                name = {game.name} 
                                image = {game.background_image} 
                                released = {game.released} 
                                id = {game.id} 
                                key = {game.id}
                            />
                        )
                    })}
                </Games>
                <h2>Popular games</h2>
                <Games>
                    {popular.map((game) => {
                        return (
                            <Game 
                                name = {game.name} 
                                image = {game.background_image} 
                                released = {game.released} 
                                id = {game.id} 
                                key = {game.id}
                            />
                        )
                    })}
                </Games>
                <h2>New games</h2>
                <Games>
                    {newGames.map((game) => {
                        return (
                            <Game 
                                name = {game.name} 
                                image = {game.background_image} 
                                released = {game.released} 
                                id = {game.id} 
                                key = {game.id}
                            />
                        )
                    })}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    )
}

const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding: 5rem 0rem;
}
@media screen and (max-width:450px){
    padding: 0rem 2rem;
    h2{
        font-size: 1.5rem;
    }
}
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    @media screen and (max-width:450px){
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
    }
`

export default Home