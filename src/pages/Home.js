import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
//Components and pages
import Game from '../components/Game';
import GameDetails from '../components/GameDetails';
//styled animation
import styled from 'styled-components';
import {motion} from 'framer-motion';

import { useLocation } from 'react-router-dom';


const Home = () => {
    //get current location
    const location = useLocation()
    const pathId = location.pathname.split('/')[2];
    console.log(pathId)
    //Fetch game
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadGames())
    },[dispatch])

   const { popular, upcoming, newGames } = useSelector((state) => state.games
   )

   
    return (
        <GameList>      
        {pathId && <GameDetails/>}
            <h2>Upcoming games</h2>
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
        </GameList>
    )
}

const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding: 5rem 0rem;
}
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); 
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home