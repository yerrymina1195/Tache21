import React from 'react';
import { useState,useEffect } from "react";
import '../Dashboard/FormInscrip.css';
import LabelInput from '../parametres/LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';
import {
    doc,
    serverTimestamp,
    setDoc,
    collection,
  query,
  where,
  onSnapshot,
   
} from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AiFillEye } from "react-icons/ai";
import { FaEyeSlash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

const FormInscrip = () => {
    const [newPasswordShow, setNewPasswordShow] = useState(false);
    const [nombreCoachs, setNombreCoachs] = useState([]);
    const usersCollection = collection(db, 'users');
    useEffect(() => {
        const coachsQuery = query(usersCollection, where('statut', '==', 'coach'));
        
    
        const unsubscribeCoachs = onSnapshot(coachsQuery, (snapshot) => {
          const coachsData = snapshot.docs.map(doc => doc.data());
          setNombreCoachs(coachsData);
        });
        return () => {
    
          unsubscribeCoachs();
        };
      }, []);
    // const navigate = useNavigate()
    console.log(nombreCoachs);
    const [errors, setErrors] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        mdp: "",
        address: "",
        statut: "",
        domaine: "",
        nbrCoach:""
    });
    const [data, setData] = useState({
        prenom: "",
        nom: "",
        email: "",
        telephone: "",
        mdp: "",
        address: "",
        statut: "",
        domaine: null,
        nbrCoach:null
    })
    console.log(errors);
    // Gérer les erreuers 
    const validateEmail = (email) => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const { prenom, nom, email, telephone, mdp, address, statut, domaine,nbrCoach } = data

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
            domaine: "",
            nbrCoach:""
        };

        if (data.email === '') {
            newErrors.email = 'Email obligatoire';
        } else if (!validateEmail(data.email)) {
            newErrors.email = "Format d'email invalide";
        }

        if (data.mdp === '') {
            newErrors.mdp = 'Mot de pass obligatoire';

        }

        if (data.telephone === '') {
            newErrors.telephone = 'Téléphone obligatoire';
        }

        if (data.nom === '') {
            newErrors.nom = 'Nom obligatoire';
        }
        if (data.prenom === '') {
            newErrors.prenom = 'Prénom obligatoire';
        }
        if (data.address === '') {
            newErrors.address = 'Address obligatoire';
        }
        if (data.statut === '') {
            newErrors.statut = 'Statut obligatoire';
        }
        if (data.statut === "admin") {
            setData({...data, domaine:null , nbrCoach:null})
        }
        if (!data.statut === "admin" && data.domaine === null) {
            newErrors.domaine = 'Domaine obligatoire';
        }
        if (data.statut === "eleve" && data.domaine === null && data.domaine=== null ) {
           
            newErrors.domaine = 'domaine obligatoire';
        }

        if (data.statut === "eleve" && data.nbrCoach === null && data.nbrCoach=== null ) {
           
            newErrors.nbrCoach = 'coach obligatoire';
        }
        if (data.domaine === "") {
            newErrors.domaine = 'Domaine obligatoire';
        }
        if (data.nbrCoach === "") {
            newErrors.nbrCoach = 'coach obligatoire';
        }
        

        setErrors(newErrors);
        console.log({data});


        if (Object.values(newErrors).every((error) => error === '')) {

            console.log('Form data submitted:', data);
            console.log({data});
            try {
                const res = await createUserWithEmailAndPassword(
                    auth,
                    data.email,
                    data.mdp
                );
                await setDoc(doc(db, "users", res.user.uid), {
                    prenom: data.prenom,
                    nom: data.nom,
                    email: data.email,
                    telephone: data.telephone,
                    mdp: data.mdp,
                    address: data.address,
                    statut: data.statut,
                    domaine: data?.statut ==="admin"? null:data?.statut ==="coach"?null:data.domaine,
                    id: res.user.uid,
                    timeStamp: serverTimestamp(),
                    coachSelf:data?.statut ==="admin"? null:data?.statut ==="coach"?null:data.nbrCoach
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
                    nbrCoach:""
                })
            } catch (err) {
                console.log(err);
                alert(err)
            }


            // setData({
            //     prenom: "",
            //     nom: "",
            //     email: "",
            //     telephone: "",
            //     mdp: "",
            //     address: "",
            //     statut: "",
            //     domaine: "",
            // })
        }

    }
   

    return (
        <div>
            <div className="container-xl px-4 mt-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header  dark:bg-secondary-dark-bg text-white dark:text-gray-200">Ajouter un coach ou un eleve</div>

                            <div className="card-body bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputLatestName" label="Prenom" placeholder="Mama" type="text"
                                                name="prenom"
                                                onChange={handelchange}
                                                value={prenom}

                                            />
                                            <p className="text-danger">{errors.prenom}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <LabelInput id="inputFirstName" label="Nom" placeholder="Gadiaga" type="text"
                                                name="nom"
                                                onChange={handelchange}
                                                value={nom}

                                            />
                                            <p className="text-danger">{errors.nom}</p>
                                        </div>
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="inputEmailAddress" label="Adresse email" placeholder="example@gmail.com" 
                                                name="email"
                                                onChange={handelchange}
                                                value={email}

                                            />
                                            <p className="text-danger">{errors.email}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <LabelInput id="inputPhone" label="Numéro téléphone" placeholder="77 670 00 66" type="tel"
                                                name="telephone"
                                                onChange={handelchange}
                                                value={telephone}

                                            />
                                            <p className="text-danger">{errors.telephone}</p>
                                        </div>
                                    </div>

                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <LabelInput id="mdp" label="Mot de passe" placeholder="********"
                                                name="mdp"
                                                onChange={handelchange}
                                                value={mdp}
                                                type={newPasswordShow ? "text" : "password"}
                                                icon={newPasswordShow ? <AiFillEye className=" text-couleur1 h-6 w-6 " onClick={()=> setNewPasswordShow(!newPasswordShow)} />: <FaEyeSlash className="h-6 w-6 text-secondary  text-couleur1" onClick={()=> setNewPasswordShow(!newPasswordShow)} />}
                                            />
                                            <p className="text-danger">{errors.mdp}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <LabelInput id="inputDomicile" label="Adresse de domicile" placeholder="Colobane Parc Amazout" type="text"
                                                name="address"
                                                onChange={handelchange}
                                                value={address}
                                            />
                                            <p className="text-danger">{errors.address}</p>
                                        </div>
                                    </div>
                                    <div className="row gx-3 mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="select">Rôle</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="statut"
                                                onChange={handelchange}
                                                value={statut}
                                            >
                                                <option value="" >Choisir un rôle</option>
                                                <option value="admin">Admin</option>
                                                <option value="coach">Coach</option>
                                                <option value="eleve">Eleve</option>
                                            </select>
                                            <p className="text-danger">{errors.statut}</p>
                                        </div>
                                    { statut !== 'admin' &&   (<div className="col-md-6">
                                            <label htmlFor="select">Domaine à suivre</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="domaine"
                                                onChange={handelchange}
                                                value={domaine}
                                            >
                                                <option value="" >Choisir un domaine</option>
                                                <option value="Programmation">Programmation</option>
                                                <option value="Design">Design</option>
                                                <option value="Marketing Digital">Marketing Digital</option>
                                            </select>
                                            <p className="text-danger">{errors.domaine}</p>
                                        </div>)}
                                    { statut ==='eleve' &&  (<div className="col-md-6">
                                            <label htmlFor="select">Assigner coach</label>
                                            <select className="form-select shadow-none" aria-label="Default select example"
                                                name="nbrCoach"
                                                onChange={handelchange}
                                                value={nbrCoach}
                                            >
                                                <option value="" >Choisir un coach</option>
                                                {nombreCoachs?.map((element,index)=>(
                                                    <option key={index} value={`${element.id}`}>{`${element.prenom}${element.nom}`}</option>
                                                    
                                                ))}
                                            </select>
                                            <p className="text-danger">{errors.nbrCoach}</p>
                                        </div>)}
   

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