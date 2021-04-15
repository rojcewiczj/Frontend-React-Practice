import {
    GET_DOGS_REQUEST,
    GET_DOGS_SUCCESS,
    GET_DOGS_FAIL,
    SET_CARRESEL_RANGE
} from "../constants/dogConstants"

function changeDogs (newRange, doggos){
    const range = newRange
    const newDogs = []
    for(let i = range[0]; i < range[1]; i++){
        newDogs.push(doggos[i])
    }
    console.log(newDogs)
    return newDogs
}
export const dogReducer = (state = {dogs: []}, action) => {
    switch(action.type){
        case GET_DOGS_REQUEST:
            return {loading: true, dogs:[]};
        case GET_DOGS_SUCCESS:
            return {loading: false, dogs: action.payload};
        case GET_DOGS_FAIL:
            return {loading: false, error: action.payload};
        case SET_CARRESEL_RANGE:
            // function changeDogs (){
            //     const range = action.payload
            //     const newDogs = []
            //     for(let i = range[0]; i < range[1]; i++){
            //         newDogs.push(state.dogs[i])
            //     }
            //     console.log(newDogs)
            //     return newDogs
            // }
            return { 
                ...state,
                range: action.payload,
                dogsCarresel: changeDogs(action.payload, state.dogs)}
    
        default:
            return state
    }
}