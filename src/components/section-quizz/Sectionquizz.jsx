import React from "react";
import { Link } from "react-router-dom";
import ModalQuiz from "../../pages/ListProfs/modaQuiz/ModalQuiz";

const Sectionquizz = () => {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row bg-quizz rounded-md p-5">
          <div className="col-md-6 text-white">
            <h2 className="fw-bold">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              exercitationem animi ad maxime pariatur accusamus repellendus
              voluptate ducimus corrupti. Mollitia rerum dignissimos distinctio
              dicta voluptas.
            </p>
          </div>
          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <div className="bounce-element">
              <Link to={`/l/quiz`}>
                <button
                  type="button"
                  class="btn btn-outline-light mx-2 text-uppercase fw-bold btn-lg"
                >
                  faire un quizz
                </button>
              </Link>
            </div>
            <ModalQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionquizz;
