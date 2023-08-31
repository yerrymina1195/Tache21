import React, { useState, useEffect } from 'react';
import './Livraisons.css';
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useStateContext } from "../../contexts/ContextProvider";
import { db, storage } from "../../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import ButtonReutilisable from '../../components/ButtonReutilisable';

const Livraisons = () => {
  const{user}=useStateContext()
  const [tache, setTache] = useState('');
  const [mapCours, setMapCours] = useState('');
  const [cours, setCours] = useState('');
  const [description, setDescription] = useState('');
  const [lien, setLien] = useState('');
  const [livraison, setLivraison] = useState([]);
  // eslint-disable-next-line
  const [selectedTache, setSelectedTache] = useState("");
  const [file, setFile] = useState(null);
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});
  const courscollection = collection(db, 'cours');
      useEffect(() => {
        const coachsQuery = query(courscollection,  where(user.id, '!=', null));
        const unsubscribeCoachs = onSnapshot(coachsQuery, (snapshot) => {
          const coursData = snapshot.docs.map(doc => doc.data());
          setMapCours(coursData);
        });
        return () => {
    
          unsubscribeCoachs();
        };
        // eslint-disable-next-line 
      }, []);
    console.log((mapCours));
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Valeurs des champs :", cours, description, lien, tache, file);

    // Vérification des champs vides
    if (!tache || !cours || !description || !lien || !file) {
      console.log("Veillez remplir le champs.", + errors);
    }

    try {
      const path = `/images/${file.name}`;
      const refs = ref(storage, path);
      // Enregistrez l'image dans Storage
      await uploadBytes(refs, file);
      const imageUrl = await getDownloadURL(ref(storage, refs));

      const livraisonData = {
        id_eleve:user.id,
        tache,
        cours,
        description,
        lien,
        imageUrl, // Utilisez imageUrl pour enregistrer l'URL dans Firestore
        timeStamp: serverTimestamp(),
      };

      // Envoyez les données dans Firestore
      await addDoc(collection(db, 'livraisons'), livraisonData);

    


      setCours('');
      setDescription('');
      setLien('');
      setTache('');
      setFile(null);

      console.log("Livraison ajoutée avec succès !");
      alert("Livraison ajoutée avec succès !");
    } catch (error) {
      console.error("Erreur lors de la livraison :", error);
    }
  };

  useEffect(() => {
    const livraisonsCollectionRef = collection(db, 'livraisons');
    const q = user?.statut === "eleve"?query(livraisonsCollectionRef,where("id_eleve","==",user.id)):query(livraisonsCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const livraisonsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLivraison(livraisonsData);
    });

    return () =>   unsubscribe();
    // eslint-disable-next-line
  }, []);
  // Supposez que vous ayez l'ID de la tâche que l'élève a livrée


  return (
    <div className='bg-[#ffff] dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-5 rounded-3xl'>
      <div className="container">
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
          <h1 className=' p-11 ps-0 text-start'>Livraisons</h1>

          <div className='fixed top-[180px] z-[3000] right-10'>
            <div className='bouton-modal'>
              {/* <!-- Button trigger modal --> */}
            { user?.statut ==='eleve' && (<div className="bouton">
                <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Envoyer mon travail
                </button>
              </div>)}

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
                          <select
                            className="form-select"
                            aria-label="Default select example"
                            name='tache'
                            value={tache}
                            onChange={(e) => setTache(e.target.value)} // Met à jour selectedTache
                          >
                            <option value="">Choisir une tâche</option>
                            {mapCours?.length >0 ?mapCours.map((element,index)=>(
                                                    <option key={index} value={`${element.id}`}>{`${element.title}`}</option>
                                                    
                                                )):""}
                            
                          </select>
                        </div>

                        <div className='form-group mb-2'>
                          <input type="text"
                            className='form-control'
                            placeholder='Non du cours'
                            name="cours"
                            onChange={(e) => setCours(e.target.value)}
                            value={cours} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="text"
                            className='form-control'
                            placeholder='description du tâche'
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="url"
                            className='form-control'
                            placeholder='Lien du déploiement'
                            name="lien"
                            onChange={(e) => setLien(e.target.value)}
                            value={lien} />
                        </div>

                        <div className='form-group mb-2'>
                          <input type="file"
                            className='form-control'
                            multiple
                            onChange={(e) => setFile(e.target.files[0])}
                            placeholder="Ajouter Images" />
                        </div>

                      </form>
                    </div>
                    <div class="modal-footer text-center d-flex justify-content-center align-items-center">
                      <ButtonReutilisable text='Envoyer mon travail' onClick={handleSubmit} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='row g-3 my-3'>
            {livraison.map((cour) => (
              <div className="col-md-6 col-lg-4" key={cour.id}>
                <div className="card h-100 d-flex flex-column p-3">
                  <div className="card-header bg-transparent text-white my-2">
                    <h4>{cour.tache}</h4>
                  </div>
                  <div className="card-title my-2">
                    <p><span className="fw-bold">Cours</span>: {cour.cours}</p>
                    <p><span className='fw-bold'>Description</span>: {cour.description}</p>
                    <Link to={cour.lien} target="_blank" className='fs-6 text-decoration-none text-dark'><span className="fw-bold">Lien</span>: {cour.lien}</Link>
                  </div>
                  <div className="card-body">
                      <img src={cour.imageUrl} alt="Capture d'écran" className='img-fluid mx-auto w-100 image-cartes' />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Livraisons

