import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Card from "./card";
import Pagination from "./pagination";
import SearchBar from "./searchBar";
import {
  filterByTypes,
  filterCreated,
  getPokemons,
  orderByName,
  orderByStrength,
  getTypes,
} from "../actions/action";
const image = require("../images/img.png");
const styles = {
  h1: {
    fontSize: "80px",
    margin: "0px",
    color: "rgba(255,0,0,0.7)",
    shadow: "",
    position: "relative",
    letterSpacing: "5px",
    textShadow: "5px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
  },
  link: {
    color: "#CCCCCC",
    fontSize: "20px",
    border: "5px outset rgba(255,0,0,0.7)",
    borderRadius: "20px",
    padding: "10px",
    letterSpacing: "5px",
  },
  contenedorSelect: {},
  cards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "50px",
  },
  botonReload:{
    borderRadius:'10px',
    outline:'none',
    padding:'3px 10px',
    cursor:'pointer',

  },
  link2:{
    textDecoration: 'none'
  }
};
export default function Home() {
  const estadoPokemon = useSelector((state) => state.pokemons);
  const pokemonTypes = useSelector((state) => state.pokemonTypes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orden, setOrden] = useState("");
  const handleFilterAsc = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };
  const handleFilterStrength = (e) => {
    e.preventDefault();
    dispatch(orderByStrength(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenado ${e.target.value}`);
  };
  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };
  const handleFilterByTypes = (e) => {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setCurrentPage(1);
  };
  const handlerReload = (e) => {
    e.preventDefault();
    dispatch(getPokemons());
    setCurrentPage(1);
  };
  const [pokemonPerPage, setPokemonPerPage] = useState(12);
  const indexOfLastPokemonPage = currentPage * pokemonPerPage;
  const indexOfFirstPokemonPage = indexOfLastPokemonPage - pokemonPerPage;
  const currentPokemons = estadoPokemon?.slice(
    indexOfFirstPokemonPage,
    indexOfLastPokemonPage
  );
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <h1 style={styles.h1}>Go Pokemon!</h1>
      <div style={styles.navbar}>
        <Link style={styles.link} to="/creation">
          Create Pokemon
        </Link>
        <SearchBar />
        <div style={styles.contenedorSelect}>
          <select onChange={(e) => handleFilterAsc(e)}>
            <option value="default">Order by name</option>
            <option value="asc">Upward</option>
            <option value="desc">Falling</option>
          </select>
          <select onChange={(e) => handleFilterStrength(e)}>
            <option value="default">Strength</option>
            <option value="stronger">Stronger</option>
            <option value="weaker">Weaker</option>
          </select>
          <select onChange={(e) => handleFilterByTypes(e)}>
            <option value="default">Choose type</option>
            {pokemonTypes?.map((t, i) => {
              return (
                <option value={t.name} key={i}>
                  {t.name[0].toUpperCase() + t.name.slice(1)}
                </option>
              );
            })}
            ;
          </select>
          <select onChange={(e) => handleFilterCreated(e)}>
            <option value="default">All</option>
            <option value="api">Exist</option>
            <option value="created">Created in DB</option>
          </select>
          <button style={styles.botonReload} onClick={(e) => handlerReload(e)}>Reload pokemons...</button>
        </div>
      </div>
      <div>
        <div style={styles.cards}>
          {currentPokemons ? (
            currentPokemons.map((pk, i) => {
              return (
                <Link key={i} to={"/home/" + pk.id} style={styles.link2}>
                  <Card name={pk.name} image={pk.image} type={pk.type ? pk.type : "UNKNOWN"} />
                </Link>
              );
            })
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <Pagination
          pokemonPerPage={pokemonPerPage}
          estadoPokemon={estadoPokemon?.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
