
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurants from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(restaurants, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store