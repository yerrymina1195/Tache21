import React from 'react';
import { useState } from "react";
import '../Dashboard/FormInscrip.css';
import LabelInput from '../parametres/LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';
import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import CarteAjout from './CarteAjout';

const FormInscrip = () => {
    // const navigate = useNavigate()
    const [errors, setErrors] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        mdp: "",
        address: "",
        statut: "",
        domaine: ""
    });
    const [data, setData] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        mdp: "",
        address: "",
        statut: "",
        domaine: ""
    })
    console.log(errors);
    // Gérer les erreuers 
    const validateEmail = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const { prenom, nom, email, telephone, mdp, address, statut, domaine } = data

    const handelchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        let newErrors = {
            prenom: "",
            nom: "",
            email: "",
            telephone: "",
            mdp: "",
            address: "",
            statut: "",
            domaine: ""
        };

        if (data.email === '') {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(data.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (data.mdp === '') {
            newErrors.mdp = 'Password is required';

        }

        if (data.telephone === '') {
            newErrors.telephone = 'Téléphone number is required';
        }

        if (data.nom === '') {
            newErrors.nom = 'Nom is required';
        }
        if (data.prenom === '') {
            newErrors.prenom = 'Prénom is required';
        }
        if (data.address === '') {
            newErrors.address = 'Address is required';
        }
        if (data.statut === '') {
            newErrors.statut = 'Statut is required';
        }
        if (data.domaine === '') {
            newErrors.domaine = 'Domaine is required';
        }

        setErrors(newErrors);



        if (Object.values(newErrors).every((error) => error === '')) {

            console.log('Form data submitted:', data);
            try {
                const res = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.mdp
                );
                await addDoc(collection(db, "users"), {
                    prenom: data.prenom,
                    nom: data.nom,
                    email: data.email,
                    telephone: data.telephone,
                    mdp: data.mdp,
                    address: data.address,
                    statut: data.statut,
                    domaine: data.domaine,
                    id: res.user.uid,
                    timeStamp: serverTimestamp(),
                });
                // navigate(-1)
                alert("insertion avec succées")

                setData({
                    prenom: "",
                    nom: "",
                    email: "",
                    telephone: "",
                    mdp: "",
                    address: "",
                    statut: "",
                    domaine: "",
                })
            } catch (err) {
                console.log(err);
                alert(err)
            }


            setData({
                prenom: "",
                nom: "",
                email: "",
                telephone: "",
                mdp: "",
                address: "",
                statut: "",
                domaine: "",
            })
        }

    }
    console.log(data);

    return (
        <div>
            <div class="container-xl px-4 mt-4">
                <div class="row">
                    <div class="col-xl-12">
                        <div className="row text-center mb-5">
                            <div className="col">
                                <CarteAjout text='AJOUTER' onClick={onSubmit} />
                            </div>
                        </div>
                        {/* FORMULAIRE ADMIN */}
                        <div class="card border-0 shadow-none ">
                            <div class="card-body shadow-none bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                                <form>
                                    <div class="row gx-3 mb-3 mt-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputLatestName" label="Prenom" placeholder="Mama" type="text"
                                                name="prenom"
                                                onChange={handelchange}
                                                value={prenom}

                                            />
                                            <p className="text-danger">{errors.prenom}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text"
                                                name="nom"
                                                onChange={handelchange}
                                                value={nom}

                                            />
                                            <p className="text-danger">{errors.nom}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" type="email"
                                                name="email"
                                                onChange={handelchange}
                                                value={email}

                                            />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputPhone" label="Numero téléphone" placeholder="77 670 00 66" type="tel"
                                                name="telephone"
                                                onChange={handelchange}
                                                value={telephone}

                                            />
                                            <p className="text-danger">{errors.telephone}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="mdp" label="Mot de passe" placeholder="********" type="password"
                                                name="mdp"
                                                onChange={handelchange}
                                                value={mdp}

                                            />
                                            <p className="text-danger">{errors.mdp}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text"
                                                name="address"
                                                onChange={handelchange}
                                                value={address}

                                            />
                                            <p className="text-danger">{errors.address}</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <ButtonReutilisable text='Enregistrer' onClick={onSubmit} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* FORMULAIRE COACH */}
                        <div class="card border-0 shadow-none ">
                            <div class="card-body shadow-none bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                                <form>
                                    <div class="row gx-3 mb-3 mt-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputLatestName" label="Prenom" placeholder="Mama" type="text"
                                                name="prenom"
                                                onChange={handelchange}
                                                value={prenom}

                                            />
                                            <p className="text-danger">{errors.prenom}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text"
                                                name="nom"
                                                onChange={handelchange}
                                                value={nom}

                                            />
                                            <p className="text-danger">{errors.nom}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" type="email"
                                                name="email"
                                                onChange={handelchange}
                                                value={email}

                                            />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputPhone" label="Numero téléphone" placeholder="77 670 00 66" type="tel"
                                                name="telephone"
                                                onChange={handelchange}
                                                value={telephone}

                                            />
                                            <p className="text-danger">{errors.telephone}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="mdp" label="Mot de passe" placeholder="********" type="password"
                                                name="mdp"
                                                onChange={handelchange}
                                                value={mdp}

                                            />
                                            <p className="text-danger">{errors.mdp}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text"
                                                name="address"
                                                onChange={handelchange}
                                                value={address}

                                            />
                                            <p className="text-danger">{errors.address}</p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-12">
                                            <label htmlFor="select">Domaine</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="domaine"
                                                onChange={handelchange}
                                                value={domaine}
                                            >
                                                <option Selected="Programmation">Programmation</option>
                                                <option value="Design">Design</option>
                                                <option value="Marketing Digital">Marketing Digital</option>
                                            </select>
                                            <p className="text-danger">{errors.domaine}</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <ButtonReutilisable text='Enregistrer' onClick={onSubmit} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* FORMULAIRE ELEVE */}

                        <div class="card border-0 shadow-none ">
                            <div class="card-body shadow-none bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                                <form>
                                    <div class="row gx-3 mb-3 mt-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputLatestName" label="Prenom" placeholder="Mama" type="text"
                                                name="prenom"
                                                onChange={handelchange}
                                                value={prenom}

                                            />
                                            <p className="text-danger">{errors.prenom}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text"
                                                name="nom"
                                                onChange={handelchange}
                                                value={nom}

                                            />
                                            <p className="text-danger">{errors.nom}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" type="email"
                                                name="email"
                                                onChange={handelchange}
                                                value={email}

                                            />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputPhone" label="Numero téléphone" placeholder="77 670 00 66" type="tel"
                                                name="telephone"
                                                onChange={handelchange}
                                                value={telephone}

                                            />
                                            <p className="text-danger">{errors.telephone}</p>
                                        </div>
                                    </div>

                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="mdp" label="Mot de passe" placeholder="********" type="password"
                                                name="mdp"
                                                onChange={handelchange}
                                                value={mdp}

                                            />
                                            <p className="text-danger">{errors.mdp}</p>
                                        </div>
                                        <div class="col-md-6">
                                            <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text"
                                                name="address"
                                                onChange={handelchange}
                                                value={address}

                                            />
                                            <p className="text-danger">{errors.address}</p>
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputCoach" label="Coach" placeholder="Jesus Christ Diatta" type="text"
                                                name="coach"
                                                onChange={handelchange}
                                            // value={coach}
                                            />
                                            <p className="text-danger">{errors.coach}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="select" className='fs-6 mb-1'>Domaine</label>
                                            <select className="form-select shadow-none h-50" aria-label="Default select example" 
                                                name="domaine"
                                                onChange={handelchange}
                                                value={domaine}
                                            >
                                                <option Selected="Programmation">Programmation</option>
                                                <option value="Design">Design</option>
                                                <option value="Marketing Digital">Marketing Digital</option>
                                            </select>
                                            <p className="text-danger">{errors.domaine}</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <ButtonReutilisable text='Enregistrer' onClick={onSubmit} />
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