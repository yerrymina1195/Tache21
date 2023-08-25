import React from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';
import LabelInput from '../../parametres/LabelInput';
import ButtonReutilisable from '../../../components/ButtonReutilisable';

const ModalQuiz = () => {
    return (
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalQuiz">
                Ajouter un quiz
            </button>
            {/* <ButtonReutilisable  text='Ajouter un quiz'/> */}

            <div class="modal fade" id="exampleModalQuiz" tabindex="-1" aria-labelledby="exampleModalQuizLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalQuizLabel">Ajouter un quiz</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <LabelInput id="" label="Question" placeholder="" type="text" />
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <LabelInput id="" label="Reponse 1" placeholder="" type="text" />
                                    </div>
                                    <div class="col-md-6">
                                        <LabelInput id="" label="Reponse 2" placeholder="" type="text" />
                                    </div>
                                </div>
                                <div class="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <LabelInput id="" label="Reponse 3" placeholder="" type="text" />
                                    </div>
                                    <div class="col-md-6">
                                        <LabelInput id="" label="Reponse 4" placeholder="" type="text" />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <ButtonReutilisable text='Enregistrer' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalQuiz;