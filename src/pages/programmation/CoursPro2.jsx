import React from "react";
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro2 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={"NODE JS"} />
      <CartePro />
    </div>
  );
};

export default CoursPro2;
