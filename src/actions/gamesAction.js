import axios from 'axios';
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGamesURL } from '../api';

export const loadGames = (size) => async (dispatch) =>{
    //AXIOS API
    const popularData = await axios.get(popularGamesURL(size));
    const upcomingData = await axios.get(upcomingGamesURL(size));
    const newGamesData = await axios.get(newGamesURL(size));

    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })    
}

export const fetchSearch = (game_name, size) => async(dispatch) => {    
    const searchedData = await axios.get(searchGamesURL(game_name, size));
    dispatch({
        type: "FETCH_SEARCHED",
        payload:{            
            searched: searchedData.data.results,
        }
    })
}
