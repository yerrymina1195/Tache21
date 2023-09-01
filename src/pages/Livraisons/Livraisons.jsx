import React, { useState, useEffect } from 'react';
import './Livraisons.css';
import {
  addDoc,
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  where,
  updateDoc,
  doc
} from "firebase/firestore";
import { useStateContext } from "../../contexts/ContextProvider";
import { db, storage } from "../../Firebase/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom";
import ButtonReutilisable from '../../components/ButtonReutilisable';

const Livraisons = () => {
  const { user } = useStateContext()
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
 console.log(tache)
  useEffect(() => {
    const coachsQuery = query(courscollection, where(user.id, '!=', null));
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
  const valider= async (id, eleveid)=>{
    updateDoc(doc(livraisonDocRef, id), {
      validated:true,
      rejected:false,
    })
    const notificationDocRef = collection(db, "notifications");
    const data = {
      notifiepar: user.id,
      notifieA: eleveid,
      prenom:user?.prenom,
      nom:user?.nom,
      message:`votre livraison est accepté`,
      date: serverTimestamp(),
      imageUrl:user.url,
      vu: false,
      
    };
    const docRef=  await addDoc(notificationDocRef, data);
    console.log("notification demarré avec succès !");
    await updateDoc(doc(notificationDocRef, docRef.id), {
          id: docRef.id,
        })
  }
  const rejeter = async (id,eleveid)=>{
    updateDoc(doc(livraisonDocRef, id), {
      rejected:true,
      validated:false
    })
    const notificationDocRef = collection(db, "notifications");
    const data = {
      notifiepar: user.id,
      notifieA: eleveid,
      prenom:user?.prenom,
      nom:user?.nom,
      message:`rejet de votre livraison`,
      date: serverTimestamp(),
      imageUrl:user.url,
      vu: false,
      
    };
    const docRef=  await addDoc(notificationDocRef, data);
    console.log("notification demarré avec succès !");
    await updateDoc(doc(notificationDocRef, docRef.id), {
          id: docRef.id,
        })
  }
  

  const sendNotifDemarrage = async () => {
    try {
        if (user) {
            const notificationDocRef = collection(db, "notifications");
            const data = {
              notifiepar: user.id,
              notifieA: user.coachSelf,
              prenom:user?.prenom,
              nom:user?.nom,
              message:`j'ai livré ${tache}`,
              date: serverTimestamp(),
              imageUrl:user.url,
              vu: false,
              title: tache
            };
            const docRef=  await addDoc(notificationDocRef, data);
            console.log("notification demarré avec succès !");
            await updateDoc(doc(notificationDocRef, docRef.id), {
                  id: docRef.id,
                })
                console.log("id avec succès !");
        }
    } catch (error) {
        console.error("Erreur lors du demarrage :", error);
    }
};
  const livraisonDocRef = collection(db, "livraisons");
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
        id_eleve: user.id,
        tache,
        cours,
        description,
        lien,
        imageUrl,
        photo:user.url, // Utilisez imageUrl pour enregistrer l'URL dans Firestore
        timeStamp: serverTimestamp(),
      };

      // Envoyez les données dans Firestore
     const docRef= await addDoc(livraisonDocRef, livraisonData);

   
     await updateDoc(doc(livraisonDocRef, docRef.id), {
           id: docRef.id,
         })

       await sendNotifDemarrage()
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
    const q = user?.statut === "eleve" ? query(livraisonsCollectionRef, where("id_eleve", "==", user.id)) : query(livraisonsCollectionRef);

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const livraisonsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setLivraison(livraisonsData);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  // Supposez que vous ayez l'ID de la tâche que l'élève a livrée


  return (
    <div className='container dark:bg-secondary-dark-bg text-[#000] dark:text-gray-200 p-md-3 p-lg-5 '>
      <div className="container">
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10'>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-6">
              <h1 className=''>Livraisons</h1>
            </div>
            <div className='col-md-6 text-lg-end text-md-end text-sm-start'>
              <div className='bouton-modal'>
                {/* <!-- Button trigger modal --> */}
                {user?.statut === 'eleve' && (<div className="bouton">
                  <button type="button" className="btn text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Envoyer mon travail
                  </button>
                </div>)}

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header card-header text-white">
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
                              {mapCours?.length > 0 ? mapCours.map((element, index) => (
                                <option key={index} value={`${element.title}`}>{`${element.title}`}</option>

                              )) : ""}

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
          </div>



          <div className='row g-5 my-3'>
            {livraison.map((cour) => (
              <div className="col-md-6" key={cour.id}>
                <div className="card h-100 d-flex flex-column p-2">
                  <div className="card-header bg-transparent text-white  my-2">
                    <h4>{cour.cours}</h4>
                    <img className="rounded-full h-10 w-10" src={cour.photo} alt={cour.title} />
                  </div>
                  <div className="card-body">
                    <h5 className="fw-bold">{cour.cours}</h5>
                    <p> {cour.description}</p>
                    <hr />
                    <img src={cour.imageUrl} alt="Capture d'écran" className='img-fluid mx-auto w-100 image-cartes ' />
                    <hr />
                    <Link to={cour.lien} target="_blank" className='fs-6 text-decoration-none text-dark'>{cour.lien}</Link>
                    {user?.statut === "coach" && <div className="row mt-3">
                      <div className="col-md-6">
                        <ButtonReutilisable text='Valider' onClick={()=>valider(cour.id, cour.id_eleve)} />
                      </div>
                 <div className="col-md-6 colonne text-lg-end text-md-end text-sm=start">
                        <ButtonReutilisable text='Rejetter'onClick={()=>rejeter(cour.id, cour.id_eleve)} />
                      </div>
                    </div>}
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

