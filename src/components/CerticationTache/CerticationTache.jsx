import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import {
    collection,
    serverTimestamp,
    addDoc,
    where,
    onSnapshot,
    query,
    updateDoc,
    doc
} from "firebase/firestore";
import html2pdf from 'html2pdf.js';
import './Certification.css';
import img1 from '../../data/scan.png';
import img2 from '../../data/sign.png';
import img3 from '../../data/logo.png';
import { db } from "../../data/../Firebase/Firebase";
import { useStateContext } from '../../contexts/ContextProvider';

const CerticationTache = (props) => {
    const [cert, setCert] = useState('');
    const certCollection = collection(db, 'certification');
    useEffect(() => {
        const CertQuery = query(certCollection, where('ideleve', '==', user.id));


        const unsubscribeCert = onSnapshot(CertQuery, (snapshot) => {
            const certData = snapshot.docs.map(doc => doc.data());
            setCert(certData);
            console.log(certData);
        });
        return () => {

            unsubscribeCert();
        };
        // eslint-disable-next-line 
    }, []);



    console.log(cert);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            margin: 10,
            filename: 'Tache.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'pt', format: 'letter', orientation: 'portrait' }
        };

        const content = document.getElementById('pdf-content');

        await html2pdf().from(content).set(options).save();
    };


    const { user } = useStateContext();
    const [lienSaisi, setLienSaisi] = useState('');

    // eslint-disable-next-line
    const [certifie, setCertifie] = useState('');


    const sendcertifie = async () => {
        try {
            if (user) {
                const notificationDocRef = collection(db, "notifications");
                const data = {
                  notifiepar: user.id,
                  notifieA: user.coachSelf,
                  prenom:user?.prenom,
                  nom:user?.nom,
                  message:`certification`,
                  date: serverTimestamp(),
                  imageUrl:user.url,
                  vu: false,
                  lien: lienSaisi
                };
                const docRef=  await addDoc(notificationDocRef, data);
                console.log("notification demarré avec succès !");
                await updateDoc(doc(notificationDocRef, docRef.id), {
                      id: docRef.id,
                    })
                    console.log("id avec succès !");
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout de la certification :", error);
        }
    };

    return (
        <div className='container md:m-10 mt-24 dark:text-gray-400 p-5 md:p-10 '>
            <div className="container bgCertificate p-4 mt-5 d-none" >
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
                                le module <span className='fw-bold'>{user?.domaine}</span><span> {}</span>
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
                                <span className="text-couleur1 txt">{cert?.length >0 ? cert[0].certifieby :""}</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

{cert[0]?.valide && <div className='align-items-center justify-content-center d-flex'>
                <button className="main-btn w-25 p-2 fw-bold mt-5 cert text-white " onClick={(e) => handleSubmit(e)} >Telecharger votre certification</button>
                </div>}

            <div className="text-center d-flex justify-content-center align-items-center m-3">
                <h1 className='text-couleur2 text-center fw-bol'>Certification en  {props.domaine}</h1>
            </div>
            <div className='mb-3'>
                <h6 className='fs-3 text-center mb-5'>Objectif : {props.objectif}</h6>
                <p className='text-start'>Vous pouvez utiliser n'importe quel mélange de HTML, JavaScript, CSS, Bootstrap,
                    SASS, React et Redux pour mener à bien ce projet. Vous devez utiliser un framework frontend (comme React par exemple)
                    car cette section concerne l'apprentissage des frameworks frontend. Les technologies supplémentaires non répertoriées
                    ci-dessus ne sont pas recommandées et leur utilisation est à vos risques et périls. Nous accepterons et essaierons
                    de résoudre tous les rapports de problèmes qui utilisent la pile technologique suggérée pour ce projet.
                    Pour le Backend vous pouvez utiliser node js ou firebase. Bon codage !
                </p>
                <div className='d-flex flex-row'>
                    <p>Voici un exemple de site e-commerce :</p>
                    <Link to="https://nike-shop-murex.vercel.app" className='text-decoration-none text-dark ms-1 fw-bold'>https://nike-shop-murex.vercel.app</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-4 border-none">
                        <div className="card-title text-center">
                            <p className='text-dark fw-bold'>Les fonctionnalités pour l'admin :</p>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Supprimer un compte</li>
                                <li>Ajouter des produits sur le site</li>
                                <li>Accepter les commandes en ligne</li>
                                <li>Valider les payments en ligne</li>
                                <li>Valider les payments en ligne</li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card p-4 border-none">
                        <div className="card-title text-center">
                            <p className='text-dark fw-bold'>Les fonctionnalités pour les utilisateurs : </p>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>Avoir un compte</li>
                                <li>Ajouter un produit sur le panier</li>
                                <li>Payer en ligne les produits commandés</li>
                                <li>Modifier la liste des commandes</li>
                                <li>Supprimer un produit ou tous les produit</li>
                            </ul>

                        </div>
                    </div>

                </div>
                <div className="col-12 mt-5">
                    <p className='fs-5'>Une fois que vous avez terminé, soumettez l'URL à votre projet de travail avec tous ses tests réussis.</p>
                </div>
                <div className="container  d-flex flex-column justify-content-center align-items-center">
                    <form className='mb-3 w-50'>
                        <div className="form-group mb-3">
                            <label htmlFor="text" className='fs-6 fw-semibold'>Lien vers la solution</label>
                            <input
                                type="url"
                                className='form-control border-secondary'
                                required
                                value={lienSaisi}
                                onChange={(e) => setLienSaisi(e.target.value)} 
                            />
                        </div>
                        <div className="btn-group mb-3 w-100">
                            <button
                                type='button'
                                className="main-btn w-100 p-2 fw-bold"
                                onClick={sendcertifie}
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CerticationTache