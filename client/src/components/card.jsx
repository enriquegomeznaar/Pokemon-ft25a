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
  divContainer: {
    border: "5px solid grey",
    position: "relative",
    borderRadius: "10px",
    boxShadow: "3px 3px 20px rgba(0, 0, 0, .5)",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    margin: "10px",
    flexDirection:'column',
    height: '400px',
    width:'300px',
    backgroundColor:'rgba(0, 0, 0, 0.7)',
    textDecoration:'none'
    // opacity:'0.5',
  },
  img:{
    
  },
  h3: {
    fontSize: "30px",
    position: "relative",
    padding: "10px",
    textDecorationLine:'none',
    color:'#FFD700',
   
  },
  h5: {
    position: "relative",
    fontSize: "15px",
    color:'#FFD700',
  },
};
export default function Card({ image, name, type }) {
  return (

    <div style={styles.divContainer}>
      <img style={styles.img}src={image} alt="img" width="200px" height="200px"></img>
      <h3 style={styles.h3}>{name}</h3>
      <h5 style={styles.h5}>{type}</h5>
    </div>
  );
}
