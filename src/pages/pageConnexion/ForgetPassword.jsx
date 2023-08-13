import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiFacebookLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import "../Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";

const ForgetPassword = () => {
  return (
    <div className="container-fluid p-5 back" style={{ height: "700px" }}>
    <div className="container-fluid mt-5 largeur1" style={{ width: "40%" }}>
      <div className="card relative">
        <div className="container text-white">
          <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
            <h3 className="mb-4">RECUPERATION MOT DE PASSE</h3>
          </div>
        </div>
        <div className="card-body mt-5">
          <form className="mb-5 mt-5">
          <div className="">
              <InputLabel label={'Entrez votre adresse email pour recevoir un lien permettant de réinitialiser le mot de passe.'} type={'email'} placeholder={'exemple@gmail.com'} />
            </div>
            <div className="row mt-4">
          <MaButton type={'button'} text={"ENVOYER"}/>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ForgetPassword;