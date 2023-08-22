import React from "react";
import Domaine from "../components/cardDomaines/Domaine";
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
    <div>
      <div className="dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-5 domaine">
        <div className="container ">
          <div className="row d-flex align-items-center mt-5">
            <div className="col-md-6 col-sm-12">
              <h1 className="">Les Domaines</h1>
            </div>
            <div className="col-md-6 col-sm-12">
              <div data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <ButtonReutilisable text={"Ajouter un domaine"} />
              </div>
              {/* button modal */}
              {/* Modal */}
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true">
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
        <div className="container my-5 bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
          <div className="row row-gap-3">
            {domains.map((domain) => (
              <div className="col-lg-4 col-md-6 col-sm-12 ">
                <Domaine title={domain.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cours;
