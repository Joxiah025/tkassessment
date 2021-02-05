import axios from 'axios';
import { BaseUrl } from '../constants'

//synchronous action creator
const fetchRestaurantSuccess = (data) => ({
    type: 'FETCH_RESTAURANTS',
    payload: { data }
})

export const saveFavouriteRestaurants = ( data ) => ({
    type: 'SAVE_FAVOURITE_RESTAURANTS',
    payload: { data }
})

export const fetchFavouriteRestaurants = (data) => ({
    type: 'FETCH_FAVOURITE_RESTAURANTS',
    payload: { }
})

export const removeFavouriteRestaurants = (data) => ({
    type: 'REMOVE_FAVOURITE_RESTAURANTS',
    payload: { data }
})

/*asynchronous thunk action creator
  calls the api, then dispatches the synchronous action creator
*/
export const fetchRestaurants =  () => {
    return async dispatch => {
        try {
            let res = await axios.get(BaseUrl)
            dispatch(fetchRestaurantSuccess(res.data.data.restaurants))
        }
        catch(e){
            console.log(e)
        }
    }
}