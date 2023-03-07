import { useRef, useState } from "react"

const UseRef2 = ()=>{

    const value = useRef(0);
    const [, setDummy] = useState({});

    const increase = ()=>{
        setDummy({})// This cause rendering
        value.current += 1;// even if value.current changes, component does not render.
    }
    console.log(value);
    return(
        <div>
            <h2>Use Ref Hook 2</h2>
            <button onClick={increase}>Increase Ref value</button>
        </div>
    )
}

export default UseRef2;