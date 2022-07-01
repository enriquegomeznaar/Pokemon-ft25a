import React from "react";
import { Link } from "react-router-dom";
import AllCards from "./allCards";

export default function Home() {
 
  // function handleClick(e) {
  //   e.preventDefault();
  //   dispatch(getPokemons());
  // }
  return (
    <div>
      <Link to="/creation">Create Pokemon</Link>
      <h1>Go Pokemon!</h1>
      <button
        // onClick={(e) => {
        //   handleClick(e);
        // }}
      >
        Reload pokemons
      </button>
      <div>
        {/* /* <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="All">All</option>
          <option value="Created">Created in DB</option>
          <option value="Api">Exist</option>
        </select> */}
        <AllCards/>
          
      </div>
    </div>
  );
}
