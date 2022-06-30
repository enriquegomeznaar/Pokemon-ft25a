import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../actions/action";
import { Link } from "react-router-dom";
import Card from "./card";

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons());
  }
  return (
    <div>
      <Link to="/creation">Create Pokemon</Link>
      <h1>Go Pokemon!</h1>
      <button
        onClick={(e) => {
          handleClick(e);
        }}
      >
        Reload pokemons
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="Created">Created in DB</option>
          <option value="Api">Exist</option>
        </select>
        {
          allPokemons?.map((el) => {
            return(
            <Card image={el.image} name={el.name} type={el.type} />
            )
          })}
      </div>
    </div>
  );
}
