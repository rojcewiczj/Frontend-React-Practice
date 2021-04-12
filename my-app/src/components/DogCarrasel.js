import store from '../Redux/store'
import * as actions from '../Redux/actions';
const unsubscribe = store.subscribe(()=> {
    console.log("Store has changed", store.getState())
})



export default function DogCarrasel(){
    store.dispatch(actions.getDogsRequest())
     






    return(
        <div>
           
        </div>
    )
}