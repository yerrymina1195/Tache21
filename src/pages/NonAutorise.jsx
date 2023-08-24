import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './pageConnexion/Ma.css';


const NonAutorise = () => {

  return (
    <div>
      <div className="mabg"></div>
      <div className="mabg mabg2"></div>
      <div className="mabg mabg3"></div>
      <div className="macontent container  text-white text-center d-flex justify-content-center align-items-center flex-column">
        <h1 className='fw-bold'>ACCES NON AUTORISE!</h1>
        <div className="row mt-3">
            <div className="col">
              <Link to="l/dashboard">
                <button className="btn btn-outline-light">RETOURNER A L'ACCUEIL</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NonAutorise;