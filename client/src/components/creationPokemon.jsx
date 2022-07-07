import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";

// import styles from '../stylesComponents/creation.css'
// const divContainer = {
//     backgroun: red,

// }
const styles = {
  contenedor: {
    height: "100vh",
    marginLeft: "500px",
    marginRight: "500px",
    padding: "20px",
    borderRadius: "20px",
    // alingItems: 'center',
    // justifyContent: 'center',
    textDecoration: "none",
  },
  h1: {
    color: "grey",
    letterSpacing: "5px",
  },
  form: {
    padding: "20px",
    color: "grey",
    // diplay:'flex',
    // textAlign: 'right',
    // flexDirection: 'column',
    // alignItems: 'right'
  },
};
export default function Form() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.pokemonTypes);
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
  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    dispatch(getTypes());
  }, []);
  return (
    <div style={styles.contenedor}>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1 style={styles.h1}>Create your pokemon!</h1>
      <form style={styles.form}>
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
          <select>
            {types.map((t) => (
              <option value={t.name}>{t.name}</option>
            ))}
          </select>
        </div>
        <button>Create Pokemon</button>
      </form>
    </div>
  );
  const [errorBottom, setErrorBotom] = useState(true);
}
