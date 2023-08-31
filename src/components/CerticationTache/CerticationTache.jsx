import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
    collection,
    serverTimestamp,
    addDoc
} from "firebase/firestore";
import { db } from "../../data/../Firebase/Firebase";
import { useStateContext } from '../../contexts/ContextProvider';

const CerticationTache = (props) => {


    const { user } = useStateContext();
    const [lienSaisi, setLienSaisi] = useState('');
    const sendcertifie = async () => {
        try {
            if (user) {
                const notificationDocRef = collection(db, "notifications");
                const data = {
                    certifieiepar: user.id,
                    certifieieA: user.coachSelf,
                    date: serverTimestamp(),
                    vu: false,
                    lien: lienSaisi
                };
                await addDoc(notificationDocRef, data);
                console.log("Certification ajoutée avec succès !");
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout de la certification :", error);
        }
    };




    return (
        <div className='container md:m-10 mt-24 dark:text-gray-400 p-5 md:p-10'>
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
                                onChange={(e) => setLienSaisi(e.target.value)} // Met à jour l'état lienSaisi
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
                            {/* <Link to={`/l/voircertificate`}>
                            <button
                                    type='button'
                                    className="btn-main w-100 p-2 fw-bold ms-2"
                                >
                                    Voir la certification
                                </button>
                            </Link> */}
                             
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