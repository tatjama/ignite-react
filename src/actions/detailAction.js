import axios from 'axios';
import { gameDetailURL, gameScreenshotsURL } from '../api';

export const loadDetails = (id) =>async (dispatch) => {
        dispatch({
            type: 'LOADING_DETAIL'
        })
    const detailData = await axios.get(gameDetailURL(id));
    const screenShotsData = await axios.get(gameScreenshotsURL(id));

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data,
            screen: screenShotsData.data
        }
    })
}

