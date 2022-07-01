import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./card";
import { Link } from "react-router-dom";
import { getPokemons } from "../actions/action";

export default function AllCards() {
  // Pedido de estado a redux
  let estadoPokemon = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div>
      {estadoPokemon ? (
        estadoPokemon.map((pk) => (
          <Link key={pk.id}to={`./detailsPokemon/${pk.id}`}>
            <Card image={pk.image} name={pk.name} type={pk.type}/>
          </Link>
        ))
      ) : (
        <h2>No se encontro nada...</h2>
      )}
    </div>
  );
}
