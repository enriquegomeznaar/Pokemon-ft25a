import React from "react";

// const styles = {
//     div:{
//         display:'flex',
//         justifyContent:'space-between',
//         alignItems:'center'

//     },
//     card:{
//         fontSize: '20px',
//         color:'white'
//     },
// }
const styles = {
    contenedor:{
        display: 'grid',
        gridTemplateColumns: 'auto auto ',
    },
  divContainer: {
    border: "5px solid white",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "3px 3px 20px rgba(0, 0, 0, .5)",
    display:'block',
   
    margin: "10px",
    width: "50%",
  },
  img:{
    
  },
  h3: {
    fontSize: "30px",
    position: "relative",
    padding: "10px",
  },
  h5: {
    position: "relative",
    fontSize: "15px",
  },
};
export default function Card({ image, name, type }) {
  return (
    <div style={styles.contenedor}>
    <div style={styles.divContainer}>
      <img style={styles.img}src={image} alt="img" width="200px" height="200px"></img>
      <h3 style={styles.h3}>{name}</h3>
      <h5 style={styles.h5}>{type}</h5>
    </div>
    </div>
  );
}
