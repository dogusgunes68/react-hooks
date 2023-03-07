//import { useState } from "react";
//import { UserContext } from "./components/contexts/UserContext";
//import Hooks1 from "./components/Hooks1";
//import Hooks2 from "./components/Hooks2";
//import Hooks3 from "./components/useReducer/UseReducer";
//import UseRef from "./components/useRef/UseRef";
import UseCallBackAndMemo from "./components/reactmemoandusecallback/UseCallbackAndMemo";
import UseMemo from "./components/useMemo/UseMemo";
//import UseRef2 from "./components/useRef/UseRef2";

/*
*** USECONTEXT VARIABLES ***
const data = [
  {
    id: 1,
    name: "Ahmet",
    email: "ahmet@gmail.com",
    age: 53,
    color: "lightcyan",
  },
  {
    id: 2,
    name: "Mehmet",
    email: "mehmet@gmail.com",
    age: 48,
    color: "honeydew",
  },
  { id: 3, name: "Ali", email: "ali@gmail.com", age: 33, color: "mistyrose" },
];
*/

function App() {
  /*
  USECONTEXT VARIABLES ***
  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => {
    setUsers(
      users.map((user) => (user.id === id ? { ...user, color: color } : user))
    );
  };
  */

  return (
    <div className="App">
      {/*
         <h1 className="text-center">UseEffect</h1>
         <Hooks1></Hooks1>
      */}
      {/*
        <h1 className="text-center">Use Context</h1>
        <UserContext.Provider value={{users,changeColor}}>
        <div className="container">
        <header>
        <h1>Context API</h1>
        </header>
        <Hooks2></Hooks2>
        </div>
        </UserContext.Provider>
      */}
      {/*
        <h2>Use Reducer</h2>
        <Hooks3></Hooks3>
      */}
      {/*
        <h2>Use Ref</h2>
        <UseRef></UseRef>
      */}
      {/*
      <h2>Use Ref2</h2>
      <UseRef2></UseRef2>
      */}
      {/*
      <h2>Use Memo</h2>
      <UseMemo></UseMemo>
      */}
      {/*
      <h2>React.Memo and UseCallback</h2>
      <UseCallBackAndMemo></UseCallBackAndMemo>
      */}
      

    </div>
  );
}
export default App;
