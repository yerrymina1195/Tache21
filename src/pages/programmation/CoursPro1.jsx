import React from "react";
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro1 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={"HTML5 / CSS3"} />
      <CartePro />
    </div>
  );
};

export default CoursPro1;
