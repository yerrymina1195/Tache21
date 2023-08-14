import React from "react";
import CarteSousCours from "../../components/CarteSousCours/CarteSousCours1"
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro6 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={'PYTHON'} />
      <CarteSousCours />
    </div>
  );
};

export default CoursPro6;
