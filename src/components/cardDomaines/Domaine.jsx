import React from "react";
import "./Domaine.css";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Domaine = (props) => {
  return (
    <div>
      <div className="card py-5 card-domaine bg-[#ffff] drop-shadow-lg  dark:bg-secondary-dark-bg dark:drop-shadow-[0_15px_15px_rgba(255,255,255,0.25)] text-[#ffff] dark:text-gray-200">
        <Link to={`${props.title}`} className="text-decoration-none">
          <div className="card-body">
            <h5 className="card-title text-center rest">{props.title}</h5>
          </div>
        </Link>
        <div className="row btn-domaine">
          <div className="col-4 d-flex align-items-center justify-content-end">
            <Link to={`${props.title}`} className="text-decoration-none">
              <button type="button" className="btn">
                <BsEyeFill />
              </button>
            </Link>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={props.onClick}
            >
              <BsPencilSquare />
            </button>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-start">
            <button type="button" class="btn" onClick={props.click}>
              <BsArchiveFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Domaine;
