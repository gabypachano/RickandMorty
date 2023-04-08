import React from "react";
import { Link } from "react-router-dom"


export default function Card({name, status, species, gender, origin, image, onClose, id}) {
   return (
      <div>
         <button onClick={onClose}>X</button>
         <Link to={`/detail/${id}`} >
         <h2>name: {name} </h2>
         </Link>
         <h2>status: {status} </h2>
         <h2>species: {species} </h2>
         <h2>gender: {gender} </h2>
         <h2>origin: {origin.name} </h2>
         <img src={image} alt='' />
      </div>
   );
}
