import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsName } from "../actions/action";
const styles = {
  contenedor:{
   
  },
  input:{
    border:'0',
    outline:'0',
    backgroundColor:'#CCCCCC',
    borderRadius:'10px',
    padding:'8px',
    // position:'relative'
  },
  boton:{
    position:'relative',
    padding:'7px',
    backgroundColor:'#CCCCCC',
    borderRadius:'10px',
    outline:'0',
    border:'0',
    cursor:'pointer',
    
  }
}

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
 
  const handlerInput = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    // console.log(name);
  };
  const handlerButton = (e) => {
    e.preventDefault();
    dispatch(getPokemonsName(name));
    setName("");
  };
  // useEffect(()=>{
  //   dispatch(getPokemonsName(name))
  // },[dispatch])
  return (
    <div style={styles.contenedor}>
      <input
        style={styles.input}
        type="text"
        placeholder="search pokemon..."
        value={name}
        onChange={(e) => handlerInput(e)}
      ></input>
      <button style={styles.boton} type="submit" onClick={(e) => handlerButton(e)}>
        Search
      </button>
    </div>
  );
}
