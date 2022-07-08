import React from "react";
import { Link } from "react-router-dom";
const styles = {
  container:{
    height:'100vh',
   
  },
  h1:{
    color: 'rgba(255,0,0,0.7)',
    margin:'0',
    padding:'20px',
    letterSpacing:'5px',
  },
  boton:{
    cursor:'pointer',
    borderRadius:'20px',
    padding:'20px',
    border:  '2px solid #0099CC',
    background: 'transparent',
    fontSize:'30px',
    textTransform:'uppercase',
    color:'yellow'

  },
}
export default function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>¡Welcome to my Pokemon Page!</h1>
      <Link to="/home">
        <button style={styles.boton}>Start</button>
      </Link>
    </div>
  );
}
