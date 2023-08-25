import React, { useState } from "react";
import { updatePassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";

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
            <div className="col-md-8 mx-auto">
            <div className="card  relative ">
        <div className="container text-white">
          <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title mx-auto p-4">
            <h3 className="mb-4">MODIFICATION MOT DE PASSE</h3>
          </div>
        </div>
        {/*  */}
        <div className="card-body mt-5">
          <form className="mb-5 mt-5" onSubmit={onSubmit}>
            <div className="">
              <InputLabel
                label={"Nouveau mot de passe"}
                type={newPasswordShow ? "text" : "password"}
                icon={newPasswordShow ? <AiFillEye className="h-6 w-6" onClick={()=> setNewPasswordShow(!newPasswordShow)} />: <FaEyeSlash className="h-6 w-6" onClick={()=> setNewPasswordShow(!newPasswordShow)} />}
                placeholder={"********"}
                onChange={(e) => setNewMdp(e.target.value)}
              />
            </div>
            <div className="">
              <InputLabel
                label={"Confirmer"}
                type={confiPasswordShow  ? "text" : "password"}
                icon={confiPasswordShow ? <AiFillEye className="h-6 w-6" onClick={()=> setConfiNewPasswordShow(!confiPasswordShow)} />: <FaEyeSlash className="h-6 w-6" onClick={()=> setConfiNewPasswordShow(!confiPasswordShow)} />}
                placeholder={"********"}
                onChange={(e) => setConfirMdp(e.target.value)}
              />
            </div>
            <div className="row mt-4">
              <MaButton type={"submit"} text={"Enregistrer"} />
            </div>
          </form>
        </div>
      </div>
            </div>
        </div>

     </div>
    </div>
  );
};

export default Securite;
