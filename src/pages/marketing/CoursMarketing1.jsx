import React from "react";
import CarteMarketing from "../../components/CarteSousCours/CarteMarketing";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";
import { Link } from "react-router-dom";
import ButtonReutilisable from "../../components/ButtonReutilisable";
const CoursMarketing1 = () => {
  return (
    <div className="container mt-5 py-3 dark:bg-secondary-dark-bg dark:text-gray-200 ">
      <TitreCarte titreCours={"INITIATION"} />
      <CarteMarketing />
      <div className="text-center w-50 mx-auto mb-5">
        <Link to={`/l/quiz`}>
            <ButtonReutilisable className='' text={"faire un quizz"} />
        </Link>
      </div>
    </div>
  );
};

export default CoursMarketing1;
