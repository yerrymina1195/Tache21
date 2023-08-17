import React from 'react'
import ButtonReutilisable from '../../components/ButtonReutilisable'

const ModalReu = () => {
  return (
    <section>
    <div className="d-flex">
      <h1>liste des eleves</h1>
      <div
          className="mx-auto me-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModale"
        >
          <ButtonReutilisable text={"Ajouter un eleve"}/>

      </div>
    </div>
        <input className="form-control me-2 w-25 float-end" type="search" placeholder="Search" aria-label="Search"></input>

    <div
      className="modal fade mt-[100px] "
      id="exampleModale"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content ">
          <div className="modal-header ">
            <h1 className="modal-title fs-5 " id="exampleModalLabel">
              Ajouter un eleve
            </h1>
            <button
              type="button"
              className="btn-close text-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body ">
            <div className="row w-[600]">
              <div
                className="form-floating mb-3"
              >
                <div className="row ">
                  <div className="form-floating col-6">
                    <input
                      className="form-control   required mb-3"
                      id="floatingName"
                      type="text"
                      name="nom"
                      placeholder="nom"
                    />
                    <label for="floatingName" className="ms-2">nom</label>
                  </div>
                  <div className="form-floating col-6">
                    <input
                      className="form-control   required "
                      id="floatingPrenom"
                      placeholder="prenom"
                      type="text"
                      name="name"
                    />
                    <label for="floatingPrenom" className="ms-2">prenom</label>
                  </div>
                </div>

                <div className="row">
                  <div className="form-floating col-6">
                    <input
                      className="form-control   required mb-3"
                      id="floatingTel"
                      type="number"
                      name="tel"
                      placeholder="tel"
                    />
                    <label for="floatingTel" className="ms-2">tel</label>
                  </div>
                  <div className="form-floating col-6">
                    <input
                      className="form-control required "
                      id="floatingEmail"
                      placeholder="email"
                      type="email"
                      name="email"
                    />
                    <label for="floatingEmail" className="ms-2">email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-floating col-6">
                    <input
                      className="form-control required "
                      id="floatingCoach"
                      type="text"
                      name="text"
                      placeholder="coach"
                    />
                    <label for="floatingCoach" className="ms-2">coach</label>
                  </div>
                  <div className="form-floating col-6">
                    <input
                      className="form-control   required"
                      id="floatingDomaine"
                      placeholder="domaine"
                      type="text"
                      name="text"
                    />
                    <label for="floatingDomaine" className="ms-2">domaine</label>
                  </div>
                </div>
                <div className="mt-3 float-end">
                    < ButtonReutilisable text={"Enregistrer"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ModalReu