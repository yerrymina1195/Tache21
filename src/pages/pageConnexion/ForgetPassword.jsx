import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { auth} from "../../Firebase/Firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgetPassword = () => {
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Succès : l'e-mail de réinitialisation du mot de passe a été envoyé
        alert("l'e-mail de réinitialisation du mot de passe a été envoyé");
        navigate("/")
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // Erreur : échec de l'envoi de l'e-mail de réinitialisation du mot de passe
        console.error("Erreur lors de l'envoi de l'e-mail de réinitialisation du mot de passe", error);
        if (error.code ==="auth/missing-email") {
          alert('il faut saisir un email valide')
        }
        if (error.code ==="auth/user-not-found") {
          alert(`use n'existe pas`)
        }
        
      });
      // alert("l'e-mail de réinitialisation du mot de passe a été envoyé");
      // Réinitialisez les champs du formulaire
      setEmail("")
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
              <h3 className="mb-4">RECUPERATION MOT DE PASSE</h3>
            </div>
          </div>
          {/*  */}
          <div className="card-body mt-5">
            <form className="mb-5 mt-5" onSubmit={handleResetPassword}>
              <div className="">
                <InputLabel label={'Entrez votre adresse email pour recevoir un lien permettant de réinitialiser le mot de passe.'}
                 type={'email'}
                 value={email}
                 placeholder={'exemple@gmail.com'}
                onChange={(e) => setEmail(e.target.value)}
                required />
              </div>
              <div className="row mt-4">
                <MaButton type={'submit'}
                  text={"ENVOYER"}
                 
             />
              </div>
              <div className="row mt-4">
                <div className="col-md-6"></div>
                <div className="col-md-6 text-end" >
                  <a href="/" className="text-decoration-none text-couleur1">
                    Vous vous en souvenez? </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ForgetPassword;




