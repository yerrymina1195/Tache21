import React from "react";

const TitreCarte = (props) => {
  return (
    <div>
      <div className="row pe-5 ps-5">
        <div className="col-md-6">
          <h1>{props.titreCours}</h1>
        </div>
        <div className="col-md-6 float-end">
          <input
            class="form-control shadow-none "
            type="search"
            placeholder="Rechercher un cours"
            aria-label="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default TitreCarte;
