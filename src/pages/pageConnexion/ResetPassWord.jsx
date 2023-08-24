import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";

const ResetPassWord = () => {
  // const navigate = useNavigate()
  const [newMdp, setNewMdp] = useState("")
  const [confirMdp, setConfirMdp] = useState("")
  const onSubmit = (e) => {
    e.preventDefault();
    if (newMdp === "" ||confirMdp ==="") {
      alert('saisir quelque chose svp')
    }
    if (newMdp === confirMdp) {
      // resetPassword(newMdp);
      alert('nice meme mdp')
    } else {
      // toast.error("Mots de passe ne correspond pas");
      alert("Mots de passe ne correspond pas")
    }
  };
  //  const resetPassword = async (newPassword) => {
  //   const params = new URLSearchParams(window.location.search);
  //   const oobCode = params.get("oobCode");
  
  //   try {
  //     const email = await verifyPasswordResetCode(auth, oobCode);
  //     const accountEmail = email;
  
  //     await confirmPasswordReset(auth, oobCode, newPassword);
      
  //     // Réinitialisation réussie
  //     toast.success("Mot de passe réinitialisé avec succès !");
  //     navigate("/");
  //   } catch (error) {
  //     const message = error.code;
  
  //     if (message === "auth/weak-password") {
  //       alert("Mot de passe faible, utilisez au moins 6 caractères !");
  //     } else if (message === "auth/user-disabled") {
  //       alert("Utilisateur désactivé par l'admin");
  //       navigate("/");
  //     } else if (message === "auth/user-not-found") {
  //     alert("Aucun utilisateur associé à cette adresse e-mail !");
  //     } else if (message === "auth/invalid-action-code") {
  //       alert("Renvoyez un e-mail, car le mail précédent n'est plus valide !");
  //       navigate("/");
  //     } else if (message === "auth/expired-action-code") {
  //       alert("Temps de validité expiré, réessayez à nouveau !");
  //       navigate("/");
  //     }
  //   }
  // };
  
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
                <InputLabel label={'Nouveau mot de passe'} type={'password'} placeholder={'********'} onChange={(e) => setNewMdp(e.target.value)} />
              </div>
              <div className="">
                <InputLabel label={'Confirmer'} type={'password'} placeholder={'********'} onChange={(e) => setConfirMdp(e.target.value)} />
              </div>
              <div className="row mt-4">
                <MaButton type={'button'}
                  text={"REINITIALISER"}
                  value={""}
                  onClick={onSubmit}
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