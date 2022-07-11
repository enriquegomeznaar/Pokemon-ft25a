import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, clearDetail, getPokemons } from "../actions/action";
import { useParams } from "react-router-dom";
const styles = {
  contenedor:{
    display:'flex',
    flexDirection:'row',
    border: '1px solid grey'
  },
  h1:{
    color:'yellow',
    fontFamily:'roboto',
    
  },
  h3:{
    color:'yellow',
    fontFamily:'roboto',
    
  },
  h5:{
    margin : '0',
    padding:'10px',
    color: 'yellow',
    fontFamily:'roboto',
  }
}
export default function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(getDetail(id));
    console.log("entre", myPokemon);
    return () => {
      dispatch(clearDetail());
      console.log("me fui", myPokemon);
    };
  }, [dispatch]);

  return (
    <div style={styles.contenedor}>
      {console.log("mypokemon", myPokemon)}
      <Link to="/home">
        <button>Go Back</button>
      </Link>
      {myPokemon ? (
        <div>
          <div>
            <h1 style={styles.h1}>Name: {myPokemon.name /*+ myPokemon.name.slice(1)*/}</h1>
            <img src={myPokemon.image} alt="" width="300px" height="300px" />
          </div>
          <div>
            <h3  style={styles.h3}>
              Type:
              {myPokemon.type.map((t, i) => {
                return <p key={i}>{t}</p>;
              })}
            </h3>
            <h5 style={styles.h5}>HP: {myPokemon.hp}</h5>
            <h5 style={styles.h5}>Strength: {myPokemon.strength}</h5>
            <h5 style={styles.h5}>Defense: {myPokemon.defense}</h5>
            <h5 style={styles.h5}>Speed: {myPokemon.speed}</h5>
            <h5 style={styles.h5}>Height: {myPokemon.height}</h5>
            <h5 style={styles.h5}>Weight: {myPokemon.weight}</h5>
            <h6 style={styles.h5}>Id: {myPokemon.id}</h6>
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
