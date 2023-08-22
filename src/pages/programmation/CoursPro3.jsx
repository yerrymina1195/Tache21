import React from "react";
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursPro3 = () => {
  return (
    <div className="container mt-5 py-3 bg-[#ffff]  dark:bg-secondary-dark-bg   dark:text-gray-200">
      <TitreCarte titreCours={'ANGULAR'} />
      <CartePro />
    </div>
  );
};

export default CoursPro3;
