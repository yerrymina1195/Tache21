import React from "react";
import TesteOne from "../../components/CarteSousCours/TesteOne";
import Sectionquizz from "../../components/section-quizz/Sectionquizz";

const CoursPro1 = () => {
  return (
    <div className="container mt-5 pt-3 bg-[#ffff] dark:bg-secondary-dark-bg dark:text-gray-200">
      <div className="row">
        <div className="col-12">
          <TesteOne />
        </div>
      </div>
      <Sectionquizz />
    </div>
  );
};

export default CoursPro1;
