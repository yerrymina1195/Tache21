import {React, useState} from 'react';
import '../parametres/Parametre.css'
import LabelInput from './LabelInput';
import ButtonReutilisable from '../../components/ButtonReutilisable';

const Parametre = () => {
    const [imageURL, setImageURL] = useState(null);

    const handleImageChange = (e) => {
      const selectedImage = e.target.files[0];
  
      if (selectedImage) {
        setImageURL(URL.createObjectURL(selectedImage));
      }
    };
    return (
        <div>
            <div class="container-xl px-4 mt-4 ">
                <div class="row">
                    <div class="col-xl-12 ">
                        <div class="card bg-[#ffff] dark:bg-secondary-dark-bg text-[#ffff] dark:text-gray-200">
                            <div class="card-header mb-3 text-white">Modifier vos informations personnelles</div>
                            <div class="row gx-3">
                                <div className="col-md-6 p-4">
                                <div className="col-md-6 p-4">
      <div className="small font-italic dark:text-gray-200 mb-4">
        Choisir une image pas plus de 5 MB sous format JPG / PNG
      </div>
      <input
        id="photoProfil"
        type="file"
        onChange={handleImageChange}
      />
    
    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-md-end align-items-lg-end justify-content-sm-start align-items-sm-start">
                                    {/* <img class="" src="https://img.freepik.com/vecteurs-premium/profil-personnage-dessin-anime-avatar-homme-affaires_18591-50581.jpg?w=2000" alt="Profil" /> */}
                                    {imageURL && <img id="image"  className="img-account-profile rounded-circle me-4" src={imageURL} alt="Selected" />}
                                </div>
                            </div>
                            <div class="card-body">
                                <form>
                                    <LabelInput id="inputUsername" label="Nom d'utilisateur" placeholder="mamagdg670" type="text" />
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
                                    <div className='text-center'>
                                        <ButtonReutilisable text='Enregistrer les modifications' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-xl-4">
                        <div class="card mb-4 mb-xl-0">
                            <div class="card-header text-white">Photo de profil</div>
                            <div class="card-body text-center">
                                <img class="img-account-profile rounded-circle mb-2" src="https://media.istockphoto.com/id/1300845620/fr/vectoriel/appartement-dic%C3%B4ne-dutilisateur-isol%C3%A9-sur-le-fond-blanc-symbole-utilisateur.jpg?s=612x612&w=0&k=20&c=BVOfS7mmvy2lnfBPghkN__k8OMsg7Nlykpgjn0YOHj0=" alt="" />
                                <div class="small font-italic text-muted mb-4">Pas plus de 5 MB sous format JPG / PNG </div>
                                <ButtonReutilisable text='Telecharger une image' />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Parametre;