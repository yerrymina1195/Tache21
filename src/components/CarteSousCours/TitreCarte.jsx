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
                    Ajouter de un cours
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
                      type="url"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Nom du domaine"
                    />
                    <label for="floatingInput">Entrez l'url du cours</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Nom du domaine"
                    />
                    <label for="floatingInput">Entrez le titre du cours</label>
                  </div>
                  <div class="form-floating mb-3">
                    <textarea
                      class="form-control"
                      id="floatingInput"
                      placeholder="Nom du domaine"
                      cols="30"
                      rows="50"
                    ></textarea>
                    <label for="floatingInput">
                      Entrez la description du cours
                    </label>
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
