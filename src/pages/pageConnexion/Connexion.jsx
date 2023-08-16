import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiFacebookLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="container-fluid p-md-5 back" style={{ height: "700px" }}>
    <div className="container-fluid mt-md-5  largeur1" style={{ width: "40%" }}>
      <div className="card relative">
        <div className="container text-white">
          <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
            <h3 className="mb-4">CONNEXON</h3>
            <div className="row d-flex justify-evenly">
              <div className="col-md-6 ">
                <a
                  href="#"
                  className="text-white text-decoration-none flex items-center ">
                  {/* <RiFacebookLine className="" /> */}
                  Facebook
                </a>
              </div>
              <div className="col-md-6">
                <a
                  href="#"
                  className="text-white text-decoration-none flex items-center">
                  {/* <FcGoogle className="" /> */}
                  Google
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body mt-5">
          <form className="mb-5 pt-5 mt-5">
          <div className="">
              <InputLabel label={'Adresse email'} type={'email'} placeholder={'exemple@gmail.com'} />
            </div>
            <div className="mb-3">
              <InputLabel label={'Mot de passe'} type={'password'} placeholder={'........'} />
            </div>
          <div className="row">
            <Link to={`/l`}>
          <MaButton type={'button'} text={"Se connecter"}/>
          </Link> 
          </div>
            <div className="row mt-4">
              <div className="col-md-6"></div>
              <div className="col-md-6 text-end">
                <Link to={`/F`} className="">
                  Mot de passe oublié?
                </Link>
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