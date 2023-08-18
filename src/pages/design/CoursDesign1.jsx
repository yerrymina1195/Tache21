import React from "react";
import CarteDesign from '../../components/CarteSousCours/CarteDesign';
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursDesign1 = () => {
  return (
    <div className="container mt-5">
      <TitreCarte titreCours={"FIGMA"} />
      <CarteDesign />
    </div>
  );
};

export default CoursDesign1;