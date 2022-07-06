import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsName } from "../actions/action";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handlerInput = (e) => {
    e.preventDefault();
    setName(e.target.value.toLowerCase());
    console.log(name);
  };
  const handlerButton = (e) => {
    e.preventDefault();
    dispatch(getPokemonsName(name));
    setName("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="search pokemon..."
        value={name}
        onChange={(e) => handlerInput(e)}
      ></input>
      <button type="submit" onClick={(e) => handlerButton(e)}>
        Search
      </button>
    </div>
  );
}
