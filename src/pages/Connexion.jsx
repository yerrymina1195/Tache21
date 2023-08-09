import React from 'react';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import imgCours from "../minimalism_pattern_abstract_lines_geometry-163130.jpg";



const Connexion = () => {
    return (
            

<div className="container-fluid p-5 back">
  <div className="container-fluid mt-5 back2 largeur p-5 h-screen flex items-center justify-center">
    <div className="card relative">
      <div className="container text-center text-white ">
        <p className="mt-4">
          <div className="bg1 fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle">
            <p>
                <h3 className="mb-4">CONNEXON</h3>
             {/* <h6 className="mb-3"> DIDISPHERE</h6> */}
              <a href="#" className="text-white me-4 text-decoration-none"> <BiLogoFacebook className="text-primary fs-4" /> Facebook</a>
              <a href="#" className="text-white me-4 text-decoration-none"> <FcGoogle  className="text-primary fs-4" /> Google</a>
            </p>
          </div>
        </p>
      </div>
      <div className="card-body mt-5">
        <form className="mb-5 mt-5">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label mt-5">
              Adresse Email
            </label>
            <input
              type="email"
              className="form-control shadow-none"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="exemple@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Mot de Passe
            </label>
            <input
              type="password"
              className="form-control shadow-none"
              id="exampleInputPassword1"
              placeholder="........"
            />
          </div>
          <button
            type="submit"
            className="btn bg1 text-white fw-bold w-100">
            Se Connecter
          </button>
          <div className="row mt-4">
            <div className="col-md-6">
              <a href="#" className="text-secondary text-decoration-none">
                Mot de passe oublie?
              </a>{" "}
              <br />
            </div>
            <div className="col-md-6 text-end">
              <a href="#" className="">
                S'inscrire
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

       
    );
};

export default Connexion;