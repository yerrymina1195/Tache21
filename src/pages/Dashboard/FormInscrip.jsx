import React from 'react';
import '../Dashboard/FormInscrip.css';
import LabelInput from '../parametres/LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';

const FormInscrip = () => {

    return (
        <div>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card">
                            <div class="card-header mb-3 text-white">Ajouter un coach ou un eleve</div>

                            <div class="card-body">
                                <form>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text" />
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputLatestName" label="Prenom" placeholder="Mama" type="text" />
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" type="email" />
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputPhone" label="Numero telephone" placeholder="77 670 00 66" type="tel" />
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text" />
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-12">
                                            <select className="form-select shadow-none" aria-label="Default select example">
                                                <option selected >Admin</option>
                                                <option value="1">Coach</option>
                                                <option value="2">Eleve</option>
                                            </select>
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
        </div>
    );
};

export default FormInscrip;