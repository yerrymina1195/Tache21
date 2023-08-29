import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import InputLabel from "../pageConnexion/InputLabel";

import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

import ButtonReutilisable from "../../components/ButtonReutilisable";

const Securite = () => {
  const [newPasswordShow, setNewPasswordShow] = useState(false);
  const [confiPasswordShow, setConfiNewPasswordShow] = useState(false);
  const [newMdp, setNewMdp] = useState("");
  const [confirMdp, setConfirMdp] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (newMdp === "" || confirMdp === "") {
      alert("saisir quelque chose svp");
    }
    if (newMdp === confirMdp) {
      modifMdp(newMdp);
      alert("Mot de passe modifié avec succès !");
    } else {
      // toast.error("Mots de passe ne correspond pas");
      alert("Mots de passe ne correspond pas");
    }
  };
  const modifMdp = async (newPassword) => {
    try {
      await updatePassword(auth?.currentUser, newPassword);
    } catch (error) {

      //   toast.warning("Mot de passe faible, utilisez au minimum 6 caractères !");
      alert("Mot de passe faible, utilisez au minimum 6 caractères !");
      console.error("Error updating password: ", error);
    }
  };
  return (
    <div>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-12 mx-auto"><div className="card bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
            <div className="card-header mb-3 text-white" >
              <p>
                Modifier votre mot de passe
              </p></div>

            {/*  */}
            <div className="card-body">
              <form className="mb-5" onSubmit={onSubmit}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="">
                        <InputLabel
                          label={"Nouveau mot de passe"}
                          type={newPasswordShow ? "text" : "password"}
                          icon={newPasswordShow ? <AiFillEye className="h-6 w-6 text-warning" onClick={() => setNewPasswordShow(!newPasswordShow)} /> : <FaEyeSlash className="h-6 w-6 text-secondary" onClick={() => setNewPasswordShow(!newPasswordShow)} />}
                          placeholder={"********"}
                          onChange={(e) => setNewMdp(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <InputLabel
                          label={"Confirmer"}
                          type={confiPasswordShow ? "text" : "password"}
                          icon={confiPasswordShow ? <AiFillEye className="h-6 w-6 text-warning" onClick={() => setConfiNewPasswordShow(!confiPasswordShow)} /> : <FaEyeSlash className="h-6 w-6 text-secondary" onClick={() => setConfiNewPasswordShow(!confiPasswordShow)} />}
                          placeholder={"********"}
                          onChange={(e) => setConfirMdp(e.target.value)}
                        />
                      </div>
                      <div className="text-center mt-5">
                        <ButtonReutilisable type={"submit"} text={"Enregistrer les modifications"} />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>

        <div className="mt-5 container">
          <div className="row d-flex justify-content-center align-items-center">
            <h4>Désactiver</h4>
            <div className="col-md-6">
              <p>
                Êtes-vous sûr de vouloir désactiver votre compte ?
              </p>
            </div>
            <div className="col-md-6 text-end">
              <ButtonReutilisable type={""} text={"Désactiver"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Securite;
