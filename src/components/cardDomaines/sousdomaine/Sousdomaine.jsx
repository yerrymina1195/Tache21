import React from "react";
import { Link } from "react-router-dom";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
import "./Sousdomaine.css";

const Sousdomaine = (props) => {

  return (
    <div className="">
      <div class="card card-domaine bg-[#ffff]  dark:bg-main-dark-bg dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]  text-[#ffff] dark:text-gray-200 border-0">
        <Link
          to={`/l/cours/domains/${props.title}`}
          className="text-decoration-none text-black"
        >
          <div class="card-body dark:text-gray-200">
            <h5 class="card-title text-capitalize rest">{props.title}</h5>
            <p>Veuillez faire le quizz qui se trouve à la fin de ce cours</p>
          </div>
        </Link>
        <div className="pb-3">
          <div className="row btn-domaine">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Link
                to={`/l/cours/domains/${props.title}`}
                className="text-decoration-none"
              >
                <button type="button" className="btn">
                  <BsEyeFill />
                </button>
              </Link>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={props.onClick}
                class="btn"
              >
                <BsPencilSquare />
              </button>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <button type="button" onClick={props.click} class="btn">
                <BsArchiveFill />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sousdomaine;
