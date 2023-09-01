import React from "react";
import { Link } from "react-router-dom";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
import "./Sousdomaine.css";
import { useStateContext } from "../../../contexts/ContextProvider";
const Sousdomaine = (props) => {
  const { user } = useStateContext();
  return (
    <div className="">
      <div class="card card-domaine bg-[#ffff]  dark:bg-main-dark-bg dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]  text-[#ffff] dark:text-gray-200 border-0">
        <Link
          to={`/l/cours/domains/${props.title}`}
          className="text-decoration-none text-black"
        >
          <div class="card-body dark:text-gray-200">
            <img
              src={props.imageUrl}
              alt={props.title}
              className="img-fluid mx-auto w-100 image-cartes"
            />
            <h5 class="card-title rest">{props.title}</h5>
            <p>Veuillez faire le quizz qui se trouve a la fin de ce cours</p>
          </div>
        </Link>
        <div className="pb-3">
          <div className="row btn-domaine">
            <div className="col-4 d-flex align-items-center justify-content-center">
              {user?.statut === "coach" && (
                <Link
                  to={`/l/cours/domains/${props.title}`}
                  className="text-decoration-none"
                >
                  <button type="button" className="btn">
                    <BsEyeFill />
                  </button>
                </Link>
              )}
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              {user?.statut === "coach" && (
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  onClick={props.onClick}
                  class="btn"
                >
                  <BsPencilSquare />
                </button>
              )}
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              {user?.statut === "coach" && (
                <button type="button" onClick={props.click} class="btn">
                  <BsArchiveFill />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sousdomaine;
