import React from 'react';
//styles
import styled from 'styled-components';
import { motion } from 'framer-motion';
//reducers
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { smallImage } from '../util';
//Images
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import nintendo from '../img/nintendo.svg';
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';

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
    //Platforms 
    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation
            case "PlayStation 5":
                return playstation
            case "Xbox Series S/X":
                return xbox
            case "Xbox S":
                return xbox
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "iOS":
                return apple
            case "Nintendo Switch":
                return nintendo
                default:
                return gamepad
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
                                    <img 
                                        src = {getPlatform(data.platform.name)} 
                                        alt = {data.platform.name} 
                                        title = {data.platform.name} 
                                        key = {data.platform.id}>
                                    </img>
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
    z-index: 5;
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
    z-index: 10;
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