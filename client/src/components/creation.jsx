import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";

const styles = {
  contenedor: {
    height: "100vh",
    marginLeft: "500px",
    marginRight: "500px",
    padding: "20px",
    borderRadius: "20px",
    textDecoration: "none",
  },
  h1: {
    color: "grey",
    letterSpacing: "5px",
  },
  form: {
    padding: "20px",
    color: "grey",
  },
  error:{
    fontFamily:'Times new roman',
    color: 'red',
    fontSize:'15px',
  }
};
export default function Form() {
  const dispatch = useDispatch();
  const history = useHistory() 
  const types = useSelector((state) => state.pokemonTypes);
  const [errors, setErrors] = useState({});
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
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
    console.log(input);
  }
  const handleChangeName = (e)=>{
    setInput({
      ...input,
      [e.target.name]: e.target.value.toLowerCase()
    })
  }
  const handleDelete = (el) => {
    setInput({
      ...input,
      types: input.types.filter((ty) => ty !== el),
    });
  };
  const handlerSelect = (e) => {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault()
    if(!input.image)input.image="https://images6.fanpop.com/image/photos/39700000/20160224-dancave-fanpokemon-1x1-pokemon-39784118-322-268.jpg"
    dispatch(postPokemon(input));
    alert("Pokemon created succesfully!");
    setInput({
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
    history.push('/home')
  };
  function validate(input) {
    let errors = [];
    if (!input.name) {
      errors.name = "Name is require";
    } else if (!input.image) {
      errors.image = "image is require";
    } else if (input.hp < 1 || input.hp > 500) {
      errors.hp = "hp invalid";
    } else if (input.strength < 1 || input.strength > 500) {
      errors.strength = "strength invalid";
    } else if (input.defense < 1 || input.defense > 500) {
      errors.defense = "defense invalid";
    } else if (input.speed < 1 || input.speed > 500) {
      errors.speed = "speed invalid";
    } else if (input.height < 1 || input.height > 500) {
      errors.height = "height invalid";
    } else if (input.weight < 1 || input.weight > 500) {
      errors.weight = "weigth invalid";
    } else if (!input.type) {
      errors.type = "Please select Type";
    }

    return errors;
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
      <form style={styles.form} onSubmit={(e) => handlerSubmit(e)}>
        <div>
          <div>
            <label>Name </label>
            <input
              type="text"
              value={input.name}
              name="name"
              onChange={(e) => handleChangeName(e)}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>
          <label>Image </label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {errors.image && <p style={styles.error}>{errors.image}</p>}
          <label>HP </label>
          <input
            type="number"
            value={input.hp}
            name="hp"
            onChange={(e) => handleChange(e)}
          />
          {errors.hp && <p style={styles.error}>{errors.hp}</p>}
          <label>Strength </label>
          <input
            type="number"
            value={input.strength}
            name="strength"
            onChange={(e) => handleChange(e)}
          />
          {errors.strength && <p style={styles.error}>{errors.strength}</p>}
          <label>Defense </label>
          <input
            type="number"
            value={input.defense}
            name="defense"
            onChange={(e) => handleChange(e)}
          />
          {errors.defense && <p style={styles.error}>{errors.defense}</p>}
          <label>Speed </label>
          <input
            type="number"
            value={input.speed}
            name="speed"
            onChange={(e) => handleChange(e)}
          />
          {errors.speed && <p style={styles.error}>{errors.speed}</p>}
          <label>Height </label>
          <input
            type="number"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
          {errors.height && <p style={styles.error}>{errors.height}</p>}
          <label>Weight </label>
          <input
            type="number"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          {errors.weight && <p style={styles.error}>{errors.weight}</p>}
          <select onChange={(e) => handlerSelect(e)}>
            {types.map((t) => (
              <option value={t.name}>{t.name}</option>
            ))}
            {errors.type && <p style={styles.error}>{errors.type}</p>}
          </select>
        </div>
        <button name='create' type="submit" disabled={!input.name}>Create Pokemon</button>
      </form>
      {input.types.map((el) => (
        <div>
          <p>{el}</p>
          <button onClick={() => handleDelete(el)}>x</button>
        </div>
      ))}
    </div>
  );
}

// data:image/jpeg;base64,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
