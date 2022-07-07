import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail } from "../actions/action";

export default function Detail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return (() => {
        dispatch(clearDetail())
      })
  }, [dispatch]);
  const myPokemon = useSelector((state) => state.details);

  return (
    <div>
      <Link to="/home">
        <button>Go Back</button>
      </Link>
      {myPokemon.length > 0 ? (
        <div>
          <div>
            <h1>Name: {myPokemon[0].name[0] + myPokemon[0].name.slice(1)}</h1>
            <img src={myPokemon[0].image} alt="" width="400px" height="400px" />
          </div>
          <div style={{ fontSize: "1.3em" }}>
            <h3>
              Type:{" "}
              {myPokemon[0].type
                ? myPokemon[0].type + " "
                : myPokemon[0].types.map((t) => t.name + " ")}{" "}
            </h3>
            <h5 style={{ marginTop: "100px" }}>HP: {myPokemon[0].hp}</h5>
            <h5>Strength: {myPokemon[0].strength}</h5>
            <h5>Defense: {myPokemon[0].defense}</h5>
            <h5>Speed: {myPokemon[0].speed}</h5>
            <h5>Height: {myPokemon[0].height}</h5>
            <h5>Weight: {myPokemon[0].weight}</h5>
            <h6>Id: {myPokemon[0].id}</h6>
          </div>
        </div>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
}
