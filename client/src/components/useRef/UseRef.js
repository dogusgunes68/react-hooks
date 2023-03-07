import { useRef } from "react";

const UseRef = ()=>{
    const inputRef = useRef();
    const divRef = useRef();

    const focusOnInput =()=>{
        inputRef.current.focus();
    }
    const addBorderToDiv =()=>{
        divRef.current.style.border = "1px solid black"
    }
    return (
        <div ref={divRef}>
            <h2>React</h2>
            <h3>useRef Hook</h3>
            <input ref={inputRef} placeholder="Type here..."/>
            <button onClick={focusOnInput}>Input'a odaklan</button>
            <button onClick={addBorderToDiv}>Div'e border ekle</button>
        </div>
    )
}

export default UseRef;