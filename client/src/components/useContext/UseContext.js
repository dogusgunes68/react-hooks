import { useContext } from "react";
import Hooks2User from "./User";
import  {UserContext} from "../contexts/UserContext";

const Hooks2 = ()=>{
    const context = useContext(UserContext);
    return(
        <>
          <h2>User List</h2>  
          {
            context.users.map(user =>(
                <Hooks2User key={user.name} user={user}></Hooks2User>
            ))
          }
        </>
    )
}

export default Hooks2;