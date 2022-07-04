import React from "react";
import { Link } from "react-router-dom";
import AllCards from "./allCards";
import Card from "./card";
import image from "../imgpk.png";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Pagination from "./pagination";
import { getPokemons } from "../actions/action";

const styles = {
  container: {
    padding: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
  },

}
export default function Home() {
  const estadoPokemon = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage, setPokemonPerPage] = useState(5);
  const indexOfLastPokemonPage = currentPage * pokemonPerPage;
  const indexOfFirstPokemonPage = indexOfLastPokemonPage - pokemonPerPage;
  const currentPokemons = estadoPokemon?.slice(
    indexOfFirstPokemonPage,
    indexOfLastPokemonPage
  );
  // console.log(currentPokemons)

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "center" /* Center the image */,
        backgroundRepeat: "no-repeat" /* Do not repeat the image */,
        backgroundSize:
          "cover" /*Resize the background image to cover the entire container*/,
        backgroundAttachment: "fixed",
      }}
    >
      <div style={styles.container}>
        <div style={styles.navbar}>
          <h1>Go Pokemon!</h1>
          <Link to="/creationPokemon">Create Pokemon</Link>
          <input placeholder="serach  pokemon..."></input>
          <button>Search</button>
          <select>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <select>
            <option value="All">All</option>
            <option value="Created">Created in DB</option>
            <option value="Api">Exist</option>
          </select>
        </div>
        <div>
          {currentPokemons? currentPokemons.map((pk) => {
            return (
              <Link key={pk.id} to={`./home/${pk.id}`}>
                <Card image={pk.image} name={pk.name} type={pk.type} />
              </Link>
            );
          })
          : (<h2>Loading...</h2>)}
          <Pagination
            pokemonPerPage={pokemonPerPage}
            estadoPokemon={estadoPokemon?.length}
            paginado={paginado}
          />
        </div>
      </div>
    </div>
  );
}
