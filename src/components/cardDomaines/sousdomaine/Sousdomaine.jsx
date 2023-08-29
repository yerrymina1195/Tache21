import React from "react";
import { Link } from "react-router-dom";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
import "./Sousdomaine.css";

const Sousdomaine = (props) => {
  return (
    <div className="">
      <div class="card bg-[#ffff]  dark:bg-main-dark-bg dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]  text-[#ffff] dark:text-gray-200 border-0">
        <Link to={props.links} className="text-decoration-none text-black" >
          <img
            src={props.img}
            class="card-img-top img-fluid"
            alt={props.title}
          />
          <div class="card-body text-[#000] border-t-2 dark:text-gray-200">
            <h5 class="card-title fw-medium">{props.title}</h5>
            <p>Veilliez faire le quizz qui se trouve a la fin de ce cours</p>
          </div>
        </Link>
        <div className="pb-3">
          <div className="row btn-domaine">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <Link to={props.links} className="">
                <button type="button" class="btn">
                  <BsEyeFill />
                </button>
              </Link>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <button type="button" class="btn ">
                <BsPencilSquare />
              </button>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
              <button type="button" class="btn">
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
