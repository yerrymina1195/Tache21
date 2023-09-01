import React, { useState, useEffect } from 'react';
import './Certification.css';
import { addDoc, collection, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase/Firebase';
import { useStateContext } from '../../contexts/ContextProvider';


function GenererCertificat() {
    const { user } = useStateContext();
    const [date, setDate] = useState('');
    const [eleve, setEleve] = useState('');
    const [nombreEleve, setNombreEleve] = useState('');
    const usersCollection = collection(db, 'users');
    const nomComplet = user?.prenom + " " + user?.nom
    console.log(nomComplet);
    console.log(eleve);
    useEffect(() => {
        const eleveQuery = query(usersCollection, where('statut', '==', 'eleve'));
        const unsubscribeEleve = onSnapshot(eleveQuery, (snapshot) => {
            const eleveData = snapshot.docs.map(doc => doc.data());
            setNombreEleve(eleveData);
        });
        return () => {

            unsubscribeEleve();
        };
        // eslint-disable-next-line 
    }, []);
    const SendCertificationEleve = async () => {


        try {
            if (user) {
                const certificationDocRef = collection(db, "certification");
                const data0 = {
                    ideleve: eleve,
                    valide: true,
                    certifieby: nomComplet,
                    date: serverTimestamp()

                };
                await addDoc(certificationDocRef, data0);
                console.log("certification ajoutée avec succès !");

            }
        } catch (error) {
            console.error("Erreur lors de l'ajout de la certification :", error);
        }

    };








    return (
        <div className='only:'>
            <div className="container p-5">
                <form >
                    <div className="card-header  dark:bg-secondary-dark-bg text-white dark:text-gray-200">Remplir les informations au complet</div>
                    <div class="form-floating mb-3 bg-white p-5">
                        <div className="row mb-3 mt-5 ">
                            <div className="col-md-6">
                                <label htmlFor="select" className='mb-2'>Eléve certifié:</label>
                                <select className="form-select shadow-none hIn" aria-label="Default select example"
                                    name="eleve"
                                    onChange={(e) => setEleve(e.target.value)}
                                    value={eleve}
                                >
                                    <option value="" >Choisir l'éléve</option>
                                    {nombreEleve?.length > 0 ? nombreEleve?.map((element, index) => (
                                        <option key={index} value={`${element.id}`}>{`${element.prenom}${element.nom}`}</option>

                                    )) : ""}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label for="floatingInput" className='mb-2'>Date de certification:</label>
                                <input className="form-control date hIn" id="floatingInput" type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </div>
                        </div>


                        <div className='mt-5 align-items-center justify-content-center d-flex'>
                            <button className="main-btn w-25 p-2 fw-bold mt-5 cert text-white rounded-3" onClick={SendCertificationEleve}>Envoyer</button></div>
                    </div>


                    {/* <div className="container bgCertificate p-4 mt-5" >
                        <div id="pdf-content" className="bgCertification2" >
                            <div className="p-3">
                                <div className="row  text-center d-flex justify-content-center align-items-center flex-column ">
                                    <h1 className="digi p-3 text-white mb-5 titre">
                                        DIGISPHERE <br /> <span className="fs-5">E-LEARNING</span>
                                    </h1>
                                    <p>Ceci certifie que</p>
                                    <h4>{user?.prenom}</h4>
                                    <p>
                                        a terminé avec succés
                                        <br />
                                        le module <span className='fw-bold'>{user?.domaine}</span><span> le {date}</span>
                                    </p>
                                </div>
                                <div className="row mt-5 text-center">
                                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                        <img src={img1} alt="scan" className="wscan" />
                                    </div>
                                    <div className="col-4 psign p-3 text-center d-flex justify-content-center align-items-center flex-column">
                                        <h4 className="border-bottom titre">SIGNATURE</h4>
                                        <img src={img2} alt="sign" className="sign" />
                                    </div>
                                    <div className="col-4 text-center d-flex justify-content-center align-items-center">
                                        <img src={img3} alt="certif" className="logo" />
                                    </div>
                                </div>
                                <div className="row text-center mt-5">
                                    <p>
                                        Validé par son coach: <br />{" "}
                                        <span className="text-couleur1">{user?.prenom}{user?.name}</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div> */}


                </form>
            </div>
        </div>
    );
}

export default GenererCertificat