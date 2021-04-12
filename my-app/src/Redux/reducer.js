import * as actions from './actionType';



let lastId = 0

export default function reducer(state = [], action){
    if(action.type === actions.GET_DOGS_REQUEST){
        return [
            ...state, action.data]
        }
    return state
}