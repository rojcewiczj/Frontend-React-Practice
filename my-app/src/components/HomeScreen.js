import React, { useEffect, useState } from "react";
import { dogsList, setCarreselRange } from "../Redux/actions/dogActions";
import { useDispatch, useSelector } from "react-redux";
import Dogs from "./Dogs";

const HomeScreen = () => {
    const [newBreed, setNewBreed] = useState("")
    const dispatch = useDispatch();

    async function getDogs (breed ="hound"){
        await dispatch(dogsList(breed))
       dispatch(setCarreselRange([0,10]))

    }
     
    useEffect(() => {
        // dispatch(dogsList())
        // dispatch(setCarreselRange([]))
        getDogs()
    }, [dispatch]); 
    
    const listDogs = useSelector((state)=> state.dogsList);
    console.log(listDogs)
  
    function ChangeRange(){
        const current_range = listDogs.range
        const newRange = [current_range[0] + 1, current_range[1]+1]
        console.log(listDogs.range)
        dispatch(setCarreselRange(newRange))

    }

    function ChangeBreed(event){
        // Array.prototype.random = function () {
        //     return this[Math.floor((Math.random()*this.length))];
        //   }
        //  const breeds=["akita","beagle","coonhound","dalmatian"]
        //  const newBreed = breeds.random()
         getDogs(newBreed)
    }
    const {loading, error, dogs, dogsCarresel} = listDogs;
    
    return(
        <>
            <h1>Dogs</h1>
            {loading ? (
                <h2>...Loading</h2>
            ) : error ?(
                <h2>ERROR</h2>
            ): (<div>
                <div>
                    {dogsCarresel && dogsCarresel.map((dog, index) => (
                        <Dogs key={index} dog = {dog} />
                    ))}
                </div>
                
                <button onClick = {()=> ChangeRange()}> next</button>
                <form onSubmit={ChangeBreed}>
                    <label>
                        Breed
                        <input type = "text" value ={newBreed} onChange={e => setNewBreed(e.target.value)} />
                    </label>

                </form>
                <button onClick = {() => ChangeBreed()}> new breed</button>
                </div>
            )}
        </>
    )
}

export default HomeScreen;