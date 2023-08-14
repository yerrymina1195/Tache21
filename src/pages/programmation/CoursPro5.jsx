import React from "react";
import CarteSousCours from "../../components/CarteSousCours/CarteSousCours1"
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro5 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={'REACT JS'} />
      <CarteSousCours />
    </div>
  );
};

export default CoursPro5;
