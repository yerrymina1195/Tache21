import React from "react";
import CarteSousCours from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursMarketing2 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={"ETUDE DE MARCHE"} />
      <CarteSousCours />
    </div>
  );
};

export default CoursMarketing2;
