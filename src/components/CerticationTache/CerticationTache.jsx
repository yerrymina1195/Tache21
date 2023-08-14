import React from 'react'
import { Link } from "react-router-dom";
const CerticationTache = () => {

    return (
        <div className='container bg-white m-2 md:m-10 mt-24 p-2 md:p-10 rounded-3xl'>
            <div className="text-center d-flex justify-content-center align-items-center my-5">
                <h1 className='text-couleur2 text-center fw-bold'>Certification en Développement Web</h1>
            </div>
            <div className='mb-3'>
                <h6 className='fs-3 text-center'>Objectif : créer un site e-commerce</h6>
                <p className='text-start'>Vous pouvez utiliser n'importe quel mélange de HTML, JavaScript, CSS, Bootstrap,
                    SASS, React et Redux pour mener à bien ce projet. Vous devez utiliser un framework frontend (comme React par exemple)
                    car cette section concerne l'apprentissage des frameworks frontend. Les technologies supplémentaires non répertoriées
                    ci-dessus ne sont pas recommandées et leur utilisation est à vos risques et périls. Nous accepterons et essaierons
                    de résoudre tous les rapports de problèmes qui utilisent la pile technologique suggérée pour ce projet.
                    Pour le Backend vous pouvez utiliser node js ou firebase. Bon codage !
                </p>
                {/* <Link to="https://nike-shop-murex.vercel.app" className='text-decoration-none text-dark ms-1'>https://nike-shop-murex.vercel.app</Link> */}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card p-2">
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
                    <div className="card p-2">
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
            </div>
            {/* <div className="row">
                <div className="col-12">
                    
                    
                    <p className='text-dark fw-bold'> </p>
                    <ul type="circle">
                        <li>Ajouter un produit</li>
                        <li>Accepter les commandes</li>
                        <li>Valider les payments en ligne</li>
                    </ul>
                    
                </div>
                <div className="col-12 text-center">
                    <p>Une fois que vous avez terminé, soumettez l'URL à votre projet de travail avec tous ses tests réussis.</p>
                </div>
                <div className="row justify-content-center">
                <form className='mb-3'>
                    <div className="form-group">
                        <label htmlFor="text" className='fs-6 fw-semibold'>Lien vers la solution</label>
                        <input type="url" className='form-control w-50' required />
                    </div>
                </form>

                <div className="btn-group mb-3">
                    <button type='submit' className="main-btn w-50 p-2">Envoyez mon travail</button>
                </div>

                </div>
            </div> */}

        </div>
    )
}


export default CerticationTache