import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RiFacebookLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import "../Ma.css";

const Cours = () => {
  return (
    <div className="container-fluid p-5 back" style={{ height: "700px" }}>
      <div className="container-fluid mt-5 largeur1" style={{ width: "40%" }}>
        <div className="card relative">
          <div className="container text-white">
            <div className="bg1 text-center fw-bold rounded-3 pt-5 card-title position-absolute start-50 translate-middle p-4">
              <h3 className="mb-4">CONNEXON</h3>
              <div className="flex justify-evenly">
                <div className="col-md-6 ">
                  <a
                    href="#"
                    className="text-white text-decoration-none flex items-center ">
                    <RiFacebookLine className="text-sky-400/100 fs-4 " />Facebook
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    href="#"
                    className="text-white text-decoration-none flex items-center float-end">
                    <FcGoogle className="text-primary fs-4 " />Google
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body mt-5">
            <form className="mb-5 mt-5">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label mt-5">
                  Adresse Email
                </label>
                <input
                  type="email"
                  className="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="exemple@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mot de Passe
                </label>
                <input
                  type="password"
                  className="form-control shadow-none"
                  id="exampleInputPassword1"
                  placeholder="........"
                />
              </div>
              <button
                type="submit"
                className="btn bg1 text-white fw-bold w-100">
                Se Connecter
              </button>
              <div className="row mt-4">
                <div className="col-md-6"></div>
                <div className="col-md-6 text-end">
                  <a href="#" className="">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;