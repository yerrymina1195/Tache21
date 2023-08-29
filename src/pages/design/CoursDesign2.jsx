import React from "react";
import CarteDesign from '../../components/CarteSousCours/CarteDesign';
import TitreCarte from "../../components/CarteSousCours/TitreCarte";
import { Link } from "react-router-dom";
import ButtonReutilisable from "../../components/ButtonReutilisable";

const CoursDesign2 = () => {
  return (
    <div className="container mt-5  py-5 bg-[#ffff]  dark:bg-secondary-dark-bg   dark:text-gray-200">
      <TitreCarte titreCours={'CANVA'} />
      <CarteDesign />
      <Link to={`/l/quiz`}>
            <ButtonReutilisable className='' text={"faire un quizz"} />
        </Link>
    </div>
  );
};

export default CoursDesign2;


























