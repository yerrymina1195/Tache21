import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./Ma.css";
import InputLabel from "../pageConnexion/InputLabel";
import MaButton from "../pageConnexion/MaButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "../../Firebase/Firebase"
import { useStateContext } from "../../contexts/ContextProvider";
import {
 
  doc,
  getDoc
 
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Connexion = () => {
  const {updateUser}=useStateContext()
  //eslint-disable-next-line
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  

  const handleLogin = async(e) => {
   
    e.preventDefault();
   
    console.log(email)

    try {
      const res= await signInWithEmailAndPassword(auth, email, password);
      const userID=  res?.user?.uid
      const userDoc = await getDoc(doc(db, 'users', userID));
      const userData = userDoc.data();
      alert(`Bienvenue ${userData.prenom}`)
      updateUser(userData)
      navitage('l/dashboard')
      
      // onSnapshot(doc(db,'users',userID), (doc) => {
      //   const user= doc.data()
        
      // });
   
    } catch (error) {
      alert(error)
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
              <h3 className="mb-4">CONNEXON</h3>
              <p>{error}</p>
              {/* <div className="row d-flex justify-evenly">
                <div className="col-md-6 ">
                  <a
                    href="#"
                    className="text-white text-decoration-none flex items-center ">
                    
                    Facebook
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="#"
                    className="text-white text-decoration-none flex items-center">
                   
                    Google
                  </a>
                </div>
              </div> */}
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
                <InputLabel label={'Mot de passe'} type={'password'} placeholder={'********'} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="row">
              <Link >
                <MaButton type={'submit'} onClick={handleLogin} text={"Se connecter"} />
                </Link>
              </div>
              <div className="row mt-4">
                <div className="col-md-6"></div>
                <div className="col-md-6 text-end">
                  <Link to={'/f'} className="text-decoration-none  text-couleur1">
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