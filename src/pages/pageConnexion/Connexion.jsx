import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useState } from "react";
// import { RiFacebookLine } from "react-icons/ri";
// import { FcGoogle } from "react-icons/fc";
import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/Firebase"
import { AuthContext } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Connexion = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user })
        navitage("/l")
        // ...
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div class="mabg"></div>
      <div class="mabg mabg2"></div>
      <div class="mabg mabg3"></div>
      <div class="macontent">
        <div className="card relative bgma">
          <div className="container text-white">
            <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
              <h3 className="mb-4">CONNEXION</h3>
            </div>
          </div>
          {/*  */}
          <div className="card-body mt-4">
            <form className="mb-5 pt-5 mt-5 " onSubmit={handleLogin}>
              <div className="">
                {/*  */}
                <InputLabel label={'Adresse email'} type={'email'} placeholder={'exemple@gmail.com'} onChange={(e) => setEmail(e.target.value)} />
              </div>
              {/*  */}
              <div className="mb-3">
                <InputLabel label={'Mot de passe'} type={'password'} placeholder={'........'} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="row">
                <Link to={'/l/dashboard'}>
                  <MaButton type={'button'} text={"SE CONNECTER"} />
                </Link>
              </div>
              <div className="row mt-4">
                <div className="col-md-6"></div>
                <div className="col-md-6 text-end">
                  <Link to={'/f'} className="text-decoration-none fw-bold text-couleur1">
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