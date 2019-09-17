import React from 'react';
import Carte from './Carte';


const Cartes = ({ cartes, deleteCarte }) => (
  <div>
  {
    cartes.map( carte => (
      <Carte
      key={carte.id}
      {...carte } 
      deleteCarte={deleteCarte}
      />
    )) }
  </div>
);



export default Cartes; 


