import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import {dogReducer} from './reducers/dogReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {range:[0,10]};
const middleWare = [thunk];
const reducer =  combineReducers({
    dogsList: dogReducer
})

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;



