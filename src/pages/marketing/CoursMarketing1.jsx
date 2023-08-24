import React from "react";
import CarteMarketing from "../../components/CarteSousCours/CarteMarketing";
import TitreCarte from "../../components/CarteSousCours/TitreCarte";

const CoursMarketing1 = () => {
  return (
    <div className="container mt-5 py-3 dark:bg-secondary-dark-bg dark:text-gray-200 ">
      <TitreCarte titreCours={"INITIATION"} />
      <CarteMarketing />
    </div>
  );
};

export default CoursMarketing1;
