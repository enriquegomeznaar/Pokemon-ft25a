// import React from "react";
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import Card from "./card";
// import { Link } from "react-router-dom";
// import { getPokemons } from "../actions/action";

// export default function AllCards() {
//   // Pedido de estado a redux
//   let estadoPokemon = useSelector((state) => state.pokemons);
//   const dispatch = useDispatch();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pokemonPerPage, setPokemonPerPage] = useState(12);
//   const indexOfLastPokemonPage = currentPage * pokemonPerPage;
//   const indexOfFirstPokemonPage = indexOfLastPokemonPage - pokemonPerPage;
//   const currentPokemons = estadoPokemon.slice(
//     indexOfFirstPokemonPage,
//     indexOfLastPokemonPage
//   );
//   useEffect(() => {
//     dispatch(getPokemons());
//   }, [dispatch]);

//   const paginado = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };
//   return (
//     <div>
//       {currentPokemons?.map((pk) => {
//         return (
//           <Link key={pk.id} to={`./home/${pk.id}`}>
//             <Card image={pk.image} name={pk.name} type={pk.type} />
//           </Link>
//         );
//       })}
//       : (<h2>No se encontro nada...</h2>)
//     </div>
//   );
// }
