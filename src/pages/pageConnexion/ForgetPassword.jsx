import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Alerte from "../../components/alert/Alerte";

const ForgetPassword = () => {
  // const [email, setEmail] = useState('')
  // const auth = getAuth();

  // const handleResetPassword = (e) => {
  //   e.preventDefault();
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       // Succès : l'e-mail de réinitialisation du mot de passe a été envoyé
  //       console.log("l'e-mail de réinitialisation du mot de passe a été envoyé");
  //       // Réinitialisez les champs du formulaire
  //       setEmail("")
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // Erreur : échec de l'envoi de l'e-mail de réinitialisation du mot de passe
  //       console.error("Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe", error);
  //     });
  // };

  return (
    // <div>
    //   <div class="mabg"></div>
    //   <div class="mabg mabg2"></div>
    //   <div class="mabg mabg3"></div>
    //   <div class="macontent">
    //     <div className="card relative bgma">
    //       <div className="container text-white">
    //         <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
    //           <h3 className="mb-4">RECUPERATION MOT DE PASSE</h3>
    //         </div>
    //       </div>
    //       {/*  */}
    //       <div className="card-body mt-5">
    //         <form className="mb-5 mt-5" onSubmit={handleResetPassword}>
    //           <div className="">
    //             <InputLabel label={'Entrez votre adresse email pour recevoir un lien permettant de réinitialiser le mot de passe.'} type={'email'} placeholder={'exemple@gmail.com'} />
    //           </div>
    //           <div className="row mt-4">
    //             <MaButton type={'button'}
    //               text={"ENVOYER"}
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)} />
    //           </div>
    //           <div className="row mt-4">
    //             <div className="col-md-6"></div>
    //             <div className="col-md-6 text-end" >
    //               <a href="#" className="text-decoration-none text-couleur1">
    //                 Vous vous en souvenez? </a>
    //             </div>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <Alerte message='Supprimer'/>
    </div>

  );
};

export default ForgetPassword;




