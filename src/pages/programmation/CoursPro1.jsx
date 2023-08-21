import React from "react";
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";
import ButtonReutilisable from "../../components/ButtonReutilisable";
import { Link } from "react-router-dom";

const CoursPro1 = () => {
  return (
    <div className="container mt-5 py-3 bg-[#ffff]  dark:bg-secondary-dark-bg   dark:text-gray-200">
      <TitreCarte titreCours={"HTML5 / CSS3"} />
      <CartePro />
      <div className="text-center w-50 mx-auto mb-5">
        <Link to={`/l/quiz`}>
            <ButtonReutilisable className='' text={"faire un quizz"} />
        </Link>
      </div>
    </div>
  );
};

export default CoursPro1;
