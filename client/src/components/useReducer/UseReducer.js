import { useReducer, useState } from "react";
import {reducer} from "./reducer";

const initialState = {
  data:"",
  loading:false,
  error:""
}

const Hooks3 = () => {

  // USEREDUCER --> STATE MANAGEMENT
  const [state, dispatch] = useReducer(reducer, initialState);
  const {data, loading, error} = state;
  /*
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  */

  const fetchDog = async () => {
    /*
    setLoading(true);
    setData("");
    setError("");
    */
   dispatch({type:"FETCH_START"});

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        /*
        setData(res.message);
        setLoading(false);
        */
       dispatch({type:"FETCH_SUCCESS",payload:res.message});
      })
      .catch((error) => {
        /*
        setLoading(false);
        setError("Error");
        */
       dispatch({type:"FETCH_ERROR",payload:error.message});

      });
  };

  return (
    <div>
      <button onClick={fetchDog} disabled={loading}>
        Fetch Dog
      </button>
      {data && (
        <div>
            <img src={data} alt="Random Dog"></img>
        </div>
      )}
      {error && (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Hooks3;
