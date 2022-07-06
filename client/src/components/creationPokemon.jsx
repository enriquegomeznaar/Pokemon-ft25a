import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";

// import styles from '../stylesComponents/creation.css'
// const divContainer = {
//     backgroun: red,

// }
export default function Form() {
  const dispatch = useDispatch();
  const Types = useSelector(state=> state.pokemonTypes)
  const [input, setInput] = useState({
    name: "",
    image: "",
    weight: 0,
    height: 0,
    speed: 0,
    defense: 0,
    strength: 0,
    hp: 0,
    types: [],
  });
  useEffect(()=> {
    dispatch(getTypes())
  }, [])
    return (
     
        <div>
          <Link to='/home'><button>Back</button></Link>
          <h1>Create your pokemon!</h1>
          <form>
            <div>
              <label>Name </label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleChange(e)}
              />
              <label>Image </label>
              <input
                type="text"
                value={input.image}
                name="image"
                onChange={(e) => handleChange(e)}
              />
              <label>HP </label>
              <input
                type="number"
                value={input.hp}
                name="hp"
                onChange={(e) => handleChange(e)}
              />
              <label>Strength </label>
              <input
                type="number"
                value={input.strength}
                name="strength"
                onChange={(e) => handleChange(e)}
              />
              <label>Defense </label>
              <input
                type="number"
                value={input.defense}
                name="defense"
                onChange={(e) => handleChange(e)}
              />
              <label>Speed </label>
              <input
                type="number"
                value={input.speed}
                name="speed"
                onChange={(e) => handleChange(e)}
              />
              <label>Height </label>
              <input
                type="number"
                value={input.height}
                name="height"
                onChange={(e) => handleChange(e)}
              />
              <label>Weight </label>
              <input
                type="number"
                value={input.weight}
                name="weight"
                onChange={(e) => handleChange(e)}
              />
              <label>Type </label>
               <input
                type="text"
                value={input.type}
                name="type"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </form>
        </div>
    );
  const [errorBottom, setErrorBotom] = useState(true)

  function handleChange(e){
    e.preventDefault();
    setInput({
        ...input,
        [e.target.name]:e.target.value,
    })
  }
  
}
