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
  container: {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    padding: "5px",
  },
  h1: {
    fontSize: "80px",
    margin: "0px",
    color: '#f02f17',
    shadow:'',
    position: "relative",
    letterSpacing:'5px'
    
    // overflow:'hidden'

  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
  },
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
    <div style={styles.container}>
      <h1 style={styles.h1}>Go Pokemon!</h1>
      <div style={styles.navbar}>
        <Link to='/pokemon'>Create Pokemon</Link>
        <SearchBar/>
        <div>
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
        </div>
      </div>
      <div>
        {currentPokemons ? (
          currentPokemons.map((pk) => {
            return (
              <Link key={pk.id} to={`./home/${pk.id}`}>
                <Card image={pk.image} name={pk.name} type={pk.type} />
              </Link>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
        <Pagination
          pokemonPerPage={pokemonPerPage}
          estadoPokemon={estadoPokemon?.length}
          paginado={paginado}
        />
      </div>
    </div>
  );
}
