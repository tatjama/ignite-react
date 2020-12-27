import axios from 'axios';
import { gameDetailURL, gameScreenshotsURL } from '../api';

export const loadDetails = (id) =>async (dispatch) => {
    const detaildata = await axios.get(gameDetailURL(id));
    const screenShotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detaildata.data,
            screen: screenShotsData.data
        }
    })
}

