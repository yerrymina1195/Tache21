import React from "react";
import Domaine from "../components/cardDomaines/Domaine";
import { Link, Outlet } from "react-router-dom";
import ButtonReutilisable from "../components/ButtonReutilisable";

const Cours = () => {
  const domains = [
    {
      title: "programmation",
    },
    {
      title: "marketing",
    },
    {
      title: "design",
    },
  ];
  return (
    <div className="bg-white m-5 p-5 domaine">
      <div className="container ">
        <div className="row d-flex align-items-center mt-5">
          <div className="col-6">
            <h1 className="">Les Domaines</h1>
          </div>
          <div className="col-6 text-end">
            {/* button modal */}
            <ButtonReutilisable
              className=""
              text={"Ajouter un domaine"}
            />
            {/* Modal */}
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Ajout de domaine
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nom du domaine"
                      />
                      <label for="floatingInput">Nom du domaine</label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <ButtonReutilisable text={"Ajouter"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row row-gap-3">
          {domains.map((domain) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <Link
                to={`/cours/${domain.title}`}
                className="text-decoration-none"
              >
                <Domaine title={domain.title} />
              </Link>
            </div>
          ))}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Cours;
