import React from 'react'
import './Modal.css';

const ModalBouton = () => {
  return (
    <div className='bouton-modal'>
      {/* <!-- Button trigger modal --> */}
      <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Envoyer mon travail
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Livrer mon travail</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className='form-group mb-2'>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Choisir une tâche</option>
                    <option value="1">Tâche 1</option>
                    <option value="2">Tâche 1</option>
                    <option value="3">Tâche 1</option>
                  </select>
                </div>

                <div className='form-group mb-2'>
                  <textarea class="form-control" placeholder='description du tâche' rows="3"></textarea>
                </div>

                <div className="form-div w-100 border-1 h-[200px] d-flex justify-content-center align-items-center">
                  <button type="file" className="main-btn w-50 text-white p-2">Ajouter mon travail</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" className="btn w-100 text-white fw-bold">Livraison</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalBouton