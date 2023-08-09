import React from 'react'
import Domaine from '../components/cardDomaines/Domaine'
import design from '../data/domaine/design.png'
import programmation from '../data/domaine/programmation.png'
import marketing from '../data/domaine/marketing.png'

const Cours = () => {
  return (
    <div className='bg-white m-5 mt-3 p-5 rounded-3xl'  >
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            <h1 className='fs-1 text-center'>Les Domaine</h1>
          </div>
          <div className="col-6">
            {/* button modal */}
            <button type="button" className="btn add-domaine float-end" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Ajouter un Domaine
            </button>
            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="Nom du domaine" />
                        <label for="floatingInput">Nom du domaine</label>
                    </div>
                    <div class="form-floating">
                      <input type="text" class="form-control" id="floatingPassword" placeholder="Description" />
                        <label for="floatingPassword">Description</label>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-success">Envoyer</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
      <div className="container my-5">
        <div className="row">
          <Domaine img={programmation} title={'programmation'} />
          <Domaine img={design} title={'design'} />
          <Domaine img={marketing} title={'marketing'} />
        </div>
      </div>
    </div>
  )
}

export default Cours
