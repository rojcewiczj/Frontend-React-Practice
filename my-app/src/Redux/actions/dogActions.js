import axios from "axios";


import {
    GET_DOGS_REQUEST,
    GET_DOGS_SUCCESS,
    GET_DOGS_FAIL,
    SET_CARRESEL_RANGE
} from "../constants/dogConstants";


export const dogsList = () =>{
    return async (dispatch) =>{
        try{
            dispatch({ type: GET_DOGS_REQUEST});
            const { data } = await axios.get(
            "https://dog.ceo/api/breed/hound/images"
            );

            dispatch({
                type: GET_DOGS_SUCCESS,
                payload: data.message
            });
        } catch(error){
            dispatch({
                type: GET_DOGS_FAIL,
                payload: error.status
            });
        }
    };
};

export const setCarreselRange = (range) => {

 return( { type: SET_CARRESEL_RANGE,
               payload: range });

}


