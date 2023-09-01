import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/Firebase";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

const ResetPassWord = () => {
  const navigate = useNavigate();
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
      alert("nice meme mdp");
      resetPassword(newMdp);
    } else {
      // toast.error("Mots de passe ne correspond pas");
      alert("Mots de passe ne correspond pas");
    }
  };
  const resetPassword = async (newPassword) => {
    const params = new URLSearchParams(window.location.search);
    const oobCode = params.get("oobCode");

    try {
      await verifyPasswordResetCode(auth, oobCode);
      // const accountEmail = email;
      // console.log('accountEmail' + accountEmail);

      await confirmPasswordReset(auth, oobCode, newPassword);

      // Réinitialisation réussie
      // toast.success("Mot de passe réinitialisé avec succès !");
      alert("Mot de passe réinitialisé avec succès !");
      navigate("/");
    } catch (error) {
      const message = error.code;

      if (message === "auth/weak-password") {
        alert("Mot de passe faible, utilisez au moins 6 caractères !");
      } else if (message === "auth/user-disabled") {
        alert("Utilisateur désactivé par l'admin");
        navigate("/");
      } else if (message === "auth/user-not-found") {
        alert("Aucun utilisateur associé à cette adresse e-mail !");
      } else if (message === "auth/invalid-action-code") {
        alert("Renvoyez un e-mail, car le mail précédent n'est plus valide !");
        navigate("/");
      } else if (message === "auth/expired-action-code") {
        alert("Temps de validité expiré, réessayez à nouveau !");
        navigate("/");
      }
    }
  };

  return (
    <div>
      <div className="mabg"></div>
      <div className="mabg mabg2"></div>
      <div className="mabg mabg3"></div>
      <div className="macontent">
        <div className="card relative bgma">
          <div className="container text-white">
            <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
              <h3 className="mb-4">REINITIALISATION MOT DE PASSE</h3>
            </div>
          </div>
          {/*  */}
          <div className="card-body mt-5">
            <form className="mb-5 mt-5" onSubmit={onSubmit}>
              <div className="">
                <InputLabel
                  label={"Nouveau mot de passe"}
                  type={newPasswordShow ? "text" : "password"}
                  icon={
                    newPasswordShow ? (
                      <AiFillEye
                        className="h-6 w-6"
                        onClick={() => setNewPasswordShow(!newPasswordShow)}
                      />
                    ) : (
                      <FaEyeSlash
                        className="h-6 w-6"
                        onClick={() => setNewPasswordShow(!newPasswordShow)}
                      />
                    )
                  }
                  placeholder={"********"}
                  onChange={(e) => setNewMdp(e.target.value)}
                />
              </div>
              <div className="">
                <InputLabel
                  label={"Confirmer"}
                  type={confiPasswordShow ? "text" : "password"}
                  icon={
                    confiPasswordShow ? (
                      <AiFillEye
                        className="h-6 w-6"
                        onClick={() =>
                          setConfiNewPasswordShow(!confiPasswordShow)
                        }
                      />
                    ) : (
                      <FaEyeSlash
                        className="h-6 w-6"
                        onClick={() =>
                          setConfiNewPasswordShow(!confiPasswordShow)
                        }
                      />
                    )
                  }
                  placeholder={"********"}
                  onChange={(e) => setConfirMdp(e.target.value)}
                />
              </div>
              <div className="row mt-4">
                <MaButton type={"submit"} text={"REINITIALISER"} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassWord;
