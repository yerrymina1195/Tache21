import React from "react";
import CarteSousCours from "../../components/CarteSousCours/CarteSousCours1";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro1 = () => {
  return (
    <div className="container mt-5">
     <TitreCarte titreCours={'HTML5 / CSS3'} />
      <CarteSousCours />
    </div>
  );
};

export default CoursPro1;
