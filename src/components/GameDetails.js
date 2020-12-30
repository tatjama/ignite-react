import React from 'react';
//styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
//reducers
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';

const GameDetails = ({pathId}) => {
    const history = useHistory();
    //Exit document 
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            document.body.style.overflow = "auto"
            history.push('/');
        }
    }
    //Data
    const {screen, game, isLoading} = useSelector((state) => state.detail)
    return(
        <>
        {!isLoading && (
        <CardShadow className = "shadow" onClick = {exitDetailHandler}>
            <Detail layoutId = {pathId}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId = {`title ${pathId}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <Info>
                        <h3>Platforms</h3>
                        <Platforms>
                            { game.platforms.map((data) => {
                                return(
                                    <h3 key = {data.platform.id}>{data.platform.name}</h3>
                                )
                            })
                            }
                        </Platforms>
                    </Info>
                </Stats>
                    <Media>
                        <motion.img
                            layoutId = {`image ${pathId}`} 
                            src={smallImage(game.background_image, 1280)} 
                            alt={game.name}
                        />
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map((screen) => {
                            return(                                
                                    <img src = {screen.image} key = {screen.id} alt = {screen.image}/>
                            )
                        })}
                    </div>
            </Detail>
        </CardShadow>
        )}
        </>
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
    padding: 2rem 5rem;
    position: absolute;
    left: 10%;
    background: white;
    color:black;
    img{
        width: 100%;
    }
`
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)` 
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`
const Media = styled(motion.div)` 
    margin-top: 5rem;
    img{
        width: 100%;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetails;