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
export default function Card({image, name, type}){
    return(
        <div>
            <img src={image} alt='img' width='200px' height='250px'></img>
            <h3>{name}</h3>
            <h5>{type}</h5>
        </div>
    )
}
