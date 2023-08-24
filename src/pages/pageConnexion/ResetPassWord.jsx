import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";

const ResetPassWord = () => {

  return (
    <div>
      <div class="mabg"></div>
      <div class="mabg mabg2"></div>
      <div class="mabg mabg3"></div>
      <div class="macontent">
        <div className="card relative bgma">
          <div className="container text-white">
            <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
              <h3 className="mb-4">REINITIALISATION MOT DE PASSE</h3>
            </div>
          </div>
          {/*  */}
          <div className="card-body mt-5">
            <form className="mb-5 mt-5" onSubmit={""}>
              <div className="">
                <InputLabel label={'Nouveau mot de passe'} type={'password'} placeholder={'********'} />
              </div>
              <div className="">
                <InputLabel label={'Confirmer'} type={'password'} placeholder={'********'} />
              </div>
              <div className="row mt-4">
                <MaButton type={'button'}
                  text={"REINITIALISER"}
                  value={""}
           />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassWord;