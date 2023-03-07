import { useEffect, useState } from "react";

const Hooks1 =()=>{

    const [counter,setCounter] = useState(0);
    const [timer,setTimer] = useState(0)
    /*
    useEffect(()=>{
        console.log('UseEffect'); 
        // This works after component is loaded.
        //And this works after the component is updated.
    })
    

    useEffect(()=>{
        console.log('UseEffect with array'); 
        // This works after component is loaded.
        //And this works after the component is updated.
    },[counter])//If an element that given this array change every time, UseEffect works again.

    */

    useEffect(()=>{
        const myTimer = setInterval(()=>{
            setTimer(timer => timer + 1);
        },1000)

        return ()=> clearInterval(myTimer);//clear interval if the component unmount/destroyed.
    },[])

    useEffect(()=>{
        console.log('Timer:',timer);
    })

    const increase = ()=>{
        setCounter(counter + 1);
    }

    return (
        <div>
            <h2>Use Effect Component</h2>
            <p>{`use effect counter:${counter}`}</p>
            <button onClick={()=>increase()}>Increase</button>
        </div>
    )
}

export default Hooks1;