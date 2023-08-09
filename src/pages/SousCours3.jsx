import React from "react";
import CarteSousCours from "../components/CarteSousCours";

const SousCours3 = () => {
  return (
    <div className="container mt-5">
      <div className="row pe-5 ps-5">
        <div className="col-md-6">
          <h1>JAVASCRIT</h1>
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
      <CarteSousCours />
    </div>
  );
};

export default SousCours3;
