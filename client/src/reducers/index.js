import _ from 'lodash';

const initialState = {
    restaurants: [],
    favourites: []
}
const restaurants = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_RESTAURANTS':
            return {...state, restaurants: action.payload.data }

        case 'FETCH_FAVOURITE_RESTAURANTS':
            return {...state, favourites: JSON.parse(localStorage.getItem('FAVOURITE')) || [] }

        case 'SAVE_FAVOURITE_RESTAURANTS':
            let favourite = JSON.parse(localStorage.getItem('FAVOURITE')) || [];
            if (_.findIndex(favourite, action.payload.data) === -1) {
                favourite.push(action.payload.data);
                localStorage.setItem('FAVOURITE', JSON.stringify(favourite)); 
                return {...state, favourites: favourite };
            }
            return state

        case 'REMOVE_FAVOURITE_RESTAURANTS':
            let favlist = JSON.parse(localStorage.getItem('FAVOURITE')) || [];
            favlist.splice(_.findIndex(favlist, action.payload.data), 1);
            localStorage.setItem('FAVOURITE', JSON.stringify(favlist));
            return {...state, favourites: favlist };  
            
        default:
            return state
    }
}

export default restaurants
