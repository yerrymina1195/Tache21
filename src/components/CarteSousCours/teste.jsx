import React from "react";
import "../cardDomaines/Domaine.css";
import { BsArchiveFill, BsPencilSquare } from "react-icons/bs";
import ReactPlayer from "react-player";

const Teste = (props) => {
  return (
    <div className="card mx-md-5 border-0 drop-shadow-lg dark:bg-main-dark-bg dark:text-gray-200 dark:drop-shadow-[0_8px_0px_rgba(255,255,255,0.25)]">
      <a href={props.videoUrl} target="_blank" rel="noopener noreferrer">
        <ReactPlayer
          url={props.videoUrl}
          controls
          width="100%"
          height="400px"
        />
      </a>
      <div className="card-body ">
        <div className="row">
          <div className="col-6">
            <a
              href={props.videoUrl}
              className="text-decoration-none text-black titre"
            >
              <h5 className="card-title capitalize dark:text-[#ffff]">{props.title}</h5>
            </a>
          </div>
          <div className="col-6 text-end">
            <b className="rest">{props.dure} heures</b>
          </div>
        </div>

        <p className="card-text">{props.descrip}</p>
        <div className="row btn-domaine">
          <div className="col-12">
            <button
              type="button"
              class="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              onClick={props.onClick}
            >
              <BsPencilSquare />
            </button>
            <button type="button" class="btn mx-3" onClick={props.click}>
              <BsArchiveFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teste;
