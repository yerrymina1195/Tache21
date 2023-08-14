import React from "react";
import CarteSousCours from "../../components/CarteSousCours/CarteSousCours1"
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro2 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={'NODE JS'} />
      <CarteSousCours />
    </div>
  );
};

export default CoursPro2;
