import React from "react";
import ButtonReutilisable from "../ButtonReutilisable";

const TitreCarte = (props) => {
  return (
    <div>
      <div className="row pe-5 ps-5">
        <div className="col-md-6">
          <h1>{props.titreCours}</h1>
        </div>
        <div className="col-md-6 float-end">
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
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Nom du domaine"
                    />
                    <label for="floatingInput">Nom du domaine</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Nom du domaine"
                    />
                    <label for="floatingInput">Nom du domaine</label>
                  </div>
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
  );
};

export default TitreCarte;
