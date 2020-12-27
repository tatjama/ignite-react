import React from 'react';
//styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
//reducers
import { useSelector } from 'react-redux';

const GameDetails = () => {
    //Data
    const {screen, game} = useSelector((state) => state.detail)
    return(
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platform">
                            { game.platforms.map((data) => {
                                return(
                                    <h3 key = {data.platform.id}>{data.platform.name}</h3>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
                    <div className="media">
                        <img src={game.background_image} alt={game.name}/>
                    </div>
                    <div className="description">
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="gallery">
                        {screen.results.map((screen) => {
                            return(                                
                                    <img src = {screen.image} key = {screen.id} alt = {screen.image}/>
                            )
                        })}
                    </div>
            </Detail>

        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }

`
const Detail = styled(motion.div)` 
    width: 80%;
    border-radius:1rem;
    padding: 2rem 20rem;
    position: absolute;
    left: 10%;
    background: white;
    color:black;
    img{
        width: 100%;
    }
`

export default GameDetails;