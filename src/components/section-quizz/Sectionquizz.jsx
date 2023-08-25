import React from "react";
import { Link } from "react-router-dom";

const Sectionquizz = () => {
  return (
    <div>
      <hr />
      <div className="container">
        <div className="row bg-quizz rounded-md text-white p-5">
          <div className="col-md-6 ">
            <h2 className="fw-bold">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              exercitationem animi ad maxime pariatur accusamus repellendus
              voluptate ducimus corrupti. Mollitia rerum dignissimos distinctio
              dicta voluptas.
            </p>
          </div>
          <div className="col-md-6  d-flex justify-content-center align-items-center">
            <Link to={`/l/quiz`}>
              <div className="bounce-element">
                <button type="button" class="btn btn-outline-light text-uppercase fw-bold btn-lg">
                    faire un quizz
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionquizz;
