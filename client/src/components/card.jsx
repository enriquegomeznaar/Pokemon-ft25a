import React from "react";

export default function Card(image, name, type){
    return(
        <div>
            <img src={image} alt='image not found' width='200px' height='250px'></img>
            <h3>{name}</h3>
            <h5>{type}</h5>
        </div>
    )
}
