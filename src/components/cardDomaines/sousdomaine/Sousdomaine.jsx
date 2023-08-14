import React from "react";
import { Link } from "react-router-dom";
import { BsArchiveFill, BsPencilSquare, BsEyeFill } from "react-icons/bs";
import "./Sousdomaine.css";

const Sousdomaine = (props) => {
  return (
    <div>
      <div class="card border-0">
        <Link to={props.links} className="text-decoration-none text-black" >
          <img
            src={props.img}
            class="card-img-top img-fluid"
            alt={props.title}
          />
          <div class="card-body">
            <h5 class="card-title fw-medium">{props.title}</h5>
          </div>
        </Link>
        <div className="pb-3">
          <div className="row btn-domaine">
            <div className="col-4 d-flex align-items-center justify-content-center">
              <button type="button" class="btn">
                <Link to={props.links} className="">
                  <BsEyeFill />
                </Link>
              </button>
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
