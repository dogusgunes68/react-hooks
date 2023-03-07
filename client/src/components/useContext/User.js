import { useContext } from "react";
import  {UserContext} from "../contexts/UserContext";

const Hooks2User =({user})=>{
    const context = useContext(UserContext);
    return(
        <div style={{background:user.color, margin:20}}>
            <h3>{user.name}</h3>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
            Color:{" "}
            <input value={user.color} onChange={e=> context.changeColor(user.id,e.target.value)}></input>
        </div>
    )
}

export default Hooks2User;