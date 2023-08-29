import React from "react";
<<<<<<< HEAD
import CartePro from "../../components/CarteSousCours/CartePro";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";
import { Link } from "react-router-dom";
import ButtonReutilisable from "../../components/ButtonReutilisable";
const CoursPro4 = () => {
  return (
    <div className="container mt-5 py-3 bg-[#ffff]  dark:bg-secondary-dark-bg   dark:text-gray-200">
      <TitreCarte titreCours={'JAVASCRIPT'} />
      <CartePro />
      <div className="text-center w-50 mx-auto mb-5">
        <Link to={`/l/quiz`}>
            <ButtonReutilisable className='' text={"faire un quizz"} />
        </Link>
      </div>
=======
import TesteOne from "../../components/CarteSousCours/TesteOne";
import Sectionquizz from "../../components/section-quizz/Sectionquizz";

const CoursPro4 = () => {
  return (
    <div className="container mt-5 pt-3 bg-[#ffff] dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="row">
        <div className="col-12">
          <TesteOne />
        </div>
      </div>
      <Sectionquizz />
>>>>>>> ad0032fd79f97c66f5758c117b88660ae9f9a4d0
    </div>
  );
};

export default CoursPro4;
