import React from "react";
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";
// import Quiz from "../SousCours/Quiz/Quiz";
import ButtonReutilisable from "../../components/ButtonReutilisable";
import { Link } from "react-router-dom";

const CoursPro1 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={"HTML5 / CSS3"} />
      <CartePro />
      <div className="text-center mb-5">
        <Link to={``}>
          <ButtonReutilisable text={"faire un quizz"} />
        </Link>
      </div>
      {/* <Quiz/> */}
    </div>
  );
};

export default CoursPro1;
